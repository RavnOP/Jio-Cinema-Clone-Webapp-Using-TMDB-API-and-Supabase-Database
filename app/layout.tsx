import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MobileNavigation } from "@/components/mobile-navigation"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/hooks/use-auth"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://jiostream.vercel.app"),
  title: {
    default: "JioStream - Watch Movies, TV Shows, and more",
    template: "%s | JioStream",
  },
  description:
    "Stream the latest movies, TV shows, and premium content on JioStream. Watch anytime, anywhere on your favorite devices.",
  keywords: ["JioStream", "movies", "TV shows", "streaming", "watch online", "entertainment"],
  authors: [{ name: "JioStream Team" }],
  creator: "JioStream",
  publisher: "JioStream",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jiostream.vercel.app",
    siteName: "JioStream",
    title: "JioStream - Watch Movies, TV Shows, and more",
    description: "Stream the latest movies, TV shows, and premium content on JioStream",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JioStream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JioStream - Watch Movies, TV Shows, and more",
    description: "Stream the latest movies, TV shows, and premium content on JioStream",
    images: ["/og-image.jpg"],
    creator: "@JioStream",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://jiostream.vercel.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
          <MobileNavigation />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'