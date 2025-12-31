'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Creator } from '@/lib/creators'
import { getPlatformIcon } from '@/lib/platformIcons'

interface CreatorLinkPageProps {
  creator: Creator
}

export default function CreatorLinkPage({ creator }: CreatorLinkPageProps) {
  const activeLinks = creator.links
    .filter((link) => link.isActive)
    .sort((a, b) => a.order - b.order)

  const primaryLink = activeLinks.find((link) => link.isPrimary)
  const otherLinks = activeLinks.filter((link) => !link.isPrimary)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return (
    <div className="min-h-screen bg-black-espresso">
      {/* Hero Section */}
          {creator.heroImageUrl && (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={creator.heroImageUrl}
            alt={creator.displayName}
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
        </div>
      )}

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-30"
              style={{ backgroundColor: creator.accentColor }}
            />
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <Image
                src={creator.profileImageUrl}
                alt={creator.displayName}
                fill
                className="rounded-full object-cover border-4"
                style={{ borderColor: creator.accentColor }}
                priority
                unoptimized
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-soft-ivory mb-4">
            {creator.displayName}
          </h1>

          <p className="text-soft-ivory/80 text-lg mb-2 max-w-xl mx-auto leading-relaxed">
            {creator.bio}
          </p>

          <p className="text-soft-ivory/50 text-sm mt-4">
            Managed by Onyxspire
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          {/* Primary Link */}
          {primaryLink && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg px-6 py-5 font-semibold text-center transition-all luxury-glow relative overflow-hidden group"
              style={{
                backgroundColor: creator.accentColor,
                color: '#121212',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.95'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                {getPlatformIcon(primaryLink.platform, 20)}
                <span className="text-lg">{primaryLink.label}</span>
              </div>
            </a>
          )}

          {/* Other Links */}
          {otherLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg px-6 py-4 font-medium text-center transition-all border-2 relative overflow-hidden group"
              style={{
                borderColor: creator.accentColor,
                color: creator.accentColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${creator.accentColor}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <div className="flex items-center justify-center gap-3">
                {getPlatformIcon(link.platform, 18)}
                <span>{link.label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-soft-ivory/10">
          <Link href="/" className="inline-block mb-3">
            <Image
              src="/photos/whiteoslogo.png"
              alt="Onyxspire"
              width={100}
              height={35}
              className="h-6 w-auto mx-auto opacity-60 hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-soft-ivory/40 text-xs">
            Powered by Onyxspire
          </p>
        </div>
      </div>
    </div>
  )
}

