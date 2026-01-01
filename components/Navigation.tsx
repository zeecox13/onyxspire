'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOnHeroPage, setIsOnHeroPage] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0) // 0 to 1, where 0 is top of hero, 1 is past hero
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  // Check if this is a creator page (single segment path that's not a known route)
  const isCreatorPage = pathname && pathname !== '/' && 
    !pathname.startsWith('/admin') && 
    !pathname.startsWith('/blog') && 
    !pathname.startsWith('/testimonials') && 
    !pathname.startsWith('/creators') && 
    !pathname.startsWith('/faq') && 
    !pathname.startsWith('/application') &&
    pathname.split('/').length === 2 && // Only one segment after the root
    pathname.split('/')[1] && // Segment exists
    !pathname.includes('.') // Not a file

  useEffect(() => {
    if (!isHomePage) {
      setIsPastHero(true) // Always show background nav on non-home pages
      setScrollProgress(1) // Full progress on non-home pages
      return
    }

    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const heroHeight = window.innerHeight
          setIsScrolled(scrollY > 50)
          setIsOnHeroPage(scrollY < heroHeight)
          setIsPastHero(scrollY > heroHeight)
          // Calculate scroll progress: 0 at top, 1 at bottom of hero
          const progress = Math.min(scrollY / heroHeight, 1)
          setScrollProgress(progress)
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

  // Don't render navigation on creator pages
  if (isCreatorPage) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0" style={{ zIndex: 100 }}>
      {/* Pink line on very top */}
      <div className="h-0.5 bg-accent-pink w-full" />
      
      {/* Nav content */}
      <div 
        className="relative"
        style={{
          zIndex: 100,
        }}
      >
        {/* Background layer - only shows when scrolling past hero or on non-home pages */}
        {(isPastHero || !isHomePage || (isHomePage && scrollProgress > 0.15)) && (
          <>
            {/* Solid background overlay for more visibility */}
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{
                backgroundColor: isPastHero || !isHomePage 
                  ? 'rgba(255, 255, 255, 0.85)' 
                  : isHomePage && scrollProgress > 0.15
                    ? `rgba(255, 255, 255, ${0.85 * (scrollProgress - 0.15) / 0.85})`
                    : 'transparent',
                zIndex: -2,
              }}
            />
            {/* Background image layer */}
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{
                backgroundImage: 'url(/photos/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: isPastHero || !isHomePage 
                  ? 1 
                  : (scrollProgress - 0.15) / 0.85, // Smooth fade in from 0.15 to 1.0
                maskImage: 'linear-gradient(to bottom, black 0%, black calc(100% - 60px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black calc(100% - 60px), transparent 100%)',
                zIndex: -1,
              }}
            />
          </>
        )}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: 'clamp(3rem, 4vw, 3.5rem)' }}>
          <Link href="/" className="flex items-center space-x-2 relative" style={{ zIndex: 100, position: 'relative' }}>
              <div className="relative" style={{ height: 'clamp(2.5rem, 3vw, 3rem)', width: '180px', zIndex: 100 }}>
                {!(isPastHero || !isHomePage) && (
                  <Image
                    src="/photos/whiteoslogo.png"
                    alt="Onyxspire"
                    width={180}
                    height={60}
                    className="w-auto transition-opacity duration-500 ease-in-out"
                    style={{ height: 'clamp(2.5rem, 3vw, 3rem)', width: 'auto' }}
                    priority
                    fetchPriority="high"
                    unoptimized
                  />
                )}
                {(isPastHero || !isHomePage) && (
                  <Image
                    src="/photos/bkoslogo.png"
                    alt="Onyxspire"
                    width={180}
                    height={60}
                    className="w-auto transition-opacity duration-500 ease-in-out"
                    style={{ height: 'clamp(2.5rem, 3vw, 3rem)', width: 'auto' }}
                    priority
                    fetchPriority="high"
                    unoptimized
                  />
                )}
              </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative" style={{ zIndex: 100 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-500 ease-in-out font-bold uppercase tracking-wider hover:text-accent-pink ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
                style={{ fontSize: 'clamp(0.75rem, 0.85vw + 0.15rem, 1rem)', fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                {link.href === '/application' ? 'Join Us' : link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-500 ease-in-out hover:text-accent-pink relative ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
            style={{ zIndex: 100 }}
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
                  className={`block transition-colors duration-300 font-bold text-sm uppercase tracking-wider hover:text-accent-pink ${isPastHero || !isHomePage ? 'text-black-espresso' : 'text-white'}`}
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

