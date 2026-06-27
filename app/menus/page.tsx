import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding & Catering Menus | SS Catering & Events | Coimbatore",
  description: "Browse our authentic Brahmin vegetarian catering menus for weddings, corporate events, birthdays, and special occasions in Coimbatore.",
  keywords: "catering menus, wedding menu, brahmin menu, vegetarian menu coimbatore"
}

export default function MenusPage() {
  const menus = [
    {
      name: "Wedding Menu",
      tamil: "திருமண மெனு",
      description: "Complete menu packages for wedding ceremonies",
      items: ["Sambar", "Rasam", "Multiple Curries", "Biriyani", "Breads", "Sweets", "Payasam"]
    },
    {
      name: "Brahmin Menu",
      tamil: "பிராமண மெனு",
      description: "Traditional Brahmin vegetarian cuisine",
      items: ["Sambar", "Rasam", "Avial", "Olan", "Papad", "Pickle", "Rice"]
    },
    {
      name: "Corporate Menu",
      tamil: "நிறுவன மெனு",
      description: "Professional catering for business events",
      items: ["Multiple Curries", "Rice", "Breads", "Salads", "Desserts"]
    },
    {
      name: "Birthday Menu",
      tamil: "பிறந்தநாள் மெனு",
      description: "Festive celebration menus",
      items: ["Sambar", "Rasam", "Special Curries", "Biriyani", "Cake", "Desserts"]
    },
    {
      name: "Mini Meals Menu",
      tamil: "சிறிய உணவு மெனு",
      description: "Light snacks and mini meals",
      items: ["Dosa", "Idli", "Vada", "Samosa", "Sweets"]
    },
    {
      name: "Special Occasion Menu",
      tamil: "சிறப்பு விழா மெனு",
      description: "Customized menus for any occasion",
      items: ["Multiple Options", "Chef Selection", "Customizable", "Premium Items"]
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
            <span className="text-charcoal font-semibold">Menus</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Our Catering Menus
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
            Explore our authentic Brahmin vegetarian menus for every occasion
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Menus Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((menu, index) => (
              <Card key={index} className="p-6 border-gold/20 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-playfair font-bold text-maroon mb-2">
                  {menu.name}
                </h3>
                <p className="text-sm text-gold mb-3 font-tamil">{menu.tamil}</p>
                <p className="text-charcoal/80 text-sm mb-4">{menu.description}</p>
                <div className="bg-cream p-4 rounded-lg mb-4">
                  <p className="text-xs text-charcoal/60 mb-2 font-semibold">Includes:</p>
                  <ul className="space-y-1">
                    {menu.items.map((item, i) => (
                      <li key={i} className="text-sm text-charcoal/80 flex items-center gap-2">
                        <span className="text-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2 bg-gold hover:bg-gold/90 text-charcoal font-semibold rounded-lg transition-colors">
                  Request Quote
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Custom Menu CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Need a Custom Menu?
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            We can customize any menu to match your preferences and dietary requirements
          </p>
          <a href="https://wa.me/918667566318" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors">
            Message Us on WhatsApp
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
