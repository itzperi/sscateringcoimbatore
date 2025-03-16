import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import MenuSection from "@/components/menu-section"
import EventsCarousel from "@/components/events-carousel"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <MenuSection />
      <EventsCarousel />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

