'use client'

import VideoHero from '@/components/VideoHero'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Blog posts data (first 3 most recent)
const recentBlogPosts = [
  {
    id: '7',
    title: 'Setting Yourself Up For Success in 2026',
    excerpt: 'A realistic guide for creators who are building empires and occasionally forgetting where they put their phone. Not the glossy, "wake up at 4 a.m. for cold plunges" kind. The real kind. Learn how to define success like an actual human being, build systems that make your future self want to hug you, and create goals that include your wellbeing. Because success is not about grind culture and superhuman discipline—it\'s about calm, grounded progress.',
    date: 'January 1, 2026',
    category: 'Strategy',
    slug: 'setting-yourself-up-for-success-2026',
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
    id: '1',
    title: 'Creator Burnout',
    excerpt: 'An honest, warm conversation about the mental health side of being an adult creator. Because it\'s not just you. This job is a lot. From emotional whiplash and burnout that doesn\'t always look like exhaustion, to parasocial relationships and isolation even when you have fans, we explore how to take care of your mental health with intention, not perfection.',
    date: 'November 15, 2025',
    category: 'Wellness',
    slug: 'mental-health-adult-creator-industry',
  },
]

// Lazy load BrandRotator - load after hero videos
const BrandRotator = dynamic(() => import('@/components/BrandRotator'), {
  loading: () => null,
  ssr: false,
})

export default function Home() {
  const stats = [
    { number: '94%', label: 'CLIENT RETENTION RATE' },
    { number: '2.3M+', label: 'FANS MANAGED ACROSS ACCOUNTS' },
    { number: '7+ YEARS', label: 'COMBINED INDUSTRY EXPERIENCE' },
    { number: '100%', label: 'COMPLIANCE RATE' },
    { number: '99.9%', label: 'SYSTEM UPTIME & RELIABILITY' },
    { number: '4.9/5', label: 'Client Rating' },
  ]

  const [currentStatIndex, setCurrentStatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length)
    }, 3500) // Change stat every 3.5 seconds (slow and deliberate)

    return () => clearInterval(interval)
  }, [stats.length])

  // Get the 3 stats to display at once (with wrapping)
  const getDisplayStats = () => {
    return [
      stats[currentStatIndex],
      stats[(currentStatIndex + 1) % stats.length],
      stats[(currentStatIndex + 2) % stats.length],
    ]
  }

  return (
    <div>
      <VideoHero />
      
      {/* Pink bar separator under hero */}
      <div className="h-0.5 bg-accent-pink w-full" />
      
      {/* Brand Rotator - lazy loaded after hero videos */}
      <div className="bg-transparent">
        <BrandRotator />
      </div>
      
      {/* Why Choose Section - lazy loaded */}
      <section id="why-choose" className="why-choose">
        <div className="why-inner">
          {/* Left model image */}
          <div className="why-side why-side-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ marginLeft: 0 }}
            >
              <Image
                src="/photos/alexiahomepage.png"
                alt="Creator"
                width={798}
                height={1197}
                className="why-model"
                loading="lazy"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Center cards */}
          <div className="why-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="why-title">Why Choose Onyxspire</h2>
              <p className="why-subtext">
                We elevate creators to unprecedented heights through strategic management and unparalleled support.
              </p>
            </motion.div>

            <div className="why-cards">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0 }}
                className="why-card"
              >
                <h3>Elite Management</h3>
                <h4>24/7 Dedicated Support</h4>
                <p>
                  Dedicated account managers and round-the-clock support ensure your business runs seamlessly.
                </p>
                <ul>
                  <li>Messaging &amp; fan engagement</li>
                  <li>DM sales strategy</li>
                  <li>Retention optimization</li>
                  <li>Scheduling &amp; content planning</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="why-card"
              >
                <h3>Exponential Growth</h3>
                <h4>Strategic Marketing Excellence</h4>
                <p>
                  Bespoke marketing strategies that convert and scale your audience effectively.
                </p>
                <ul>
                  <li>Paid &amp; organic funnel systems</li>
                  <li>Brand identity development</li>
                  <li>Automation workflows</li>
                  <li>Conversion tracking &amp; analytics</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="why-card"
              >
                <h3>Strategic Planning</h3>
                <h4>Data-Driven Success</h4>
                <p>
                  Data-driven insights and personalized content calendars for consistent growth.
                </p>
                <ul>
                  <li>Monthly revenue forecasting</li>
                  <li>Pricing optimization</li>
                  <li>Performance analysis</li>
                  <li>Long-term brand positioning</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right phone image */}
          <div className="why-side why-side-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/photos/iphone.png"
                alt="OnlyFans earnings"
                width={599}
                height={1197}
                className="why-phone"
                loading="lazy"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pink Stats Bar - cross-fade animation with 3 stats */}
      <section className="stats-bar">
        <div className="overflow-hidden relative w-full bg-transparent">
          <div className="flex items-center justify-center h-14 md:h-16 bg-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1] // Smooth easing
                }}
                className="flex items-center gap-10 md:gap-14"
              >
                {getDisplayStats().map((stat, index) => (
                  <motion.div
                    key={`${currentStatIndex}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1.2,
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="flex flex-col items-center justify-center px-8 md:px-12"
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-transparent scroll-mt-20 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-pink/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-bold text-black-espresso mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 3.75rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Our Services
            </h2>
            <p className="text-black-espresso/70 max-w-2xl mx-auto font-sans" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
              Comprehensive solutions designed to elevate your creative business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Management Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="group relative bg-white p-10 rounded-[24px] border-2 border-accent-pink/35 shadow-xl hover:shadow-2xl hover:border-accent-pink/60 transition-all duration-500 hover:-translate-y-2"
              style={{ 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 50px rgba(255, 20, 147, 0.4), 0 0 80px rgba(255, 20, 147, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl -z-10 group-hover:bg-accent-pink/10 transition-all duration-500" />
              <div className="relative">
                <h3 className="font-bold text-accent-pink mb-3 text-center" style={{ fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.875rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                  Management
                </h3>
                <h4 className="font-sans text-accent-pink uppercase mb-8 tracking-widest text-center font-semibold" style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.125rem, 0.75rem)' }}>
                  24/7 Dedicated Support
                </h4>
                <ul className="text-left space-y-2 font-sans text-black-espresso/80 text-sm" style={{ lineHeight: '1.3' }}>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Dedicated Management Team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>24/7 Personalized Client Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Comprehensive Content Scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Strategic Upsell Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Structured PPV Pricing Model</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Customized Payout Structures</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Growth Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative bg-white p-10 rounded-[24px] border-2 border-accent-pink/35 shadow-xl hover:shadow-2xl hover:border-accent-pink/60 transition-all duration-500 hover:-translate-y-2"
              style={{ 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 50px rgba(255, 20, 147, 0.4), 0 0 80px rgba(255, 20, 147, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl -z-10 group-hover:bg-accent-pink/10 transition-all duration-500" />
              <div className="relative">
                <h3 className="font-bold text-accent-pink mb-3 text-center" style={{ fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.875rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                  Growth
                </h3>
                <h4 className="font-sans text-accent-pink uppercase mb-8 tracking-widest text-center font-semibold" style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.125rem, 0.75rem)' }}>
                  Strategic Marketing Excellence
                </h4>
                <ul className="text-left space-y-2 font-sans text-black-espresso/80 text-sm" style={{ lineHeight: '1.3' }}>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Niche Identification & Targeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Multi-Platform Marketing Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Custom Marketing Funnels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Influencer Collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Targeted Advertising Campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Social Media Management</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Planning Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-10 rounded-[24px] border-2 border-accent-pink/35 shadow-xl hover:shadow-2xl hover:border-accent-pink/60 transition-all duration-500 hover:-translate-y-2"
              style={{ 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 50px rgba(255, 20, 147, 0.4), 0 0 80px rgba(255, 20, 147, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.2)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-3xl -z-10 group-hover:bg-accent-pink/10 transition-all duration-500" />
              <div className="relative">
                <h3 className="font-bold text-accent-pink mb-3 text-center" style={{ fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.875rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                  Planning
                </h3>
                <h4 className="font-sans text-accent-pink uppercase mb-8 tracking-widest text-center font-semibold" style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.125rem, 0.75rem)' }}>
                  Data-Driven Success
                </h4>
                <ul className="text-left space-y-2 font-sans text-black-espresso/80 text-sm" style={{ lineHeight: '1.3' }}>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Candid Content Reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Frequent Performance Reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Strategic Goal Setting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Regular Planning Sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Trend Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-pink mr-3 text-lg leading-none">→</span>
                    <span>Personalized Content Calendars</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black-espresso mb-4" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Our Creators
            </h2>
            <p className="text-black-espresso/70 max-w-2xl mx-auto font-sans" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
              Meet the elite creators achieving unprecedented success with Onyxspire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alexia',
                username: 'alexiabrea',
                image: '/photos/alexia.png',
              },
              {
                name: 'Sartia',
                username: 'sartia',
                image: '/photos/sarita.png',
              },
              {
                name: 'Maggie',
                username: 'maggie',
                image: '/photos/maggie.png',
              },
            ].map((creator, index) => (
              <motion.a
                key={creator.name}
                href={`/${creator.username}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative bg-white rounded-[24px] border-2 border-accent-pink/35 shadow-xl hover:shadow-2xl hover:border-accent-pink/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer block"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.15), 0 0 60px rgba(255, 20, 147, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 20, 147, 0.3), 0 0 80px rgba(255, 20, 147, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 30px rgba(255, 20, 147, 0.15), 0 0 60px rgba(255, 20, 147, 0.1)'
                }}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'top' }}
                    unoptimized
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                      {creator.name}
                    </h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black-espresso mb-6" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Ready to Elevate Your Success?
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8">
              Join the elite creators who trust Onyxspire to manage their business and maximize their potential.
            </p>
            <a
              href="/application"
              className="inline-block bg-accent-pink text-white px-10 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow relative"
              style={{ zIndex: 10000, fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Start Your Application
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Section - Newspaper Style */}
      <section className="py-16 bg-white/95 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Newspaper Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 pb-4 border-b-4 border-black-espresso"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black-espresso mb-2" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif", letterSpacing: '0.05em' }}>
              ONYX INK
            </h2>
            <p className="text-sm text-black-espresso/70 font-serif italic" style={{ letterSpacing: '0.1em' }}>
              Latest Insights & Strategies
            </p>
          </motion.div>

          {/* Newspaper Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {recentBlogPosts.map((post, index) => (
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

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 pt-6 border-t-2 border-black-espresso/20"
          >
            <Link
              href="/blog"
              className="inline-block text-black-espresso font-bold uppercase tracking-widest hover:text-accent-pink transition-colors font-serif text-sm"
              style={{ letterSpacing: '0.15em' }}
            >
              View All Articles →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Us Today Diagonal Banner */}
      <div className="relative overflow-visible bg-transparent" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', zIndex: 1000, paddingTop: '30px', paddingBottom: '30px', marginBottom: '0' }}>
        <div 
          className="bg-accent-pink relative"
          style={{ 
            transform: 'skewY(-7deg)', 
            marginTop: '0', 
            marginBottom: '0',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            zIndex: 1000,
            overflow: 'visible',
            minHeight: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(255, 20, 147, 0.5), 0 0 40px rgba(255, 20, 147, 0.3), 0 0 60px rgba(255, 20, 147, 0.2)'
          }}
        >
          <div className="overflow-visible w-full" style={{ overflow: 'visible' }}>
            <div 
              className="flex items-center gap-6 whitespace-nowrap"
              style={{
                animation: 'scrollDiagonal 25s linear infinite',
                transform: 'skewY(7deg) translateZ(0)',
                willChange: 'transform',
              }}
            >
              {[...Array(20), ...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center gap-6 flex-shrink-0">
                  <span className="text-black-espresso text-xl md:text-2xl font-bold uppercase tracking-wider inline-block">
                    JOIN US TODAY
                  </span>
                  <span className="text-black-espresso text-xl md:text-2xl inline-block">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

