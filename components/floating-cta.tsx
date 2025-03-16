"use client"

import { useState, useEffect } from "react"
import { Phone, MessageSquare, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 mb-2 w-48"
              >
                <div className="space-y-3">
                  <a
                    href="tel:+918667566318"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/918667566318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <MessageSquare size={18} className="text-primary" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

