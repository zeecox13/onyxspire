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
    title: 'Financial Planning for Creators: Taxes, Savings and Stability',
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
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/photos/onyx ink.png"
              alt="Onyx Ink Blog"
              width={800}
              height={200}
              className="mx-auto h-auto w-full max-w-2xl"
              priority
              unoptimized
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-black-espresso/70 max-w-3xl mx-auto font-sans"
          >
            Insights, strategies, and tips for creators at the top of their game
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[20px] overflow-hidden border-2 border-accent-pink/35 shadow-lg hover:border-accent-pink/60 transition-all group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-8 h-full flex flex-col">
                    <div className="mb-4">
                      <span className="text-accent-pink text-sm font-semibold uppercase tracking-wider font-sans">
                        {post.category}
                      </span>
                      <span className="text-black-espresso/50 text-sm ml-4 font-sans">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-black-espresso mb-4 group-hover:text-accent-pink transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-black-espresso/70 leading-relaxed mb-6 flex-grow font-sans">
                      {post.excerpt}
                    </p>
                    <div className="text-accent-pink font-semibold text-sm uppercase tracking-wider group-hover:underline font-sans">
                      Read More →
                    </div>
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
