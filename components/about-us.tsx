"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, Utensils, FileText } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Fresh, High-Quality Ingredients",
      description:
        "We source only the freshest ingredients to ensure exceptional taste and quality in every dish we serve.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Hygienic & Affordable Catering",
      description:
        "Our kitchen maintains the highest standards of hygiene while offering competitive pricing for all budgets.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "On-Time Delivery",
      description: "We understand the importance of timing in events and guarantee punctual service every time.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Customized Menu Options",
      description:
        "Tailor your menu to suit your preferences and dietary requirements with our flexible catering options.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Why Choose Us?
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
            At SS Catering and Events, we pride ourselves on delivering exceptional culinary experiences that leave a
            lasting impression on your guests.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2011.18.23_2ebab9ed.jpg-1wPjxviWe0OCLKOZrcS0pfsxyPckoL.jpeg"
              alt="SS Catering Service Staff"
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience the Difference</h3>
            <p className="text-gray-600 mb-6">
              With years of experience in the catering industry, we understand what makes an event special. Our team of
              skilled chefs and service staff work tirelessly to ensure your event is memorable for all the right
              reasons.
            </p>
            <p className="text-gray-600">
              From intimate gatherings to grand celebrations, we bring the same level of dedication and attention to
              detail to every event we cater. Our commitment to quality, taste, and presentation sets us apart from the
              rest.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

