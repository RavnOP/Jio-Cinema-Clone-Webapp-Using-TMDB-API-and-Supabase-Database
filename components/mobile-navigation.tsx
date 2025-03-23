"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Film, Tv, TrendingUp, User } from "lucide-react"

export function MobileNavigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (pathname === "/") {
      setShouldRender(false)
    } else {
      setShouldRender(true)
    }
  }, [pathname])

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  if (!shouldRender) {
    return null
  }

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-around items-center h-16">
        <Link
          href="/home"
          className={`flex flex-col items-center justify-center text-xs p-2 ${
            pathname === "/home" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Home className="h-5 w-5 mb-1" />
          <span>Home</span>
        </Link>
        <Link
          href="/movies"
          className={`flex flex-col items-center justify-center text-xs p-2 ${
            pathname.includes("/movies") || pathname.includes("/movie/") ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Film className="h-5 w-5 mb-1" />
          <span>Movies</span>
        </Link>
        <Link
          href="/shows"
          className={`flex flex-col items-center justify-center text-xs p-2 ${
            pathname.includes("/shows") || pathname.includes("/show/") ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <Tv className="h-5 w-5 mb-1" />
          <span>TV Shows</span>
        </Link>
        <Link
          href="/trending"
          className={`flex flex-col items-center justify-center text-xs p-2 ${
            pathname === "/trending" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <TrendingUp className="h-5 w-5 mb-1" />
          <span>Trending</span>
        </Link>
        <Link
          href="/profile"
          className={`flex flex-col items-center justify-center text-xs p-2 ${
            pathname === "/profile" ? "text-blue-400" : "text-gray-400"
          }`}
        >
          <User className="h-5 w-5 mb-1" />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  )
}

