'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Julia',
    title: 'Finding Balance',
    subtitle: 'TOP 0.04% CREATOR',
    year: '2023',
    initialEarnings: '$4K',
    currentEarnings: '$28K Monthly',
    growth: '+600%',
    story: [
      {
        heading: 'Building Systems',
        text: "When Julia came to us, she was managing everything herself and feeling overwhelmed. We helped her organize her content schedule, improve her messaging strategy, and create better systems for fan engagement. She could finally focus on creating instead of constantly putting out fires.",
      },
      {
        heading: 'Steady Growth',
        text: "Over the past year, Julia's earnings have grown consistently from $4K to averaging $28K monthly. More importantly, she feels less stressed and has more time for herself while her business continues to grow.",
      },
    ],
    quote: "Working with Onyxspire gave me my life back. I can create content I'm proud of without drowning in DMs and admin work every day.",
  },
  {
    name: 'Sara',
    title: 'Smart Scaling',
    subtitle: 'TOP 0.03% CREATOR',
    year: '2023',
    initialEarnings: '$2.5K',
    currentEarnings: '$35K Monthly',
    growth: '+1,300%',
    story: [
      {
        heading: 'Getting Organized',
        text: 'Sara had potential but lacked structure. We worked together to optimize her profile, create a content calendar that actually worked, and develop messaging strategies that felt authentic to her brand. Our team handles the day-to-day operations so she can focus on what she does best.',
      },
      {
        heading: 'Sustainable Growth',
        text: 'In about 10 months, Sara went from $2.5K to consistently earning around $35K monthly. The growth felt manageable and sustainable because we built solid foundations instead of chasing quick wins.',
      },
    ],
    quote: 'I tried managing my page alone for months and kept hitting the same walls. Onyxspire helped me understand what was actually working and what was just busy work.',
  },
  {
    name: 'Stephanie',
    title: 'Breaking Through',
    subtitle: 'TOP 2% CREATOR',
    year: '2024',
    initialEarnings: '$100',
    currentEarnings: '$8K Monthly',
    growth: '+7,900%',
    story: [
      {
        heading: 'Starting Point',
        text: 'Stephanie came to Onyxspire feeling stuck and unable to grow. She was struggling to break through and reach new audiences, despite putting in significant effort.',
      },
      {
        heading: 'Finding Her Way',
        text: 'With strategic guidance and support, Stephanie was able to overcome her obstacles and achieve steady growth. She went from earning $100 to consistently making $8K monthly, and she\'s still growing.',
      },
    ],
    quote: 'I was ready to give up, but Onyxspire believed in me. They took care of everything I was struggling with, and now I\'m doing better than I ever imagined possible.',
  },
  {
    name: 'Maya',
    title: 'Consistent Progress',
    subtitle: 'TOP 1% CREATOR',
    year: '2024',
    initialEarnings: '$1.8K',
    currentEarnings: '$12K Monthly',
    growth: '+567%',
    story: [
      {
        heading: 'Need for Support',
        text: 'Maya had been creating for about a year and was earning around $1.8K monthly, but felt like she was working constantly without much to show for it. She needed help with strategy and someone to handle the overwhelming amount of messages.',
      },
      {
        heading: 'Steady Improvement',
        text: 'After working together for 8 months, Maya\'s monthly earnings have grown to around $12K. More importantly, she has better work-life balance and clearer direction for her content. The growth has been consistent rather than dramatic, which feels more sustainable.',
      },
    ],
    quote: 'I love that Onyxspire treats me like a real person, not just a number. They actually listen to what I want and help me build a business that works for my life.',
  },
]

export default function Testimonials() {
  return (
    <div className="pt-20 relative" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      {/* Photo on right edge - extends from top of screen */}
      <div className="hidden lg:block absolute pointer-events-none overflow-visible" style={{ right: '-32%', width: '85vw', top: '-80px', zIndex: 0 }}>
        <Image
          src="/photos/sjoy.png"
          alt=""
          width={800}
          height={1200}
          className="w-full object-contain object-left"
          unoptimized
          style={{ display: 'block', height: 'auto' }}
        />
      </div>

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
              src="/photos/testimonials.png"
              alt="Testimonials"
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
            Real success stories from creators who transformed their<br />businesses with Onyxspire
          </motion.p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-transparent relative w-full overflow-visible">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/95 rounded-[20px] border-2 border-accent-pink/20 shadow-lg overflow-hidden hover:border-accent-pink/40 transition-all"
              >
                {/* Header */}
                <div className="p-6 border-b border-accent-pink/20 bg-accent-pink/5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-black-espresso mb-1" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                        {testimonial.name}
                      </h3>
                      <p className="text-accent-pink text-sm font-semibold uppercase tracking-wider font-sans">
                        {testimonial.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black-espresso mb-1" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                        {testimonial.growth}
                      </div>
                      <p className="text-xs text-black-espresso/60 font-sans">Growth</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-black-espresso/70 font-sans">
                    <span>Started: {testimonial.initialEarnings}</span>
                    <span>→</span>
                    <span className="font-semibold">{testimonial.currentEarnings}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-accent-pink text-xs font-semibold uppercase tracking-wider font-sans">
                      {testimonial.title} • {testimonial.year}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {testimonial.story.map((storyItem, storyIndex) => (
                      <div key={storyIndex}>
                        <h4 className="text-lg font-bold text-black-espresso mb-2" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                          {storyItem.heading}
                        </h4>
                        <p className="text-black-espresso/80 leading-relaxed text-sm font-sans">
                          {storyItem.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="pt-4 border-t border-accent-pink/20">
                    <p className="text-black-espresso/90 italic leading-relaxed text-sm font-sans">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-6" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8 font-sans">
              Join our community of top-tier creators and transform your business with Onyxspire.
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
