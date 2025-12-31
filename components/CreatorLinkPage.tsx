'use client'

import Image from 'next/image'
import { Creator } from '@/lib/creators'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CreatorLinkPageProps {
  creator: Creator
}

// Platform logo mapping - using platform icons since logos folder has brand logos
function getPlatformLogo(platform: string, size: number = 24) {
  const iconStyle = { width: size, height: size, display: 'inline-block' }
  
  switch (platform.toLowerCase()) {
    case 'onlyfans':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      )
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    case 'website':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M13 3L4 14v7h6v-6h6v6h6V14L13 3z"/>
        </svg>
      )
  }
}

export default function CreatorLinkPage({ creator }: CreatorLinkPageProps) {
  const activeLinks = creator.links
    .filter((link) => link.isActive)
    .sort((a, b) => a.order - b.order)

  // Separate platform/subscription links from social media links
  const socialMediaPlatforms = ['instagram', 'twitter', 'tiktok']
  const platformLinks = activeLinks.filter(link => 
    !socialMediaPlatforms.includes(link.platform.toLowerCase())
  )
  
  const socialLinks = activeLinks.filter(link => 
    socialMediaPlatforms.includes(link.platform.toLowerCase())
  )

  // Generate bokeh particles
  const [particles] = useState(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
  )

  return (
    <div className="fixed inset-0 min-h-screen relative overflow-hidden z-50 bg-[#0a0a0a]">
      {/* Animated Gradient Background with Bokeh */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 30%, #16213e 60%, #0a0a0a 100%)',
        }}
      >
        {/* Animated Bokeh Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size * 10}px`,
              height: `${particle.size * 10}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo/Name Section - Top */}
        <div className="flex-1 flex flex-col items-center justify-start pt-20 pb-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 
              className="text-6xl md:text-8xl font-bold text-white mb-2"
              style={{ 
                fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif",
                textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)',
                letterSpacing: '0.05em'
              }}
            >
              {creator.displayName.toUpperCase()}
            </h1>
            <p className="text-white/60 text-sm md:text-base font-sans tracking-widest">
              {creator.username}.onyxspire.com
            </p>
          </motion.div>

          {/* Platform Links - Stacked Vertically */}
          <div className="w-full max-w-md space-y-3 mb-8">
            {platformLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block w-full bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg px-5 py-4 hover:bg-black/60 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-white/90 group-hover:text-white transition-colors">
                    {getPlatformLogo(link.platform, 24)}
                  </div>
                  <span className="text-white font-medium text-lg flex-1">
                    {link.label}
                  </span>
                  {link.platform.toLowerCase() === 'onlyfans' && (
                    <span className="text-green-400 text-xs font-semibold">online</span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Media Icons - Horizontal Row */}
          {socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-6 flex-wrap"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  <div className="w-6 h-6">
                    {getPlatformLogo(link.platform, 24)}
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Creator Photo Section - Bottom on Light Grey Surface */}
        {creator.heroImageUrl && (
          <div className="relative mt-auto">
            <div className="bg-gray-200 h-96 md:h-[500px] relative overflow-hidden">
              <Image
                src={creator.heroImageUrl}
                alt={creator.displayName}
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        )}
        {!creator.heroImageUrl && creator.profileImageUrl && (
          <div className="relative mt-auto">
            <div className="bg-gray-200 h-96 md:h-[500px] relative overflow-hidden">
              <Image
                src={creator.profileImageUrl}
                alt={creator.displayName}
                fill
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
