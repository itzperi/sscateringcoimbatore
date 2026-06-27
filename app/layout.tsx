import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "SS Catering & Events | Best Brahmin Caterers in Coimbatore for Weddings & Corporate Events",
  description:
    "SS Catering & Events – Coimbatore's #1 Brahmin vegetarian caterers since 2012. Pure onion/garlic-free meals for weddings, corporate events, birthdays & housewarming. Call 086675 66318.",
  keywords:
    "catering services in coimbatore, brahmin catering coimbatore, vegetarian caterers coimbatore, wedding catering coimbatore, best catering services in coimbatore with price list",
  metadataBase: new URL("https://www.sscateringcoimbatore.com"),
  canonical: "https://www.sscateringcoimbatore.com",
  openGraph: {
    title: "SS Catering & Events | Best Brahmin Caterers in Coimbatore for Weddings & Corporate Events",
    description: "SS Catering & Events – Coimbatore's #1 Brahmin vegetarian caterers since 2012. Pure onion/garlic-free meals.",
    images: [
      {
        url: "https://www.sscateringcoimbatore.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SS Catering and Events Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Catering & Events | Best Brahmin Caterers in Coimbatore",
    description: "Coimbatore's top-rated Brahmin catering service for weddings, corporate events & more.",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#C9940A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-cream">
      <head>
        <link rel="canonical" href="https://www.sscateringcoimbatore.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SS Catering & Events" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="google-site-verification" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CateringBusiness",
            "name": "SS Catering & Events",
            "alternateName": "Best Caterers in Coimbatore for Weddings & Corporate Events",
            "url": "https://www.sscateringcoimbatore.com/",
            "logo": "https://www.sscateringcoimbatore.com/assets/logo.png",
            "image": ["https://www.sscateringcoimbatore.com/assets/og-image.jpg"],
            "description": "Coimbatore's top-rated Brahmin catering service offering pure vegetarian catering for weddings, corporate events, birthdays, and housewarming functions since 2012.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7, Selvanayaki Garden, Siruvani Main Road",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641101",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.0168",
              "longitude": "76.9558"
            },
            "telephone": "+918667566318",
            "email": "info@sscateringcoimbatore.com",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "servesCuisine": ["South Indian", "Tamil Brahmin", "Vegetarian"],
            "priceRange": "₹₹",
            "areaServed": ["Coimbatore", "Tamil Nadu", "Tirupur", "Erode", "Pollachi"],
            "foundingDate": "2012-02",
            "sameAs": [
              "https://wa.me/918667566318",
              "https://www.google.com/maps/place/SS+Catering+%26+Events"
            ]
          })
        }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
