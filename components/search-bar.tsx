"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, X, Star } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/loading-spinner"

interface SearchResult {
  id: number
  title?: string
  name?: string
  media_type: string
  poster_path: string | null
  release_date?: string
  first_air_date?: string
  vote_average: number
}

export function SearchBar({ initialQuery = "" }: { initialQuery?: string }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [query, setQuery] = useState(initialQuery)
  const debouncedQuery = useDebounce(query, 300)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Fetch search results
  const fetchResults = useCallback(async () => {
    if (!debouncedQuery.trim() || debouncedQuery.length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch(`/api/tmdb/search/multi?query=${encodeURIComponent(debouncedQuery)}&page=1`)
      const data = await res.json()

      const filteredResults = data.results
        .filter(
          (item: any) =>
            (item.media_type === "movie" || item.media_type === "tv") && (item.poster_path || item.backdrop_path),
        )
        .slice(0, 5)

      setResults(filteredResults)
      setShowResults(true)
    } catch (err) {
      console.error("Search error:", err)
    } finally {
      setIsLoading(false)
    }
  }, [debouncedQuery])

  // Fetch results when debounced query changes
  useEffect(() => {
    fetchResults()
  }, [debouncedQuery, fetchResults])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setShowResults(false)
    }
  }

  const handleResultClick = (result: SearchResult) => {
    setShowResults(false)
    router.push(`/${result.media_type === "tv" ? "show" : "movie"}/${result.id}`)
  }

  return (
    <div className="relative" ref={searchRef}>
      {isExpanded ? (
        <form onSubmit={handleSearch} className="flex items-center">
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search movies, shows..."
            className="w-[140px] sm:w-[180px] md:w-[250px] bg-gray-900 border-gray-700 text-white h-9 text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            onFocus={() => query.trim().length >= 2 && setShowResults(true)}
          />
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="absolute right-0 h-9 w-9"
            onClick={() => {
              setQuery("")
              setIsExpanded(false)
              setShowResults(false)
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </form>
      ) : (
        <Button size="icon" variant="ghost" onClick={() => setIsExpanded(true)} className="h-9 w-9">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      )}

      {/* Live search results dropdown */}
      {isExpanded && showResults && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden">
          {isLoading ? (
            <div className="p-2 flex justify-center">
              <LoadingSpinner size="small" />
            </div>
          ) : results.length > 0 ? (
            <ul className="max-h-[70vh] overflow-y-auto">
              {results.map((result) => (
                <li key={`${result.id}-${result.media_type}`} className="border-b border-gray-800 last:border-0">
                  <button
                    className="w-full text-left p-2 hover:bg-gray-800 flex items-center gap-3 transition-colors"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="relative h-16 w-12 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                      {result.poster_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
                          alt={result.title || result.name || ""}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          {(result.title || result.name || "").charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{result.title || result.name}</h4>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <span className="mr-2">
                          {new Date(result.release_date || result.first_air_date || "").getFullYear() || "N/A"}
                        </span>
                        <span className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 mr-1 fill-yellow-400" />
                          {result.vote_average?.toFixed(1) || "N/A"}
                        </span>
                      </div>
                    </div>
                    <Badge className="ml-auto bg-gray-800 text-[10px]">
                      {result.media_type === "tv" ? "TV" : "Movie"}
                    </Badge>
                  </button>
                </li>
              ))}
              <li className="p-2 bg-gray-800/50">
                <Button
                  variant="link"
                  className="w-full text-blue-400 text-sm"
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(query)}`)
                    setShowResults(false)
                  }}
                >
                  See all results for "{query}"
                </Button>
              </li>
            </ul>
          ) : (
            <div className="p-4 text-center text-sm text-gray-400">No results found. Try a different search term.</div>
          )}
        </div>
      )}
    </div>
  )
}

