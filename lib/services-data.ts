export interface Service {
  id: string
  name: string
  tamil: string
  slug: string
  description: string
  shortDescription: string
  category: string
  icon: string
  image: string
  longDescription: string[]
  whyChoose: string[]
  sampleMenuItems: {
    breakfast?: string[]
    lunch?: string[]
    dinner?: string[]
  }
  pricing: {
    tier: string
    perPlate: string
    includes: string[]
  }[]
  serviceAreas: string[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
}

export const servicesData: Record<string, Service> = {
  'wedding-catering-coimbatore': {
    id: 'wedding-catering',
    name: 'Wedding Catering',
    tamil: 'திருமண சமையல்',
    slug: 'wedding-catering-coimbatore',
    description: 'Grand wedding feasts with authentic Brahmin recipes and professional serving staff',
    shortDescription: 'Wedding Catering in Coimbatore',
    category: 'Wedding Events',
    icon: '💒',
    image: '/images/wedding-catering.jpg',
    longDescription: [
      'Our wedding catering service brings together traditions and modern culinary excellence. With 12+ years of experience, we have catered to hundreds of weddings across Coimbatore and Tamil Nadu.',
      'From mehendi functions to reception dinners, we offer complete catering solutions with professional staff, hygienic preparation, and authentic Brahmin recipes that honor your family traditions.',
      'We understand that a wedding is not just a meal, but a cherished memory. Our team ensures every detail is perfect, from menu selection to serving, making your celebration seamless and delicious.'
    ],
    whyChoose: [
      'Authentic Brahmin recipes passed down through generations',
      'Professional uniformed serving staff for all functions',
      'Pure vegetarian, onion & garlic-free options',
      'Customizable menus for each ceremony (Mehendi, Sangeet, Reception)',
      'Transparent pricing with no hidden charges',
      ' 12 years of wedding catering experience',
      'Available for 50 to 5000+ guests'
    ],
    sampleMenuItems: {
      breakfast: ['Dosa', 'Idli with Sambar', 'Upma', 'Pongal'],
      lunch: ['Sambar', 'Rasam', 'Kootu', 'Poriyal', 'Rice', 'Papad'],
      dinner: ['Biriyani', 'Pulao', 'Curries', 'Rotis', 'Sweets', 'Payasam']
    },
    pricing: [
      {
        tier: 'Budget Package',
        perPlate: '₹150-250',
        includes: ['Veg menu', 'Sambar, Rasam, Curries', 'Rice, Rotis', 'Desserts']
      },
      {
        tier: 'Standard Package',
        perPlate: '₹250-400',
        includes: ['Multiple curries', 'Biriyani options', 'Special desserts', 'Serving staff']
      },
      {
        tier: 'Premium Package',
        perPlate: '₹400-600',
        includes: ['Chef-selected menu', 'Multiple main courses', 'Specialty items', 'Professional setup']
      }
    ],
    serviceAreas: ['Coimbatore', 'Tirupur', 'Pollachi', 'Erode', 'Ooty'],
    faqs: [
      {
        question: 'Do you provide onion and garlic-free catering for weddings?',
        answer: 'Yes! We specialize in pure vegetarian, onion and garlic-free Brahmin catering suitable for all Hindu rituals and ceremonies.'
      },
      {
        question: 'What is your serving staff arrangement?',
        answer: 'We provide uniformed, trained serving staff. The number depends on your guest count and requirements.'
      },
      {
        question: 'Can we customize the menu?',
        answer: 'Absolutely! We work with you to create menus that match your preferences and ceremony requirements.'
      }
    ],
    relatedServices: [
      'engagement-catering-coimbatore',
      'reception-dinner-catering',
      'brahmin-catering-coimbatore'
    ]
  },
  
  'brahmin-catering-coimbatore': {
    id: 'brahmin-catering',
    name: 'Brahmin Catering',
    tamil: 'பிராமண சமையல்',
    slug: 'brahmin-catering-coimbatore',
    description: 'Pure vegetarian sattvic food, onion & garlic-free for rituals and ceremonies',
    shortDescription: 'Brahmin Catering Services',
    category: 'Specialty',
    icon: '🙏',
    image: '/images/brahmin-catering.jpg',
    longDescription: [
      'Our Brahmin catering is rooted in traditional South Indian cooking methods and sacred culinary practices. We prepare food with utmost care, maintaining purity and spiritual significance.',
      'Every dish is prepared following traditional Brahmin recipes, using pure vegetarian ingredients without onion or garlic, making it suitable for pooja and ceremonial occasions.',
      'From traditional saapadu to banana leaf meals, we bring authenticity to your family events and religious celebrations.'
    ],
    whyChoose: [
      'Traditional Brahmin recipes from Iyer and Iyengar communities',
      'Pure sattvic food - no onion, garlic, or non-vegetarian items',
      'Prepared in our ISO-standard kitchen',
      'Suitable for all Hindu religious ceremonies',
      'Authentic banana leaf meal presentation',
      'Experienced in Iyer and Iyengar food traditions'
    ],
    sampleMenuItems: {
      lunch: ['Sambar', 'Rasam', 'Avial', 'Olan', 'Parippu Curry', 'Papad', 'Pickle', 'Rice']
    },
    pricing: [
      {
        tier: 'Standard Brahmin Menu',
        perPlate: '₹180-280',
        includes: ['Sambar', 'Rasam', 'Curries', 'Rice', 'Desserts']
      },
      {
        tier: 'Premium Brahmin Menu',
        perPlate: '₹280-400',
        includes: ['Multiple curries', 'Special preparations', 'Sweets', 'Professional setup']
      }
    ],
    serviceAreas: ['Coimbatore', 'Tirupur', 'Pollachi', 'Erode'],
    faqs: [
      {
        question: 'What is the difference between Iyer and Iyengar catering?',
        answer: 'Both follow Brahmin vegetarian traditions but have slight differences in preparation styles and recipes. We cater to both traditions.'
      },
      {
        question: 'Is your food suitable for pooja ceremonies?',
        answer: 'Yes, our food is purely vegetarian and prepared with utmost care for religious ceremonies.'
      }
    ],
    relatedServices: [
      'wedding-catering-coimbatore',
      'puja-catering-coimbatore',
      'vegetarian-catering-coimbatore'
    ]
  },

  'corporate-catering-coimbatore': {
    id: 'corporate-catering',
    name: 'Corporate Events Catering',
    tamil: 'நிறுவன விழாவு சமையல்',
    slug: 'corporate-catering-coimbatore',
    description: 'Professional catering for conferences, office events, and business gatherings',
    shortDescription: 'Corporate Catering Services',
    category: 'Business Events',
    icon: '💼',
    image: '/images/corporate-catering.jpg',
    longDescription: [
      'Our corporate catering service is designed to enhance your business events with professional service and delicious food.',
      'We handle everything from conference lunches to team celebrations, ensuring minimal disruption and maximum satisfaction.',
      'With flexible options and customizable menus, we cater to diverse dietary preferences of your corporate teams.'
    ],
    whyChoose: [
      'Professional service and on-time delivery',
      'Customizable menus for corporate events',
      'Flexible portion sizes',
      'Hygienic food preparation',
      'Experienced in handling large groups',
      'Transparent pricing'
    ],
    sampleMenuItems: {
      lunch: ['Multiple vegetarian curries', 'Biriyani', 'Rice', 'Breads', 'Salads', 'Desserts']
    },
    pricing: [
      {
        tier: 'Basic',
        perPlate: '₹120-180',
        includes: ['Curry', 'Rice', 'Bread', 'Dessert']
      },
      {
        tier: 'Standard',
        perPlate: '₹180-280',
        includes: ['Multiple curries', 'Rice', 'Breads', 'Desserts', 'Drinks']
      },
      {
        tier: 'Premium',
        perPlate: '₹280-400',
        includes: ['Chef-curated menu', 'Multiple mains', 'Special items', 'Service staff']
      }
    ],
    serviceAreas: ['Coimbatore', 'Surrounding areas'],
    faqs: [
      {
        question: 'Can you accommodate dietary preferences?',
        answer: 'Yes, we can accommodate various dietary preferences and restrictions.'
      },
      {
        question: 'What is your minimum order?',
        answer: 'Minimum order depends on the event. Please contact us for specific requirements.'
      }
    ],
    relatedServices: [
      'bulk-tiffin-delivery-coimbatore',
      'conference-catering',
      'office-lunch-catering'
    ]
  }
}

export function getServiceBySlug(slug: string): Service | null {
  return servicesData[slug] || null
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData)
}

export function getServicesByCategory(category: string): Service[] {
  return Object.values(servicesData).filter(s => s.category === category)
}
