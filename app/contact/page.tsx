'use client'

import Link from "next/link"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    guests: '100-500',
    location: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const whatsappMessage = `Hello! I'm interested in catering for my ${formData.eventType} event.
Name: ${formData.name}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Number of Guests: ${formData.guests}
Location: ${formData.location}
Message: ${formData.message}`

    const encoded = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/918667566318?text=${encoded}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Contact SS Catering & Events
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80">
            Available 24×7 — We&apos;ll respond within 1 hour
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Contact Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-cream rounded-lg border border-gold/20 text-center">
              <MapPin className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair font-bold text-maroon mb-2">Address</h3>
              <p className="text-charcoal/80 text-sm">
                7, Selvanayaki Garden, Siruvani Main Road, Coimbatore, Tamil Nadu 641101
              </p>
            </div>
            <div className="p-6 bg-cream rounded-lg border border-gold/20 text-center">
              <Phone className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair font-bold text-maroon mb-2">Phone</h3>
              <a href="tel:+918667566318" className="text-gold hover:text-maroon font-semibold">
                086675 66318
              </a>
            </div>
            <div className="p-6 bg-cream rounded-lg border border-gold/20 text-center">
              <Mail className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair font-bold text-maroon mb-2">Email</h3>
              <a href="mailto:info@sscateringcoimbatore.com" className="text-gold hover:text-maroon font-semibold text-sm break-words">
                info@sscateringcoimbatore.com
              </a>
            </div>
            <div className="p-6 bg-cream rounded-lg border border-gold/20 text-center">
              <Clock className="w-10 h-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair font-bold text-maroon mb-2">Hours</h3>
              <p className="text-charcoal/80 text-sm">
                Open 24 Hours<br/>7 Days a Week
              </p>
            </div>
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Contact Form and Map */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-maroon mb-6">
                Send us Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gold/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-gold/30"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gold/30"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gold/30 rounded-lg"
                    >
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Corporate</option>
                      <option>Housewarming</option>
                      <option>Pooja</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="border-gold/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gold/30 rounded-lg"
                    >
                      <option>50-100</option>
                      <option>100-500</option>
                      <option>500-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Location in Coimbatore
                  </label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="border-gold/30"
                    placeholder="Event location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gold/30 min-h-24"
                    placeholder="Additional details or preferences"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold"
                >
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.5976687266627!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4f5d9d9d9d9d9%3A0x1234567890abcdef!2sSS%20Catering%20%26%20Events!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* NAP Block */}
      <div className="py-12 md:py-16 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4">
          <NAPBlock />
        </div>
      </div>
    </main>
  )
}
