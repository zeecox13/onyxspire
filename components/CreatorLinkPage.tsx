'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Creator } from '@/lib/creators'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CreatorLinkPageProps {
  creator: Creator
}

// Platform logo mapping - using logo images from /logos/ folder
function getPlatformLogo(platform: string, size: number = 24) {
  const logoMap: Record<string, string> = {
    'onlyfans': '/logos/onlyfans.png',
    'fansly': '/logos/fansly.png',
    'sextpanther': '/logos/sextpanther.png',
    'instagram': '/logos/instagram.png',
    'twitter': '/logos/x.png',
    'x': '/logos/x.png',
    'tiktok': '/logos/tiktok.png',
    'pinterest': '/logos/pinterest.png',
    'youtube': '/logos/youtubecreator.png',
    'etsy': '/logos/etsy.png',
    'website': '/logos/onlyfans.png', // fallback
  }
  
  const logoPath = logoMap[platform.toLowerCase()] || logoMap['website']
  
  return (
    <Image
      src={logoPath}
      alt={platform}
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      unoptimized
    />
  )
}

export default function CreatorLinkPage({ creator }: CreatorLinkPageProps) {
  const activeLinks = creator.links
    .filter((link) => link.isActive)
    .sort((a, b) => a.order - b.order)

  // Separate platform/subscription links from social media links
  const socialMediaPlatforms = ['instagram', 'twitter', 'x', 'tiktok', 'pinterest', 'youtube', 'etsy']
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
    <div className="fixed inset-0 min-h-screen relative overflow-hidden z-50" style={{
      backgroundImage: 'url(/photos/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Centered buttons and logos */}
        <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-8 px-6">
          {/* Platform Links - Stacked Vertically, Centered */}
          <div className="space-y-3 mb-8">
            {platformLinks.map((link, index) => {
              const platformLower = link.platform.toLowerCase()
              // Increase logo size by 50% more for OnlyFans, Fansly, and SEXTPANTHER (90px -> 135px)
              const logoSize = (platformLower === 'onlyfans' || platformLower === 'fansly' || platformLower === 'sextpanther') ? 135 : 60
              
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm border-2 border-accent-pink/30 rounded-xl px-6 hover:bg-white hover:border-accent-pink/60 hover:shadow-xl transition-all duration-300 shadow-lg overflow-hidden"
                  style={{ paddingTop: '0px', paddingBottom: '0px', minWidth: '240px' }}
                >
                  <div className="flex-shrink-0">
                    {getPlatformLogo(link.platform, logoSize)}
                  </div>
                  {platformLower === 'onlyfans' && (
                    <motion.span 
                      className="text-green-500 font-semibold uppercase tracking-wider"
                      style={{ 
                        fontSize: '10px',
                        textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)',
                      }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        textShadow: [
                          '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)',
                          '0 0 20px rgba(34, 197, 94, 1), 0 0 30px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6)',
                          '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)',
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      online
                    </motion.span>
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* Social Media Icons - Horizontal Row, Centered */}
          {socialLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-5 flex-wrap"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="w-6 h-6">
                    {getPlatformLogo(link.platform, 24)}
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Footer Logo - Bottom Center */}
        <div className="mt-auto pb-8 px-6 relative z-10 flex justify-center">
          <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/photos/bkoslogo.png"
              alt="Onyxspire"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
              unoptimized
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
