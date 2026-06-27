import Link from "next/link"
import Image from "next/image"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | SS Catering & Events | Wedding & Event Photos | Coimbatore",
  description: "View our gallery of beautiful wedding catering, corporate events, and special occasions in Coimbatore.",
  keywords: "catering gallery, wedding photos, event photos, brahmin catering coimbatore"
}

export default function GalleryPage() {
  const galleryCategories = [
    {
      name: "Weddings",
      count: "30+ Photos",
      image: "Wedding Events Gallery"
    },
    {
      name: "Corporate Events",
      count: "15+ Photos",
      image: "Corporate Catering"
    },
    {
      name: "Birthday Functions",
      count: "15+ Photos",
      image: "Birthday Celebrations"
    },
    {
      name: "Food Display",
      count: "25+ Photos",
      image: "Food Spreads"
    },
    {
      name: "Team Photos",
      count: "10+ Photos",
      image: "Team Photos"
    },
    {
      name: "Venue Setups",
      count: "10+ Photos",
      image: "Venue Setups"
    }
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">Gallery</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
            Explore our stunning collection of catering events and celebrations
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Gallery Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories.map((category, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer border-2 border-gold/20 hover:border-gold/50 transition-all"
              >
                {/* Placeholder - In production, this would be actual images */}
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-maroon/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">
                      {category.name === 'Weddings' && '💒'}
                      {category.name === 'Corporate Events' && '💼'}
                      {category.name === 'Birthday Functions' && '🎂'}
                      {category.name === 'Food Display' && '🍽️'}
                      {category.name === 'Team Photos' && '👥'}
                      {category.name === 'Venue Setups' && '✨'}
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                      {category.name}
                    </h3>
                    <p className="text-charcoal/70">{category.count}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Video Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-maroon mb-8 text-center">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Event Setup Walkthrough", description: "From setup to serving" },
              { title: "Kitchen Preparation", description: "Hygienic food preparation" },
              { title: "Client Testimonials", description: "Happy customers sharing their experience" }
            ].map((video, index) => (
              <div key={index} className="rounded-lg overflow-hidden border-2 border-gold/20 hover:border-gold/50 transition-all">
                <div className="w-full aspect-video bg-gradient-to-br from-charcoal to-maroon flex items-center justify-center group cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">▶</span>
                    </div>
                    <h3 className="text-white font-playfair font-bold mb-2">{video.title}</h3>
                    <p className="text-gold text-sm">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Ready to Create Your Moment?
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Let us cater your next event with the same excellence shown in our gallery
          </p>
          <a href="tel:+918667566318" className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors">
            Call Us Now: 086675 66318
          </a>
        </div>
      </section>

      {/* NAP Block */}
      <div className="py-12 md:py-16 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4">
          <NAPBlock />
        </div>
      </div>
    </main>
  )
}
