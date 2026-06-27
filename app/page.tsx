import Hero from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import AboutUs from "@/components/about-us"
import MenuSection from "@/components/menu-section"
import EventsCarousel from "@/components/events-carousel"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AreasServed } from "@/components/areas-served"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <BananaLeafDivider />
      <WhyChooseUs />
      <BananaLeafDivider />
      <AboutUs />
      <MenuSection />
      <BananaLeafDivider />
      <EventsCarousel />
      <AreasServed />
      <BananaLeafDivider />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

