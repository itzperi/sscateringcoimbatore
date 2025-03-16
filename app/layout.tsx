import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SS Catering and Events | Best Catering Service in Coimbatore",
  description:
    "Deliciously crafted and expertly served authentic South Indian catering for weddings, corporate events, and special occasions in Coimbatore. Traditional banana leaf meals, biryani specialties, and more.",
  keywords:
    "catering service, Coimbatore catering, South Indian food, banana leaf meals, wedding catering, corporate catering, event catering, SS Catering, traditional food",
  openGraph: {
    title: "SS Catering and Events | Best Catering Service in Coimbatore",
    description: "Authentic South Indian catering for weddings, corporate events, and special occasions in Coimbatore.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ekk2WzMlyeQZ2lUkIIYmUeeeBgFU9i.png",
        width: 1200,
        height: 630,
        alt: "SS Catering and Events Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sscatering.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SS Catering and Events" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'