'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'What if I don\'t know what to make?',
    answer: 'Our team works closely with you to identify your unique strengths and niche. We provide comprehensive content strategy guidance, helping you discover what resonates with your audience while staying true to your authentic voice. Through data analysis and market research, we help you find your perfect content direction.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing structure is customized based on your specific needs and goals. We offer flexible arrangements that align with your revenue and growth trajectory. Contact us through our application form to discuss pricing options tailored to your situation.',
  },
  {
    question: 'What do I have to post?',
    answer: 'We place a strong emphasis on consistent social media posting as a cornerstone of your growth strategy. You maintain full creative control over your content, and our team provides comprehensive strategic guidance, content calendars, and optimization recommendations every step of the way. We work alongside you to develop a posting strategy that aligns with your authentic voice while maximizing engagement and growth. All content decisions remain yours, and we help you understand what performs best while respecting your creative vision and boundaries.',
  },
  {
    question: 'Can I remain anonymous?',
    answer: 'Yes, absolutely. We respect your privacy and can work with you to maintain anonymity while still achieving maximum growth and revenue. Our team is experienced in managing accounts that require discretion and privacy protection.',
  },
  {
    question: 'Will we have to meet in person?',
    answer: 'No, meeting in person is not required. All of our services are delivered remotely through digital communication channels. We provide 24/7 support via email, messaging platforms, and scheduled video calls as needed. Our entire operation is designed to work seamlessly regardless of location.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Results vary based on your starting point and goals, but most creators see measurable improvements within the first 30-60 days. Our strategic approach focuses on sustainable, long-term growth while optimizing for immediate revenue opportunities.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'We provide comprehensive support across all major content creator platforms. Our team is experienced with multi-platform strategies and can help you optimize your presence across various channels simultaneously.',
  },
  {
    question: 'Do you handle all business aspects?',
    answer: 'Yes, we handle the complete business side of your creative enterprise. This includes account management, marketing, content scheduling, customer service, pricing optimization, and financial planning. You can focus entirely on creating while we manage everything else.',
  },
]

export default function FAQ() {
  return (
    <div className="pt-20" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
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
              src="/photos/facts and questions.png"
              alt="Facts and Questions"
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
            Everything you need to know about working with Onyxspire
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/95 rounded-[20px] border-2 border-accent-pink/20 shadow-lg p-8 md:p-10 hover:border-accent-pink/40 transition-all"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black-espresso mb-4" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                  {faq.question}
                </h3>
                <div className="h-px bg-accent-pink/30 mb-6"></div>
                <p className="text-lg text-black-espresso/80 leading-relaxed font-sans">
                  {faq.answer}
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black-espresso mb-6" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Still Have Questions?
            </h2>
            <p className="text-xl text-black-espresso/70 mb-8 font-sans">
              Get in touch with our team or start your application to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/application"
                className="inline-block bg-accent-pink text-white px-10 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow"
                style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Start Application
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
