import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black-espresso flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-ivory mb-4">
          Creator Not Found
        </h1>
        <p className="text-soft-ivory/70 mb-8 text-lg">
          This creator page doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-bronze-gold text-black-espresso px-8 py-3 font-semibold uppercase tracking-wider hover:bg-bronze-gold/90 transition-all luxury-glow"
        >
          Return Home
        </Link>
        <div className="mt-12">
          <Image
            src="/photos/whiteoslogo.png"
            alt="Onyxspire"
            width={120}
            height={40}
            className="h-8 w-auto mx-auto opacity-50"
          />
        </div>
      </div>
    </div>
  )
}



