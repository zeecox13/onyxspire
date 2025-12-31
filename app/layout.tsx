import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { VideoProvider } from '@/contexts/VideoContext'

export const metadata: Metadata = {
  title: 'Onyxspire Management | Premium Creator Management',
  description: 'Elite management services for top-tier content creators. Transform your creative business with our comprehensive management, growth, and planning solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <VideoProvider>
          <Navigation />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </VideoProvider>
      </body>
    </html>
  )
}

