'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const blogPosts = [
  {
    id: '7',
    title: 'Setting Yourself Up For Success in 2026',
    excerpt: 'A realistic guide for creators who are building empires… and occasionally forgetting where they put their phone.',
    date: 'January 1, 2026',
    category: 'Strategy',
    slug: 'setting-yourself-up-for-success-2026',
  },
  {
    id: '6',
    title: 'Staying Motivated When Sales Slow Down',
    excerpt: 'Every creator experiences slow seasons. Learn how to stay grounded, protect your mental health, and adjust your strategy when revenue dips. From releasing yourself from shame to separating your worth from your earnings, this guide helps you navigate those quiet weeks without spiraling or questioning all your life choices.',
    date: 'November 18, 2025',
    category: 'Wellness',
    slug: 'staying-motivated-when-sales-slow-down',
  },
  {
    id: '1',
    title: 'Creator Burnout',
    excerpt: 'An honest, warm conversation about the mental health side of being an adult creator. Because it\'s not just you. This job is a lot. From emotional whiplash and burnout that doesn\'t always look like exhaustion, to parasocial relationships and isolation even when you have fans, we explore how to take care of your mental health with intention, not perfection.',
    date: 'November 15, 2025',
    category: 'Wellness',
    slug: 'mental-health-adult-creator-industry',
  },
  {
    id: '2',
    title: 'We Asked 50 Creators What They Really Want From a Manager. Here\'s What They Said',
    excerpt: 'We spoke with 50 adult creators and asked what they really want from a manager. The responses were honest, vulnerable, and incredibly consistent.',
    date: 'November 10, 2025',
    category: 'Insights',
    slug: 'what-creators-want-from-managers',
  },
  {
    id: '3',
    title: 'Financial Planning for Creators',
    excerpt: 'A comprehensive guide to money management for adult creators, covering taxes, savings, and building financial stability for a sustainable career. Learn how to set aside taxes properly, build emergency funds, pay yourself like a CEO, and create systems that give you peace of mind instead of panic. No finance bro jargon, just real talk from someone who gets it.',
    date: 'November 5, 2025',
    category: 'Finance',
    slug: 'financial-planning-for-creators',
  },
  {
    id: '4',
    title: 'The Algorithm Myth: What Really Impacts Your OnlyFans Earnings',
    excerpt: 'Debunking the algorithm myth and uncovering what truly drives success on OnlyFans: strategy, consistency, and business fundamentals.',
    date: 'October 28, 2025',
    category: 'Strategy',
    slug: 'algorithm-myth-onlyfans-earnings',
  },
  {
    id: '5',
    title: 'Scaling Smart: When Is It Time To Hire a Manager?',
    excerpt: 'Recognizing when you\'re ready to move from solo creator to building a professional support team, and how to choose the right manager or agency partner.',
    date: 'October 20, 2025',
    category: 'Strategy',
    slug: 'scaling-smart-when-to-hire-manager',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20 relative" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      {/* Hero Section */}
      <section className="py-8 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/photos/onyx ink.png"
              alt="Onyx Ink Blog"
              width={600}
              height={150}
              className="mx-auto h-auto w-full max-w-2xl"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </section>

      {/* Bold Divider */}
      <div className="border-b-4 border-black-espresso max-w-7xl mx-auto px-6 lg:px-8 mb-8"></div>

      {/* Blog Posts - Newspaper Style */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Newspaper Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b-2 border-black-espresso/20 pb-6 hover:border-black-espresso/40 transition-colors flex flex-col h-full"
              >
                <Link href={`/blog/${post.slug}`} className="block group flex flex-col h-full">
                  {/* Article Header */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-black-espresso uppercase tracking-widest font-serif" style={{ letterSpacing: '0.15em' }}>
                        {post.category}
                      </span>
                      <span className="text-xs text-black-espresso/60 font-serif italic">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black-espresso leading-tight mb-3 group-hover:text-accent-pink transition-colors" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif", lineHeight: '1.2' }}>
                      {post.title}
                    </h3>
                  </div>
                  
                  {/* Article Excerpt */}
                  <p className="text-sm text-black-espresso/80 leading-relaxed font-serif mb-4 flex-grow" style={{ lineHeight: '1.7' }}>
                    {post.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <div className="text-xs font-bold text-black-espresso uppercase tracking-wider font-serif group-hover:text-accent-pink transition-colors mt-auto" style={{ letterSpacing: '0.1em' }}>
                    READ MORE →
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8 font-sans">
              Let Onyxspire help you achieve your goals with our comprehensive management services.
            </p>
            <Link
              href="/application"
              className="inline-block bg-accent-pink text-white px-10 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow"
              style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
