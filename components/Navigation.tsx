'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVideo } from '@/contexts/VideoContext'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOnHeroPage, setIsOnHeroPage] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const pathname = usePathname()
  const { isDarkVideo } = useVideo()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setIsPastHero(true) // Always show white nav on non-home pages
      return
    }

    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          setIsOnHeroPage(window.scrollY < window.innerHeight)
          setIsPastHero(window.scrollY > window.innerHeight)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/creators', label: 'Creators' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/application', label: 'Application' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Pink line on very top */}
      <div className="h-0.5 bg-accent-pink w-full" />
      
      {/* Nav content */}
      <div 
        className="relative transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: isPastHero || !isHomePage ? 'transparent' : 'transparent',
          backgroundImage: isPastHero || !isHomePage ? 'url(/photos/background.png)' : 'none',
          backgroundSize: isPastHero || !isHomePage ? 'cover' : 'none',
          backgroundPosition: isPastHero || !isHomePage ? 'center' : 'center',
          backgroundRepeat: isPastHero || !isHomePage ? 'no-repeat' : 'no-repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: 'clamp(3rem, 4vw, 3.5rem)' }}>
          <Link href="/" className="flex items-center space-x-2 relative z-10">
              <div className="relative" style={{ height: 'clamp(2.5rem, 3vw, 3rem)', width: 'auto' }}>
                <Image
                  src="/photos/whiteoslogo.png"
                  alt="Onyxspire"
                  width={180}
                  height={60}
                  className={`w-auto absolute inset-0 transition-opacity duration-500 ease-in-out ${isPastHero || !isHomePage ? 'opacity-0' : 'opacity-100'}`}
                  style={{ height: 'clamp(2.5rem, 3vw, 3rem)' }}
                  priority
                  fetchPriority="high"
                  unoptimized
                />
                <Image
                  src="/photos/bkoslogo.png"
                  alt="Onyxspire"
                  width={180}
                  height={60}
                  className={`w-auto absolute inset-0 transition-opacity duration-500 ease-in-out ${isPastHero || !isHomePage ? 'opacity-100' : 'opacity-0'}`}
                  style={{ height: 'clamp(2.5rem, 3vw, 3rem)' }}
                  priority
                  fetchPriority="high"
                  unoptimized
                />
              </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-500 ease-in-out font-medium uppercase tracking-wider hover:text-accent-pink ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
                style={{ fontSize: 'clamp(0.625rem, 0.75vw + 0.125rem, 0.875rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                {link.href === '/application' ? 'Join Us' : link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-500 ease-in-out hover:text-accent-pink relative z-10 ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
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
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-sm border-t border-accent-pink/20 ${isPastHero || !isHomePage ? 'bg-transparent' : 'bg-black/80'}`}
            style={isPastHero || !isHomePage ? {
              backgroundImage: 'url(/photos/background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            } : {}}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block transition-colors duration-300 font-medium text-sm uppercase tracking-wider hover:text-accent-pink ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
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
    </nav>
  )
}

