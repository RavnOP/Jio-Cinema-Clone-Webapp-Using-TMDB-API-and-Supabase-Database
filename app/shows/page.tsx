import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Filter, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchTMDB } from "@/lib/tmdb"
import { SearchBar } from "@/components/search-bar"
import { MobileNav } from "@/components/mobile-nav"

export const metadata = {
  title: "TV Shows | JioStream",
  description: "Browse all TV shows on JioStream",
}

export default function ShowsPage({ searchParams }: { searchParams: { page?: string; tab?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const currentTab = searchParams.tab || "popular"

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4">
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link href="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                JioStream
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/movies" className="text-sm font-medium hover:text-blue-400 transition">
              Movies
            </Link>
            <Link href="/shows" className="text-sm font-medium text-blue-400 transition">
              TV Shows
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <SearchBar />
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 px-2 md:px-3 h-8">
              <span className="hidden sm:inline">Sign In</span>
              <span className="sm:hidden">Sign</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Link href="/" className="mr-2 text-gray-400 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">TV Shows</h1>
          <Button variant="outline" size="sm" className="ml-auto border-gray-700 gap-1 h-8">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>

        <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:-mx-4 sm:px-4">
          <Tabs defaultValue={currentTab} className="w-full">
            <TabsList className="bg-gray-900 border border-gray-800 mb-4 sm:mb-6 w-auto inline-flex">
              <TabsTrigger value="popular" asChild>
                <Link href="/shows?tab=popular" className="h-full flex items-center justify-center">
                  Popular
                </Link>
              </TabsTrigger>
              <TabsTrigger value="top-rated" asChild>
                <Link href="/shows?tab=top-rated" className="h-full flex items-center justify-center">
                  Top Rated
                </Link>
              </TabsTrigger>
              <TabsTrigger value="airing-today" asChild>
                <Link href="/shows?tab=airing-today" className="h-full flex items-center justify-center">
                  Airing Today
                </Link>
              </TabsTrigger>
              <TabsTrigger value="on-the-air" asChild>
                <Link href="/shows?tab=on-the-air" className="h-full flex items-center justify-center">
                  On The Air
                </Link>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="popular">
              <Suspense fallback={<ShowGridSkeleton />}>
                <ShowGrid endpoint="tv/popular" page={currentPage} tab="popular" />
              </Suspense>
            </TabsContent>

            <TabsContent value="top-rated">
              <Suspense fallback={<ShowGridSkeleton />}>
                <ShowGrid endpoint="tv/top_rated" page={currentPage} tab="top-rated" />
              </Suspense>
            </TabsContent>

            <TabsContent value="airing-today">
              <Suspense fallback={<ShowGridSkeleton />}>
                <ShowGrid endpoint="tv/airing_today" page={currentPage} tab="airing-today" />
              </Suspense>
            </TabsContent>

            <TabsContent value="on-the-air">
              <Suspense fallback={<ShowGridSkeleton />}>
                <ShowGrid endpoint="tv/on_the_air" page={currentPage} tab="on-the-air" />
              </Suspense>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

async function ShowGrid({ endpoint, page = 1, tab }: { endpoint: string; page: number; tab: string }) {
  const data = await fetchTMDB(endpoint, { page: page.toString() })
  const totalPages = data.total_pages || 1

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {data.results && data.results.length > 0 ? (
          data.results.map((show: any) => (
            <Link
              key={show.id}
              href={`/show/${show.id}`}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="aspect-[2/3] bg-gray-800 relative rounded-lg overflow-hidden">
                {show.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {show.name.charAt(0)}
                  </div>
                )}

                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 h-8 w-8 sm:h-9 sm:w-9"
                  >
                    <Play className="h-4 w-4 fill-white" />
                  </Button>
                </div>

                {/* Content that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-white truncate text-xs sm:text-sm">{show.name}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-300 mt-1">
                    <span>{new Date(show.first_air_date || "").getFullYear() || "New"}</span>
                    {show.vote_average && (
                      <span className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-1 fill-yellow-400" />
                        {show.vote_average.toFixed(1)}
                      </span>
                    )}
                  </div>
                </div>

                {show.first_air_date && new Date(show.first_air_date).getFullYear() === new Date().getFullYear() && (
                  <Badge className="absolute top-1 left-1 bg-green-600 hover:bg-green-700 text-[10px] px-1.5 py-0.5">
                    New
                  </Badge>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400">No shows found</div>
        )}
      </div>

      <Pagination currentPage={page} totalPages={Math.min(totalPages, 20)} tab={tab} />
    </div>
  )
}

function Pagination({ currentPage, totalPages, tab }: { currentPage: number; totalPages: number; tab: string }) {
  return (
    <div className="flex justify-center items-center gap-1 py-4 sm:py-6 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        className="border-gray-700 h-8 px-2 text-xs"
        asChild
      >
        <Link href={`/shows?tab=${tab}&page=${Math.max(1, currentPage - 1)}`}>Prev</Link>
      </Button>

      <div className="flex items-center gap-1">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = i + 1
          const isActive = pageNum === currentPage

          return (
            <Button
              key={i}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={`${isActive ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700"} h-8 w-8 p-0 text-xs`}
              asChild
            >
              <Link href={`/shows?tab=${tab}&page=${pageNum}`}>{pageNum}</Link>
            </Button>
          )
        })}

        {totalPages > 5 && (
          <>
            <span className="text-gray-500">...</span>
            <Button variant="outline" size="sm" className="border-gray-700 h-8 w-8 p-0 text-xs" asChild>
              <Link href={`/shows?tab=${tab}&page=${totalPages}`}>{totalPages}</Link>
            </Button>
          </>
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        className="border-gray-700 h-8 px-2 text-xs"
        asChild
      >
        <Link href={`/shows?tab=${tab}&page=${Math.min(totalPages, currentPage + 1)}`}>Next</Link>
      </Button>
    </div>
  )
}

function ShowGridSkeleton() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
      {Array(18)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-[2/3] rounded-lg bg-gray-800" />
          </div>
        ))}
    </div>
  )
}

