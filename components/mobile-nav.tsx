"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden" aria-label="Open Menu">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 border-gray-800 text-white p-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                JioCinema
              </h1>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <ul className="space-y-2 px-2">
              <li>
                <Link
                  href="/home"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/movies"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="/watchlist"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  My Watchlist
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

