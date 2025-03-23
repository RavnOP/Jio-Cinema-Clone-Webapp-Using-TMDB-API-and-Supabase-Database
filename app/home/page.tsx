import { Suspense } from "react"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedMovie } from "@/components/featured-movie"
import { MovieRow } from "@/components/movie-row"
import { Header } from "@/app/header"
import { ContinueWatchingRow } from "@/components/continue-watching-row"

export const metadata: Metadata = {
  title: "JioStream - Home | Watch Movies, TV Shows, and more",
  description:
    "Stream the latest movies, TV shows, and premium content on JioStream. Browse our curated selection of trending and popular content.",
  keywords: "JioStream, movies, TV shows, streaming, watch online, trending, popular",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <Suspense fallback={<div className="h-[300px] sm:h-[400px] bg-gray-900 animate-pulse" />}>
          <FeaturedMovie />
        </Suspense>

        <div className="container px-3 sm:px-4 py-6 sm:py-8">
          <Suspense fallback={<MovieRowSkeleton title="Continue Watching" />}>
            <ContinueWatchingRow />
          </Suspense>

          <Tabs defaultValue="trending" className="w-full mt-6 sm:mt-8">
            <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:-mx-4 sm:px-4">
              <TabsList className="bg-gray-900 border border-gray-800 mb-4 sm:mb-6 w-auto inline-flex">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="movies">Movies</TabsTrigger>
                <TabsTrigger value="shows">TV Shows</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="trending" className="space-y-6 sm:space-y-8">
              <Suspense fallback={<MovieRowSkeleton title="Trending Now" />}>
                <MovieRow title="Trending Now" endpoint="trending/all/day" viewAllLink="/trending" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="Popular Movies" />}>
                <MovieRow title="Popular Movies" endpoint="movie/popular" viewAllLink="/movies" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="Top Rated" />}>
                <MovieRow title="Top Rated" endpoint="movie/top_rated" viewAllLink="/movies/top-rated" />
              </Suspense>
            </TabsContent>
            <TabsContent value="movies" className="space-y-6 sm:space-y-8">
              <Suspense fallback={<MovieRowSkeleton title="Popular Movies" />}>
                <MovieRow title="Popular Movies" endpoint="movie/popular" viewAllLink="/movies" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="Now Playing" />}>
                <MovieRow title="Now Playing" endpoint="movie/now_playing" viewAllLink="/movies/now-playing" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="Upcoming Movies" />}>
                <MovieRow title="Upcoming Movies" endpoint="movie/upcoming" viewAllLink="/movies/upcoming" />
              </Suspense>
            </TabsContent>
            <TabsContent value="shows" className="space-y-6 sm:space-y-8">
              <Suspense fallback={<MovieRowSkeleton title="Popular TV Shows" />}>
                <MovieRow title="Popular TV Shows" endpoint="tv/popular" viewAllLink="/shows" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="Top Rated Shows" />}>
                <MovieRow title="Top Rated Shows" endpoint="tv/top_rated" viewAllLink="/shows/top-rated" />
              </Suspense>
              <Suspense fallback={<MovieRowSkeleton title="On Air Today" />}>
                <MovieRow title="On Air Today" endpoint="tv/airing_today" viewAllLink="/shows/airing-today" />
              </Suspense>
            </TabsContent>
            <TabsContent value="featured" className="space-y-6 sm:space-y-8">
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-4">Featured Content</h3>
                <p className="text-gray-400 mb-6">Explore our curated selection of top movies and shows</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Explore Now</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function MovieRowSkeleton({ title }: { title: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <Button variant="link" size="sm" className="text-blue-400 h-8 px-2">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[2/3] rounded-lg bg-gray-800" />
            </div>
          ))}
      </div>
    </div>
  )
}

