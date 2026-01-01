'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  
  // Don't render footer on creator pages (single segment paths that aren't known routes)
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

  const isApplicationPage = pathname === '/application'

  if (isCreatorPage || isApplicationPage) {
    return null
  }

  return (
    <footer className="bg-transparent border-t border-accent-pink/20 mt-auto relative z-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Empty spacer columns - maximum shift for Get Started */}
          <div className="hidden md:block md:col-span-7"></div>
          
          {/* Get Started - moved maximum to the right */}
          <div className="flex flex-col md:items-start items-center text-center md:text-left md:col-span-2">
            <h4 className="text-accent-pink font-semibold mb-3 uppercase tracking-wider text-xs font-sans">
              Get Started
            </h4>
            <Link
              href="/application"
              className="inline-block bg-accent-pink text-white px-6 py-2.5 font-semibold uppercase tracking-wider text-xs hover:bg-accent-pink/90 transition-colors luxury-glow relative"
              style={{ zIndex: 10000, fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Apply Now
            </Link>
          </div>
          
          {/* Quick Links - moved maximum to the right */}
          <div className="md:text-left text-center md:col-span-2">
            <h4 className="text-accent-pink font-semibold mb-3 uppercase tracking-wider text-xs font-sans">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    Creators
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-black-espresso/70 hover:text-accent-pink transition-colors text-xs font-sans">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Logo - furthest to the right, enlarged by 50% */}
          <div className="flex flex-col md:items-end items-center text-center md:text-right md:col-span-1">
            <div>
              <Image
                src="/photos/bkoslogo.png"
                alt="Onyxspire"
                width={360}
                height={126}
                className="h-24 w-auto mx-auto md:mx-0"
                unoptimized
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-accent-pink/20">
          <p className="text-black-espresso/50 text-xs text-center font-sans">
            © {new Date().getFullYear()} Onyxspire Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

