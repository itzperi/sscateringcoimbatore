import { Leaf, Clock, TrendingUp, Shield, Users, MapPin } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Leaf,
      title: "Authentic Brahmin Recipes",
      description: "Passed down through generations with traditional preparation methods"
    },
    {
      icon: Leaf,
      title: "No Onion, No Garlic",
      description: "Truly sattvic, suitable for all Hindu rituals and ceremonies"
    },
    {
      icon: Shield,
      title: "Hygienic Preparation",
      description: "ISO-standard kitchen practices and quality assurance"
    },
    {
      icon: Clock,
      title: "On-Time, Every Time",
      description: "12 years with zero missed deliveries - we value your trust"
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing",
      description: "No hidden charges - clear menu-wise price lists provided upfront"
    },
    {
      icon: Users,
      title: "Professional Serving Staff",
      description: "Uniformed, trained servers available for all occasions"
    },
    {
      icon: MapPin,
      title: "Pan-Tamil Nadu Reach",
      description: "From Coimbatore to Ooty, Pollachi to Palakkad"
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Why Choose SS Catering & Events
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Your trusted partner for authentic South Indian Brahmin catering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="p-6 bg-white rounded-lg border border-gold/10 hover:border-gold/50 transition-colors">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-gold" size={24} />
                </div>
                <h3 className="text-lg font-playfair font-bold text-maroon mb-2">
                  {reason.title}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
