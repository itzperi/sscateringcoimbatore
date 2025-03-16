"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export default function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const menuImages = [
    {
      id: 1,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20212922-S2sKhqTQ63b1LYDxqwiGmb3A22mhMO.png",
      alt: "Tiffin Items and Lunch Menu",
    },
    {
      id: 2,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20212950-f4yGOzSqer2zruf98xT9skVpv0oRCB.png",
      alt: "Dry & Fried Items and Main Course",
    },
    {
      id: 3,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20213057-ZBENUq5MfUZhP4pW9zUxB9fcQoPWk7.png",
      alt: "Milk, Lassi, and Sweets Menu",
    },
    {
      id: 4,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20213013-WHGRaB6QffEA1N9gWWxL0oEWpgI4vJ.png",
      alt: "Dinner Menu - Indian Breads and Gravies",
    },
    {
      id: 5,
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-15%20213040-ZJ0vyAibCbZHqBF9hxKFFIAJPrZnXs.png",
      alt: "Biryani Specialties and Beverages",
    },
  ]

  // SEO-friendly heading and description
  const sectionTitle = "Our Extensive Menu"
  const sectionDescription =
    "Explore our diverse menu offerings featuring authentic South Indian cuisine, traditional meals served on banana leaves, and a variety of specialties for all occasions."

  return (
    <section id="menu" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            {sectionTitle}
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
            {sectionDescription}
          </motion.p>
        </div>

        {/* Featured Food Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.50_4a725730.jpg-HvvWmVaaSBTBAzhS1DRvhdr7dVfhro.jpeg"
              alt="Traditional South Indian Thali"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Traditional South Indian Thali</h3>
              <p className="text-gray-600">Complete meal with rice, curries, and traditional sides</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.11.39_13cf2d26.jpg-cFWzOtTS9fEZ67uaoaYfXc0Xt3JK1S.jpeg"
              alt="Authentic Banana Leaf Meal"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold">Authentic Banana Leaf Meal</h3>
              <p className="text-gray-600">Traditional serving style with variety of dishes</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              className="relative aspect-[3/4] cursor-pointer hover:shadow-xl transition-shadow rounded-lg overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <div className="relative w-full h-auto">
              <Image
                src={menuImages[selectedImage].url || "/placeholder.svg"}
                alt={menuImages[selectedImage].alt}
                width={800}
                height={1067}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

