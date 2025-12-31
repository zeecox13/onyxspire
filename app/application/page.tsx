'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Application() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentEarnings: '',
    platform: '',
    experience: '',
    goals: '',
    timeline: '',
    additionalInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-6 lg:px-8 text-center"
        >
          <div className="bg-white p-12 rounded-[20px] border-2 border-accent-pink/35 shadow-lg">
            <div className="text-6xl mb-6 text-accent-pink">✓</div>
            <h2 className="text-4xl font-serif font-bold text-black-espresso mb-4">
              Application Submitted
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8 font-sans">
              Thank you for your interest in Onyxspire Management. Our team will review your application and get back to you within 24-48 hours.
            </p>
            <p className="text-black-espresso/60 font-sans">
              We look forward to potentially working with you!
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Image
              src="/photos/join us.png"
              alt="Join Us"
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
            Take the first step toward elite creator management. Complete the form below to begin your journey with Onyxspire.
          </motion.p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[20px] border-2 border-accent-pink/35 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="currentEarnings" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Current Monthly Earnings *
                </label>
                <select
                  id="currentEarnings"
                  name="currentEarnings"
                  required
                  value={formData.currentEarnings}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                >
                  <option value="">Select range</option>
                  <option value="0-1k">$0 - $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="platform" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Primary Platform *
                </label>
                <select
                  id="platform"
                  name="platform"
                  required
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                >
                  <option value="">Select platform</option>
                  <option value="onlyfans">OnlyFans</option>
                  <option value="fansly">Fansly</option>
                  <option value="manyvids">ManyVids</option>
                  <option value="chaturbate">Chaturbate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-black-espresso font-semibold mb-2 font-sans">
                  What are your primary goals? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors resize-none font-sans"
                  placeholder="Describe your goals and what you hope to achieve with Onyxspire..."
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-black-espresso font-semibold mb-2 font-sans">
                  When are you looking to get started?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans"
                >
                  <option value="">Select timeline</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-black-espresso font-semibold mb-2 font-sans">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors resize-none font-sans"
                  placeholder="Any additional information you'd like us to know..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-pink text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
