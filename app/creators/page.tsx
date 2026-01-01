'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { number: '94%', label: 'CLIENT RETENTION RATE' },
  { number: '2.3M+', label: 'FANS MANAGED ACROSS ACCOUNTS' },
  { number: '100%', label: 'COMPLIANCE RATE' },
  { number: '99.9%', label: 'SYSTEM UPTIME & RELIABILITY' },
  { number: '4.9/5', label: 'Client Rating' },
]

const topCreators = [
  {
    name: 'Alexia',
    username: 'alexiabrea',
    image: '/photos/alexia.png',
  },
  {
    name: 'Sarita',
    username: 'sarita',
    image: '/photos/sarita.png',
  },
  {
    name: 'Maggie',
    username: 'maggie',
    image: '/photos/maggie.png',
  },
]

export default function Creators() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/photos/the creators.png"
              alt="The Creators"
              width={800}
              height={200}
              className="mx-auto h-auto w-full max-w-2xl"
              priority
              fetchPriority="high"
              unoptimized
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-black-espresso/70 max-w-3xl mx-auto font-sans"
          >
            Join an exclusive community of top-tier creators achieving unprecedented success
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-4xl md:text-5xl font-serif font-bold text-accent-pink mb-2"
                  style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-black-espresso/70 uppercase tracking-wider text-sm font-sans">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators Showcase */}
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCreators.map((creator, index) => (
              <Link key={creator.name} href={`/${creator.username}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group relative bg-white rounded-[24px] border-2 border-accent-pink/35 shadow-xl hover:shadow-2xl hover:border-accent-pink/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      style={creator.username === 'sarita' ? { objectPosition: 'center 25%' } : undefined}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-4xl font-bold text-white" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                        {creator.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-4">
              What Sets Our Creators Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Strategic Focus',
                description: 'Data-driven decisions that maximize revenue and growth',
              },
              {
                title: 'Professional Support',
                description: '24/7 dedicated account management and expert guidance',
              },
              {
                title: 'Content Excellence',
                description: 'Optimized content strategies that engage and convert',
              },
              {
                title: 'Business Growth',
                description: 'Comprehensive management that scales with success',
              },
            ].map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-[20px] border-2 border-accent-pink/35 shadow-lg"
              >
                <h3 className="text-xl font-serif font-semibold text-accent-pink mb-3">
                  {factor.title}
                </h3>
                <p className="text-black-espresso/70 text-sm leading-relaxed font-sans">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-6">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8 font-sans">
              Become part of an exclusive community of top-performing creators.
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
