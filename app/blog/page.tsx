import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BananaLeafDivider } from "@/components/banana-leaf-divider"
import { NAPBlock } from "@/components/nap-block"
import { Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | SS Catering & Events | Wedding & Catering Tips | Coimbatore",
  description: "Read our blog for tips on wedding catering, brahmin cuisine, and event planning in Coimbatore.",
  keywords: "catering blog, wedding tips, brahmin recipes, event planning"
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Brahmin Catering in Coimbatore",
      slug: "brahmin-catering-guide-coimbatore",
      excerpt: "Learn about authentic Brahmin catering traditions, what makes it special, and how to choose the right caterer for your event.",
      date: "March 2024",
      category: "Catering",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Wedding Catering Checklist: Everything You Need to Know",
      slug: "wedding-catering-checklist",
      excerpt: "A comprehensive checklist to help you plan your wedding catering perfectly. From menu selection to vendor coordination.",
      date: "March 2024",
      category: "Wedding Planning",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Best Vegetarian Caterers in Coimbatore for Your Special Event",
      slug: "best-vegetarian-caterers-coimbatore",
      excerpt: "Discover what makes a great vegetarian catering service and how to identify the best caterers for your needs.",
      date: "March 2024",
      category: "Catering Tips",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Health Benefits of Onion and Garlic-Free Food",
      slug: "onion-garlic-free-food-benefits",
      excerpt: "Explore the health benefits of sattvic food prepared without onion and garlic, perfect for religious ceremonies.",
      date: "March 2024",
      category: "Health",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "How to Choose the Right Caterer in Coimbatore",
      slug: "how-to-choose-caterer-coimbatore",
      excerpt: "Step-by-step guide to selecting the perfect catering service for your event based on your specific needs.",
      date: "March 2024",
      category: "Catering Tips",
      readTime: "6 min read"
    }
  ]

  return (
    <main className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-gold/5 py-4 border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gold/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Catering & Event Planning Blog
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto">
            Tips, guides, and insights for weddings, catering, and special events
          </p>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Blog Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="p-6 md:p-8 border-gold/20 hover:shadow-lg hover:border-gold/50 transition-all cursor-pointer group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-charcoal/70 text-sm">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-charcoal/70 text-sm">·</span>
                        <span className="text-charcoal/70 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-maroon mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-charcoal/80 text-base mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-gold font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Read Article
                        <ArrowRight size={18} />
                      </div>
                    </div>
                    <div className="md:w-32 h-32 bg-gradient-to-br from-gold/20 to-maroon/20 rounded-lg flex-shrink-0 hidden md:block" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BananaLeafDivider />

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16 bg-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Get tips and updates about catering and event planning delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gold/30 rounded-lg"
            />
            <button className="px-8 py-3 bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* NAP Block */}
      <div className="py-12 md:py-16 bg-white border-t border-gold/20">
        <div className="container mx-auto px-4">
          <NAPBlock />
        </div>
      </div>
    </main>
  )
}
