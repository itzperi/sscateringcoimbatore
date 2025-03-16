"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const sliderRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Gokul R",
      role: "Wedding Client",
      content:
        "The food was absolutely delicious, beautifully presented, and catered perfectly to our guests' dietary preferences. Each dish was thoughtfully prepared and bursting with flavor, showcasing their dedication to using fresh, high-quality ingredients.",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nbVFIkAUi0iSbctUqQsNFEIrheHHn7.png",
    },
    {
      id: 2,
      name: "Sahithya S",
      role: "Corporate Event",
      content:
        "The menu items were outstanding with great taste, presentation and aroma. Appearance of buffet set up was same as promised. Staff were neatly dressed, hygiene maintained well, polite, prompt services with pleasant smile.",
      rating: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nbVFIkAUi0iSbctUqQsNFEIrheHHn7.png",
    },
    {
      id: 3,
      name: "Sanjay SANJAY",
      role: "Family Function",
      content:
        "The catering service was excellent, with delicious food, timely delivery, and professional staff. The presentation was impressive, and the dishes were fresh and well-prepared. Overall, a great experience that added value to the event. Would highly recommend!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nbVFIkAUi0iSbctUqQsNFEIrheHHn7.png",
    },
  ]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || !isInView) return

    let scrollAmount = 0
    const slideWidth = slider.querySelector("div").offsetWidth + 16 // width + gap
    const maxScroll = slider.scrollWidth - slider.clientWidth

    const scroll = () => {
      scrollAmount += 1
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0
      }
      if (slider) {
        slider.scrollLeft = scrollAmount
      }
    }

    let interval = setInterval(scroll, 30)

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(interval))
    slider.addEventListener("mouseleave", () => {
      clearInterval(interval)
      interval = setInterval(scroll, 30)
    })

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Customer Testimonials
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
            Don't just take our word for it. Here's what our clients have to say about our catering services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide snap-x"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col snap-start"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.content}"</p>
                <div className="mt-auto flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full">
            <span className="text-primary font-bold mr-2">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-gray-600 text-sm">(189 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

