'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Luxury video montage - rotating background videos
const videoSources = [
  '/videos/3015497-hd_1920_1080_24fps.mp4',
  '/videos/3188888-hd_1920_1080_25fps.mp4',
  '/videos/3403230-uhd_4096_2160_25fps.mp4',
  '/videos/3569286-uhd_3840_2160_24fps.mp4',
  '/videos/5309381-hd_1920_1080_25fps.mp4',
  '/videos/5379128-uhd_4096_2160_25fps.mp4',
  '/videos/5608053-uhd_3840_2160_30fps.mp4',
].map(src => encodeURI(src))

// Fallback gradient background if videos don't load
const fallbackGradient = 'linear-gradient(135deg, #121212 0%, #1E1F24 50%, #121212 100%)'

export default function VideoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Initial setup - load first video and start rotation
  useEffect(() => {
    // Preload first video aggressively for instant playback
    const firstVideo = videoRefs.current[0]
    if (firstVideo) {
      firstVideo.preload = 'auto'
      firstVideo.playsInline = true
      firstVideo.muted = true
      firstVideo.load()
      
      // Play immediately when ready
      const playWhenReady = () => {
        if (firstVideo.readyState >= 3) { // HAVE_FUTURE_DATA or better
          firstVideo.play().catch(() => {
            // Retry if autoplay fails
            setTimeout(() => firstVideo.play().catch(() => {}), 100)
          })
        } else {
          firstVideo.addEventListener('canplay', playWhenReady, { once: true })
          firstVideo.addEventListener('loadeddata', playWhenReady, { once: true })
        }
      }
      playWhenReady()
    }
    
    // Preload second video for smooth first transition
    const secondVideo = videoRefs.current[1]
    if (secondVideo && secondVideo.dataset.src) {
      secondVideo.preload = 'auto'
      secondVideo.playsInline = true
      secondVideo.muted = true
      secondVideo.src = secondVideo.dataset.src
      secondVideo.load()
    }

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length)
    }, 8000) // Change video every 8 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Handle video playback when current video changes - optimized for smooth transitions
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[]
    
    videos.forEach((video, index) => {
      if (!video) return
      
      // Load video source if needed
      if (index > 0 && !video.src && video.dataset.src) {
        video.src = video.dataset.src
        video.preload = 'auto'
        video.playsInline = true
        video.muted = true
        video.load()
      }
      
      if (index === currentVideoIndex) {
        // Preload next video for seamless transition
        const nextIndex = (currentVideoIndex + 1) % videoSources.length
        const nextVideo = videoRefs.current[nextIndex]
        if (nextVideo && !nextVideo.src && nextVideo.dataset.src) {
          nextVideo.src = nextVideo.dataset.src
          nextVideo.preload = 'auto'
          nextVideo.playsInline = true
          nextVideo.muted = true
          nextVideo.load()
        }
        
        // Play current video - ensure it's buffered enough
        const playVideo = () => {
          if (video.readyState >= 4) { // HAVE_ENOUGH_DATA - best for smooth playback
            video.currentTime = 0 // Reset to start for loop
            video.play().catch(() => {
              setTimeout(() => video.play().catch(() => {}), 100)
            })
          } else if (video.readyState >= 3) { // HAVE_FUTURE_DATA
            video.currentTime = 0
            video.play().catch(() => {})
          } else {
            // Wait for buffer - don't play until we have enough data
            const waitForBuffer = () => {
              if (video.readyState >= 3) {
                video.currentTime = 0
                video.play().catch(() => {})
              }
            }
            video.addEventListener('canplay', waitForBuffer, { once: true })
            video.addEventListener('progress', waitForBuffer, { once: true })
            video.addEventListener('loadeddata', waitForBuffer, { once: true })
          }
        }
        
        // Play immediately if ready, otherwise wait
        if (video.readyState >= 3) {
          playVideo()
        } else {
          video.addEventListener('canplaythrough', playVideo, { once: true })
          video.addEventListener('canplay', playVideo, { once: true })
          video.addEventListener('loadeddata', playVideo, { once: true })
          setTimeout(playVideo, 200) // Shorter fallback timeout
        }
      } else {
        // Pause other videos smoothly
        if (!video.paused) {
          video.pause()
        }
        // Don't reset currentTime - allows for smoother transitions
      }
    })
  }, [currentVideoIndex])

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
      {/* Dark gradient overlay at top - stays with hero section */}
      <div 
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: '350px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)',
          zIndex: 40,
        }}
      />
      
      {/* Render all videos, all playing, only show current one */}
      {videoSources.map((src, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el
          }}
          src={index === 0 ? src : undefined} // Only set src for first video initially
          data-src={index > 0 ? src : undefined} // Store src in data attribute for others
          muted
          loop
          playsInline
          preload={index === 0 ? "auto" : index === 1 ? "auto" : "metadata"} // Preload first two videos
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentVideoIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement
            if (index === currentVideoIndex && video.readyState >= 4) {
              video.play().catch(() => {})
            }
          }}
          onCanPlayThrough={(e) => {
            const video = e.target as HTMLVideoElement
            if (index === currentVideoIndex && video.paused && video.readyState >= 4) {
              video.play().catch(() => {})
            }
          }}
          onWaiting={(e) => {
            // Video is buffering - ensure it plays when ready
            const video = e.target as HTMLVideoElement
            if (index === currentVideoIndex) {
              const resumePlay = () => {
                if (video.readyState >= 3 && video.paused) {
                  video.play().catch(() => {})
                }
              }
              video.addEventListener('canplay', resumePlay, { once: true })
            }
          }}
          onError={(e) => {
            const target = e.target as HTMLVideoElement
            target.style.display = 'none'
          }}
        />
      ))}
      
      {/* Fallback gradient background - hidden behind videos */}
      <div 
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ background: fallbackGradient, opacity: 0 }}
      />

      {/* Subtle dark tint overlay for text readability */}
      <div 
        className="absolute inset-0 w-full h-full z-8"
        style={{ 
          background: 'rgba(0, 0, 0, 0.15)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Stars */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 3 + 1
          const startX = Math.random() * 100
          const startY = Math.random() * 100
          const duration = Math.random() * 20 + 15
          const delay = Math.random() * 5
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-soft-ivory/30"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                boxShadow: `0 0 ${size * 2}px rgba(245, 239, 231, 0.5)`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
              }}
            />
          )
        })}
      </div>

      <div className="relative z-50 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 relative"
          >
            <div className="relative" style={{ 
              filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 12px rgba(0, 0, 0, 0.2))',
            }}>
              <Image
                src="/photos/whiteonyxspirelogo.png"
                alt="Onyxspire"
                width={600}
                height={200}
                className="w-full max-w-4xl mx-auto h-auto"
                priority
                fetchPriority="high"
                style={{ filter: 'brightness(1.3)' }}
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-soft-ivory mb-8 font-light tracking-wider -mt-4"
            style={{
              fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.875rem)',
              textShadow: '0 0 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 0, 0, 0.4), 0 0 12px rgba(0, 0, 0, 0.3), 0 0 16px rgba(0, 0, 0, 0.25), 0 0 24px rgba(0, 0, 0, 0.2)',
              fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif"
            }}
          >
            ELITE CREATOR MANAGEMENT
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-soft-ivory/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(0.875rem, 1.25vw + 0.5rem, 1.25rem)',
              textShadow: '0 0 3px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.4), 0 0 9px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.25), 0 0 18px rgba(0, 0, 0, 0.2)',
            }}
          >
            A full-service management agency dedicated to long-term creator success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/application"
              className="bg-soft-ivory text-black-espresso font-semibold uppercase tracking-wider hover:bg-accent-pink hover:text-white active:bg-accent-pink active:text-white transition-all luxury-glow relative"
              style={{ padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)', zIndex: 10000, fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Apply Now
            </a>
            <a
              href="#services"
              className="border-2 border-soft-ivory text-soft-ivory font-semibold uppercase tracking-wider hover:bg-accent-pink hover:border-accent-pink hover:text-white active:bg-accent-pink active:border-accent-pink active:text-white transition-all relative"
              style={{ padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)', zIndex: 10000, fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              <div className="absolute inset-0 backdrop-blur-md bg-black/20 rounded -z-10" />
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

