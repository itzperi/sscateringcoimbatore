import { Clock, Users, Star, Leaf, MapPin } from 'lucide-react'

export function TrustBar() {
  const trustItems = [
    { icon: Clock, label: '12+ Years', text: 'Serving Coimbatore' },
    { icon: Users, label: '10,000+', text: 'Events Catered' },
    { icon: Star, label: '4.9★', text: 'Google Rating' },
    { icon: Leaf, label: '100%', text: 'Pure Vegetarian' },
    { icon: MapPin, label: 'Pan-Tamil Nadu', text: 'Service Area' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 px-4 bg-cream border-y border-gold/20">
      {trustItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="flex flex-col items-center justify-center gap-2">
            <Icon className="text-gold" size={32} />
            <p className="font-playfair font-bold text-charcoal text-center text-sm md:text-base">
              {item.label}
            </p>
            <p className="text-xs md:text-sm text-charcoal/70 text-center">
              {item.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
