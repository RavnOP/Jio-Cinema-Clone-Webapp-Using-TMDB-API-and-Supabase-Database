"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Info, Play } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

import { Button } from "@/components/ui/button"
import { WatchlistButton } from "@/components/watchlist-button"

export function FeaturedMovie() {
  const [movie, setMovie] = useState<any>(null)
  const [movieDetails, setMovieDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedMovie = async () => {
      try {
        setIsLoading(true)
        // First fetch popular movies
        const response = await fetch("/api/tmdb/movie/popular")
        if (!response.ok) throw new Error("Failed to fetch popular movies")
        const data = await response.json()

        if (data.results && data.results.length > 0) {
          const featuredMovie = data.results[0]
          setMovie(featuredMovie)

          // Then fetch additional details for the featured movie
          const detailsResponse = await fetch(`/api/tmdb/movie/${featuredMovie.id}`)
          if (!detailsResponse.ok) throw new Error("Failed to fetch movie details")
          const detailsData = await detailsResponse.json()
          setMovieDetails(detailsData)
        }
      } catch (error) {
        console.error("Error fetching featured movie:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedMovie()
  }, [])

  if (isLoading || !movie || !movieDetails) {
    return (
      <div className="relative aspect-[16/9] sm:aspect-auto sm:h-[60vh] min-h-[250px] sm:min-h-[400px] w-full bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  // Format runtime
  const hours = Math.floor(movieDetails.runtime / 60)
  const minutes = movieDetails.runtime % 60

  return (
    <div className="relative aspect-[16/9] sm:aspect-auto sm:h-[60vh] min-h-[250px] sm:min-h-[400px] w-full">
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative h-full container flex flex-col justify-end pb-6 sm:pb-10 px-3 sm:px-4">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 max-w-2xl">{movie.title}</h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-300 mb-2 sm:mb-3">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span>
            {hours}h {minutes}m
          </span>
          <span className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span> {movie.vote_average.toFixed(1)}
          </span>
          <span>{movieDetails.adult ? "18+" : "13+"}</span>
        </div>
        <p className="text-gray-300 max-w-xl mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm">{movie.overview}</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button className="bg-red-600 hover:bg-red-700" asChild>
            <Link href={`/movie/${movie.id}`}>
              <Play className="h-5 w-5 mr-2" /> Watch Now
            </Link>
          </Button>
          <WatchlistButton contentId={movie.id.toString()} contentType="movie" />
          <Button
            variant="outline"
            className="border-white gap-2 h-8 px-3 text-xs sm:text-sm hidden sm:inline-flex"
            asChild
          >
            <Link href={`/movie/${movie.id}`}>
              <Info className="h-3 w-3 sm:h-4 sm:w-4" /> More Info
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

