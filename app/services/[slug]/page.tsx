import { ServicePageTemplate } from "@/components/service-page-template"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: "Service Not Found"
    }
  }

  return {
    title: `${service.name} in Coimbatore | SS Catering & Events | Call 086675 66318`,
    description: `SS Catering & Events offers the best ${service.name} in Coimbatore. Pure vegetarian, onion/garlic-free, authentic Brahmin recipes. Serving Coimbatore. Call 086675 66318.`,
    keywords: `${service.name} coimbatore, ${service.name.toLowerCase()}, ${service.category.toLowerCase()}, catering coimbatore`,
    openGraph: {
      title: `${service.name} in Coimbatore | SS Catering & Events`,
      description: service.description,
      images: [
        {
          url: service.image || "https://www.sscateringcoimbatore.com/assets/og-image.jpg",
          width: 1200,
          height: 630,
          alt: service.name
        }
      ]
    }
  }
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug
  }))
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  return <ServicePageTemplate service={service} />
}
