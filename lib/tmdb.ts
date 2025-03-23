// Simple in-memory cache
const cache: Record<string, { data: any; timestamp: number }> = {}
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const FETCH_TIMEOUT = 8000 // 8 seconds timeout

export async function fetchTMDB(endpoint: string, params: Record<string, string> = {}) {
  // Determine if we're on the client or server
  const isClient = typeof window !== "undefined"

  // Build the URL - use proxy on client, direct on server
  let url: URL

  if (isClient) {
    // Client-side: use our proxy endpoint
    url = new URL(`/api/tmdb/${endpoint}`, window.location.origin)
  } else {
    // Server-side: use TMDB API directly
    url = new URL(`https://api.themoviedb.org/3/${endpoint}`)
    url.searchParams.append("api_key", "aad3fab1607b552befd9a2ac37e556af")
  }

  // Add additional params
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  const cacheKey = url.toString()

  // Check cache first
  const cachedData = cache[cacheKey]
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return cachedData.data
  }

  try {
    // Create a timeout promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timeout")), FETCH_TIMEOUT)
    })

    // Create the fetch promise
    const fetchPromise = fetch(url.toString(), {
      next: { revalidate: 3600 }, // Cache for 1 hour on the server
      headers: isClient
        ? {}
        : {
            Accept: "application/json",
            "User-Agent": "JioCinema/1.0",
          },
    })

    // Race the fetch against the timeout
    const response = (await Promise.race([fetchPromise, timeoutPromise])) as Response

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    // Store in cache
    cache[cacheKey] = { data, timestamp: Date.now() }

    return data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error)

    // Return empty results or cached data if available
    if (cachedData) {
      console.log(`Using cached data for ${endpoint}`)
      return cachedData.data
    }

    // Return appropriate empty data structure based on endpoint
    if (endpoint.includes("season")) {
      return { episodes: [] }
    } else if (endpoint.includes("credits")) {
      return { cast: [], crew: [] }
    } else if (endpoint.includes("videos")) {
      return { results: [] }
    } else if (
      endpoint.includes("movie/") &&
      !endpoint.includes("/similar") &&
      !endpoint.includes("/recommendations")
    ) {
      return {
        title: "Movie information unavailable",
        overview: "Could not load movie details at this time.",
        genres: [],
        release_date: "",
        poster_path: "",
        backdrop_path: "",
      }
    } else if (endpoint.includes("tv/") && !endpoint.includes("/similar") && !endpoint.includes("/recommendations")) {
      return {
        name: "Show information unavailable",
        overview: "Could not load show details at this time.",
        genres: [],
        seasons: [],
        first_air_date: "",
        poster_path: "",
        backdrop_path: "",
      }
    } else {
      return { results: [] }
    }
  }
}

