'use client'

import Image from 'next/image'

// Brand logos - Using uploaded logo files
const brands = [
  { name: 'Forbes', logoPath: '/logos/1.png' },
  { name: 'OFTV', logoPath: '/logos/2.png' },
  { name: 'Vogue', logoPath: '/logos/3.png' },
  { name: 'Vanity Fair', logoPath: '/logos/4.png' },
  { name: 'GQ', logoPath: '/logos/5.png' },
  { name: 'Elle', logoPath: '/logos/6.png' },
  { name: 'Harpers Bazaar', logoPath: '/logos/7.png' },
  { name: 'NY Times', logoPath: '/logos/8.png' },
  { name: 'WSJ', logoPath: '/logos/9.png' },
  { name: 'Bloomberg', logoPath: '/logos/10.png' },
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
                onError={(e) => {
                  // Fallback to text if logo doesn't exist
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const fallback = document.createElement('div')
                    fallback.className = 'logo-fallback text-black-espresso text-xl md:text-2xl font-serif font-bold uppercase tracking-wider opacity-90'
                    fallback.textContent = brand.name
                    parent.appendChild(fallback)
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
