"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: "Menus", href: "/menus/" },
    { name: "Gallery", href: "/gallery/" },
    { name: "About", href: "/about/" },
    { name: "Blog", href: "/blog/" },
    { name: "Contact", href: "/contact/" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-gold/20" : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="relative h-12 w-40 flex-shrink-0" aria-label="SS Catering and Events">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ekk2WzMlyeQZ2lUkIIYmUeeeBgFU9i.png"
              alt="SS Catering & Events Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 160px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-charcoal hover:text-gold font-medium transition-colors text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex gap-2 lg:gap-4">
            <Button
              size="sm"
              className="bg-gold hover:bg-gold/90 text-charcoal flex items-center gap-2"
              onClick={() => window.open("tel:+918667566318")}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Call Now</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 flex items-center gap-2"
              onClick={() => window.open("https://wa.me/918667566318", "_blank")}
            >
              <MessageSquare size={16} />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-cream z-40 flex flex-col pt-24 px-8 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-3 text-lg text-charcoal hover:text-gold border-b border-gold/10 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-charcoal w-full flex items-center gap-2 justify-center"
            onClick={() => {
              window.open("tel:+918667566318")
              setIsOpen(false)
            }}
          >
            <Phone size={18} />
            Call Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10 w-full flex items-center gap-2 justify-center"
            onClick={() => {
              window.open("https://wa.me/918667566318", "_blank")
              setIsOpen(false)
            }}
          >
            <MessageSquare size={18} />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </>
  )
}

