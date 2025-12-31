'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVideo } from '@/contexts/VideoContext'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOnHeroPage, setIsOnHeroPage] = useState(false)
  const { isDarkVideo } = useVideo()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          setIsOnHeroPage(window.scrollY < window.innerHeight)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/creators', label: 'Creators' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/application', label: 'Application' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: 'clamp(3rem, 4vw, 3.5rem)' }}>
          <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/photos/whiteoslogo.png"
                alt="Onyxspire"
                width={180}
                height={60}
                className="w-auto transition-opacity duration-300"
                style={{ height: 'clamp(2.5rem, 3vw, 3rem)' }}
                priority
                fetchPriority="high"
                unoptimized
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 font-medium uppercase tracking-wider text-white hover:text-accent-pink"
                style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.125rem, 0.875rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                {link.href === '/application' ? 'Join Us' : link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors text-white hover:text-accent-pink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-sm border-t border-accent-pink/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition-colors duration-300 font-medium text-sm uppercase tracking-wider text-white hover:text-accent-pink"
                  style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.href === '/application' ? 'Join Us' : link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Pink bar under nav */}
      <div className="h-0.5 bg-accent-pink w-full" />
    </nav>
  )
}

