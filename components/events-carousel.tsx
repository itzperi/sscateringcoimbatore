"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function EventsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const events = [
    {
      id: 1,
      title: "Corporate Events",
      description: "Professional catering solutions for meetings, conferences, and corporate gatherings.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LtDnMlHQG17z3jx0XrkIsNEMWE7HNU.png",
    },
    {
      id: 2,
      title: "Traditional South Indian",
      description: "Authentic South Indian cuisine served on traditional banana leaves.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_13cf2d26.jpg-cFWzOtTS9fEZ67uaoaYfXc0Xt3JK1S.jpeg",
    },
    {
      id: 3,
      title: "Special Occasions",
      description: "Beautifully arranged appetizers and snacks for your special events.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.33_c25568eb.jpg-W6vMYSkCGXhINaNdEdPwnzHeM8RW3v.jpeg",
    },
    {
      id: 4,
      title: "Sweet Delicacies",
      description: "Wide variety of traditional Indian sweets and desserts.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_f533a1d7.jpg-bKjz2R1PTvZ3Y8TPFVl7XgIzY4CpXx.jpeg",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1))
  }

  return (
    <section id="events" className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Events We Cater
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            From intimate gatherings to grand celebrations, we cater to all types of events with the same dedication to
            quality and service.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {events.map((event) => (
                <div key={event.id} className="min-w-full relative h-[400px] md:h-[500px]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/90 max-w-lg">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

