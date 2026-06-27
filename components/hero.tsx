"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)

    // Handle video loading
    const video = videoRef.current
    if (video) {
      video.addEventListener("loadeddata", () => {
        setVideoLoaded(true)
      })

      // Fallback if video doesn't load within 3 seconds
      const timeout = setTimeout(() => {
        if (!videoLoaded) setVideoLoaded(true)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [videoLoaded])

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-black/50 z-10" />
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-900 z-5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_13cf2d26.jpg-cFWzOtTS9fEZ67uaoaYfXc0Xt3JK1S.jpeg"
              alt="Traditional South Indian Catering"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_13cf2d26.jpg-cFWzOtTS9fEZ67uaoaYfXc0Xt3JK1S.jpeg"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-03-16%20at%2011.11.42_9d78534d-jju6eKGUtFBkcJu2zrFA60eITjBtEl.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ekk2WzMlyeQZ2lUkIIYmUeeeBgFU9i.png"
              alt="SS Catering and Events Logo"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <h1 className="sr-only">SS Catering and Events - Best Catering Service in Coimbatore</h1>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 text-balance">
            Coimbatore&apos;s Most Trusted Brahmin Caterers Since 2012
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8">
            Pure Vegetarian · Onion &amp; Garlic Free · Authentic Tamil Nadu Flavors
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            From intimate family poojas to grand wedding feasts, SS Catering &amp; Events brings the sacred taste of Brahmin cooking to your most important moments. Serving Coimbatore, Tirupur, Pollachi &amp; all of Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-charcoal flex items-center gap-2 font-semibold"
              onClick={() => window.open("tel:+918667566318")}
            >
              <Phone size={20} />
              Call Now: 086675 66318
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 flex items-center gap-2 font-semibold"
              onClick={() => window.open("https://wa.me/918667566318", "_blank")}
            >
              <MessageSquare size={20} />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Food Images Grid */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative h-24 rounded-lg overflow-hidden"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.50_4a725730.jpg-HvvWmVaaSBTBAzhS1DRvhdr7dVfhro.jpeg"
            alt="Traditional South Indian Meal"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative h-24 rounded-lg overflow-hidden"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.33_c25568eb.jpg-W6vMYSkCGXhINaNdEdPwnzHeM8RW3v.jpeg"
            alt="South Indian Thali"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative h-24 rounded-lg overflow-hidden hidden md:block"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_f533a1d7.jpg-bKjz2R1PTvZ3Y8TPFVl7XgIzY4CpXx.jpeg"
            alt="Special Snacks"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="relative h-24 rounded-lg overflow-hidden hidden md:block"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XyumOObYMEOoKILbB4UiDH4sWy8a4K.png"
            alt="Traditional Paan"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

