import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Github, Code, Database, Film } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"
import { MobileNav } from "@/components/mobile-nav"

export const metadata = {
  title: "About JioStream | Open Source Streaming Platform",
  description:
    "Learn about JioStream, an open source educational project that demonstrates streaming platform functionality using Next.js, TMDB API, and Supabase.",
}

export default function AboutPage() {
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
            <Link href="/shows" className="text-sm font-medium hover:text-blue-400 transition">
              TV Shows
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <SearchBar />
            <Link href="https://github.com/yourusername/jiostream" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800 px-2 md:px-3 h-8">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-2 text-gray-400 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">About JioStream</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=1200" alt="JioStream Project" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm mb-2">
                <Code size={14} />
                <span>Open Source Project</span>
              </div>
              <h2 className="text-2xl font-bold">Educational Streaming Platform Demo</h2>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">
              JioStream is an open source educational project that demonstrates how to build a modern streaming platform
              using Next.js, TMDB API, and Supabase. This project is designed for learning purposes only and is not
              affiliated with any commercial streaming service.
            </p>

            <p className="text-gray-300">
              Created as a demonstration of web development techniques and best practices, JioStream showcases how to
              build a responsive, feature-rich application with authentication, data fetching, and user experience
              features similar to popular streaming platforms.
            </p>

            <h3 className="text-xl font-bold mt-8">Project Goals</h3>
            <p className="text-gray-300">
              The primary goal of JioStream is to provide a learning resource for developers interested in building
              complex web applications. By exploring the source code, developers can learn about:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
              <li>Building responsive UIs with Next.js and Tailwind CSS</li>
              <li>Implementing authentication with Supabase</li>
              <li>Fetching and displaying data from external APIs (TMDB)</li>
              <li>Creating a seamless user experience with modern web techniques</li>
              <li>Implementing features like watchlists, continue watching, and user profiles</li>
            </ul>

            <h3 className="text-xl font-bold mt-8">Technology Stack</h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-4">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Code className="h-5 w-5 mr-2 text-blue-400" />
                  <h4 className="font-bold">Frontend</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Next.js (React Framework)</li>
                  <li>Tailwind CSS</li>
                  <li>Shadcn UI Components</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Database className="h-5 w-5 mr-2 text-blue-400" />
                  <h4 className="font-bold">Backend</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Supabase (Authentication)</li>
                  <li>Next.js API Routes</li>
                  <li>PostgreSQL (via Supabase)</li>
                  <li>Vercel Hosting</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Film className="h-5 w-5 mr-2 text-blue-400" />
                  <h4 className="font-bold">Data Sources</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>TMDB API (Movie & TV Data)</li>
                  <li>Embedded Video URLs</li>
                  <li>User-generated content (comments, ratings)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8">Important Disclaimer</h3>
            <div className="bg-gray-900 p-6 rounded-lg mt-4">
              <p className="text-gray-300">
                JioStream is an <strong>educational project</strong> and is not intended for commercial use. This
                application:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Is not affiliated with any commercial streaming service</li>
                <li>Does not host or distribute any copyrighted content</li>
                <li>Uses TMDB API for movie and TV show data, but is not endorsed by TMDB</li>
                <li>Only stores minimal user data required for authentication and user experience features</li>
                <li>Uses embedded URLs for video playback demonstration purposes only</li>
              </ul>
              <p className="text-gray-300 mt-4">
                All movie and TV show data is the property of their respective owners. This project respects copyright
                laws and is designed solely for educational and demonstration purposes.
              </p>
            </div>

            <h3 className="text-xl font-bold mt-8">Our Team</h3>
            <p className="text-gray-300">
              JioStream is an open source project maintained by a community of developers passionate about web
              development and learning. We welcome contributions from anyone interested in improving the project or
              learning from it.
            </p>

            <div className="flex justify-center mt-8">
              <Link href="https://github.com/yourusername/jiostream" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 border-t border-gray-800 py-6 sm:py-8 mt-12">
        <div className="container px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">JioStream</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Browse</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="/movies" className="hover:text-white transition">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link href="/shows" className="hover:text-white transition">
                    TV Shows
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link href="/faqs" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4">Connect</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <Link
                    href="https://github.com/yourusername/jiostream"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
            <p>© 2023 JioStream. This is an open source project for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

