"use client"

import Link from "next/link"
import { SearchBar } from "@/components/search-bar"
import { MobileNav } from "@/components/mobile-nav"
import { AuthButton } from "@/components/auth/auth-button"

export function ClientHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-black backdrop-blur-sm border-b border-gray-800">
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
          <Link href="/" className="text-sm font-medium hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/movies" className="text-sm font-medium hover:text-blue-400 transition-colors duration-200">
            Movies
          </Link>
          <Link href="/shows" className="text-sm font-medium hover:text-blue-400 transition-colors duration-200">
            TV Shows
          </Link>
          <Link href="/trending" className="text-sm font-medium hover:text-blue-400 transition-colors duration-200">
            Trending
          </Link>
          <Link href="/watchlist" className="text-sm font-medium hover:text-blue-400 transition-colors duration-200">
            My Watchlist
          </Link>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SearchBar />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}

