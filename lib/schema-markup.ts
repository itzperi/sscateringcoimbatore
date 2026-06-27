export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CateringBusiness',
    'name': 'SS Catering & Events',
    'alternateName': 'Best Caterers in Coimbatore for Weddings & Corporate Events',
    'url': 'https://www.sscateringcoimbatore.com/',
    'logo': 'https://www.sscateringcoimbatore.com/assets/logo.png',
    'image': ['https://www.sscateringcoimbatore.com/assets/og-image.jpg'],
    'description': "Coimbatore's top-rated Brahmin catering service offering pure vegetarian catering for weddings, corporate events, birthdays, and housewarming functions since 2012.",
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '7, Selvanayaki Garden, Siruvani Main Road',
      'addressLocality': 'Coimbatore',
      'addressRegion': 'Tamil Nadu',
      'postalCode': '641101',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '11.0168',
      'longitude': '76.9558'
    },
    'telephone': '+918667566318',
    'email': 'info@sscateringcoimbatore.com',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    ],
    'servesCuisine': ['South Indian', 'Tamil Brahmin', 'Vegetarian'],
    'priceRange': '₹₹',
    'areaServed': ['Coimbatore', 'Tamil Nadu', 'Tirupur', 'Erode', 'Pollachi'],
    'foundingDate': '2012-02',
    'sameAs': [
      'https://wa.me/918667566318',
      'https://www.google.com/maps/place/SS+Catering+%26+Events'
    ]
  }
}

export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': serviceName,
    'provider': {
      '@type': 'CateringBusiness',
      'name': 'SS Catering & Events',
      'telephone': '+918667566318',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7, Selvanayaki Garden, Siruvani Main Road',
        'addressLocality': 'Coimbatore',
        'addressRegion': 'Tamil Nadu',
        'postalCode': '641101'
      }
    },
    'areaServed': 'Coimbatore, Tamil Nadu',
    'description': serviceDescription
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  }
}

export function generateReviewSchema(reviewer: string, rating: number, reviewText: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': reviewer
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': rating,
      'bestRating': '5',
      'worstRating': '1'
    },
    'reviewBody': reviewText
  }
}

export function generateAggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'ratingCount': '200',
    'bestRating': '5',
    'worstRating': '1'
  }
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'SS Catering & Events',
    'image': 'https://www.sscateringcoimbatore.com/assets/logo.png',
    '@id': 'https://www.sscateringcoimbatore.com',
    'url': 'https://www.sscateringcoimbatore.com',
    'telephone': '+918667566318',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '7, Selvanayaki Garden, Siruvani Main Road',
      'addressLocality': 'Coimbatore',
      'addressRegion': 'TN',
      'postalCode': '641101',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 11.0168,
      'longitude': 76.9558
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://wa.me/918667566318',
      'https://www.google.com/maps/place/SS+Catering+%26+Events'
    ]
  }
}
