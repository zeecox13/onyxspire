'use client'

import Image from 'next/image'

// Brand logos - Using actual logo files from /logos/ folder
const brands = [
  { name: 'Forbes', logoPath: '/logos/forbes.png' },
  { name: 'OFTV', logoPath: '/logos/oftv.png' },
  { name: 'Vanity Fair', logoPath: '/logos/vanity fair.png' },
  { name: 'Playboy', logoPath: '/logos/playboy.png' },
  { name: 'New York Weekly', logoPath: '/logos/new york weekly.png' },
  { name: 'AVN', logoPath: '/logos/avn.png' },
  { name: 'XBIZ', logoPath: '/logos/xbiz.png' },
]

export default function BrandRotator() {
  // Duplicate brands array for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <div className="overflow-hidden relative w-full bg-transparent">
      <div className="flex items-center h-12 md:h-16 bg-transparent">
        <div 
          className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
          style={{
            animation: 'scroll 40s linear infinite',
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 h-6 md:h-10 w-auto flex items-center justify-center"
            >
              <Image
                src={brand.logoPath}
                alt={brand.name}
                width={120}
                height={48}
                className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
