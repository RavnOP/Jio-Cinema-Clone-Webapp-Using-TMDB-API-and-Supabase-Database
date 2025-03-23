import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ChevronRight, Globe, SmartphoneIcon as DeviceMobile, Award, Github, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LandingSearchBar } from "@/components/landing-search-bar"
import { AuthButton } from "@/components/auth/auth-button"

export const metadata: Metadata = {
  title: "JioStream - Open Source Streaming Platform | Watch Movies & TV Shows",
  description:
    "JioStream is an open source streaming platform demo built with Next.js, TMDB API, and Supabase. Explore movies and TV shows in this educational project.",
  keywords:
    "JioStream, open source, streaming platform, TMDB API, Supabase, Next.js, React, educational project, movie database, TV shows",
  openGraph: {
    title: "JioStream - Open Source Streaming Platform | Watch Movies & TV Shows",
    description:
      "JioStream is an open source streaming platform demo built with Next.js, TMDB API, and Supabase. Explore movies and TV shows in this educational project.",
    url: "https://jiostream.vercel.app",
    siteName: "JioStream",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US-en-20250317-TRIFECTA-perspective_46e2ea88-09df-4e34-8e0c-2a2e8a2cda94_large.jpg-1QadysCtqt5zBwcjLYLXQi4aOUQub6.jpeg",
        width: 1200,
        height: 630,
        alt: "JioStream - Open Source Streaming Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JioStream - Open Source Streaming Platform | Watch Movies & TV Shows",
    description:
      "JioStream is an open source streaming platform demo built with Next.js, TMDB API, and Supabase. Explore movies and TV shows in this educational project.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US-en-20250317-TRIFECTA-perspective_46e2ea88-09df-4e34-8e0c-2a2e8a2cda94_large.jpg-1QadysCtqt5zBwcjLYLXQi4aOUQub6.jpeg",
    ],
  },
  alternates: {
    canonical: "https://jiostream.vercel.app",
    languages: {
      "en-US": "https://jiostream.vercel.app/en-US",
    },
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full z-50 bg-gradient-to-b from-black/90 to-transparent">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              JioStream
            </h1>
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/home">
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 hover:text-white text-xs md:text-sm h-8 md:h-9"
              >
                Explore Content
              </Button>
            </Link>
            <AuthButton landingPage={true} />
          </div>
        </div>
      </header>

      {/* Hero Section with the provided image */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/US-en-20250317-TRIFECTA-perspective_46e2ea88-09df-4e34-8e0c-2a2e8a2cda94_large.jpg-1QadysCtqt5zBwcjLYLXQi4aOUQub6.jpeg"
            alt="JioStream streaming library with popular movies and TV shows"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 pt-24 pb-16 md:py-0 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm mb-6">
              <Code size={14} />
              <span>Open Source Project</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Explore Movies & Shows with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                JioStream
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              An open source streaming platform demo built with Next.js, TMDB API, and Supabase. For educational
              purposes only.
            </p>

            <div className="max-w-xl mx-auto mb-8">
              <LandingSearchBar />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/home">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Explore  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/yourusername/jiostream" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800 hover:text-white w-full sm:w-auto"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub Repo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">About This Project</h2>
            <p className="text-gray-300">
              JioStream is an open source educational project that demonstrates how to build a streaming platform using
              modern web technologies. It uses TMDB API for movie and TV show data, Supabase for authentication, and
              embedded streaming URLs for video playback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">TMDB Integration</h3>
              <p className="text-gray-300">
                All movie and TV show data is sourced from The Movie Database (TMDB) API. No content is stored locally.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DeviceMobile className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Supabase Auth</h3>
              <p className="text-gray-300">
                User authentication is handled by Supabase. Only basic user information is stored for authentication
                purposes.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Purpose</h3>
              <p className="text-gray-300">
                This project is for educational purposes only. It demonstrates modern web development techniques and
                best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Built With Modern Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50">
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Next.js
                </span>
              </div>
              <p className="text-sm text-gray-300">React framework for production</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50">
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  TMDB API
                </span>
              </div>
              <p className="text-sm text-gray-300">Movie and TV show data</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50">
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Supabase
                </span>
              </div>
              <p className="text-sm text-gray-300">Authentication and user data</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50">
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-sm text-gray-300">Utility-first CSS framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">How JioStream Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>

            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center h-full border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Browse Content</h3>
                <p className="text-gray-300">
                  Browse movies and TV shows fetched from the TMDB API. Filter by genre, rating, and more.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center h-full border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Create Account</h3>
                <p className="text-gray-300">
                  Sign up with Supabase authentication to save your watchlist, track progress, and personalize your
                  experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center h-full border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Explore Features</h3>
                <p className="text-gray-300">
                  Discover how a modern streaming platform works with features like watchlist, continue watching, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Important Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  JioStream is an <strong>educational open source project</strong> created to demonstrate web
                  development techniques. It is not affiliated with any commercial streaming service.
                </p>
                <p>
                  This project uses The Movie Database (TMDB) API for movie and TV show information, but is not endorsed
                  or certified by TMDB. All movie and show data is the property of their respective owners.
                </p>
                <p>
                  No actual video content is hosted or distributed by this application. Any video playback is simulated
                  or uses publicly available embedded URLs for demonstration purposes only.
                </p>
                <p>
                  This application only stores minimal user data required for authentication and user experience
                  features (watchlist, continue watching, etc.) through Supabase.
                </p>
                <p className="font-semibold">
                  JioStream is not intended for commercial use and should only be used for learning and educational
                  purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Explore JioStream?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out this educational project to learn how modern streaming platforms work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Explore 
              </Button>
            </Link>
            <AuthButton landingPage={true} size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is JioStream?</h3>
              <p className="text-gray-300">
                JioStream is an open source educational project that demonstrates how to build a streaming platform
                using Next.js, TMDB API, and Supabase. It's designed for learning purposes only.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is this a real streaming service?</h3>
              <p className="text-gray-300">
                No, JioStream is not a real streaming service. It's an educational project that simulates the
                functionality of a streaming platform. No actual content is hosted or distributed.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Where does the movie data come from?</h3>
              <p className="text-gray-300">
                All movie and TV show data is sourced from The Movie Database (TMDB) API. JioStream does not store any
                content data locally.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What data is stored about users?</h3>
              <p className="text-gray-300">
                JioStream only stores minimal user data required for authentication and user experience features
                (watchlist, continue watching, etc.) through Supabase. No personal data is shared or sold.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Can I contribute to this project?</h3>
              <p className="text-gray-300">
                Yes! JioStream is an open source project. You can find the source code on GitHub and contribute by
                submitting pull requests or reporting issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JioStream",
            url: "https://jiostream.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://jiostream.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            description:
              "JioStream is an open source streaming platform demo built with Next.js, TMDB API, and Supabase. Explore movies and TV shows in this educational project.",
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "JioStream",
            url: "https://jiostream.vercel.app",
            logo: "https://jiostream.vercel.app/logo.png",
            description: "An open source educational project demonstrating streaming platform functionality",
          }),
        }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JioStream",
            applicationCategory: "WebApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description: "An open source educational project demonstrating streaming platform functionality",
          }),
        }}
      />
    </div>
  )
}

