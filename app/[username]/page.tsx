import { notFound } from 'next/navigation'
import { getCreatorByUsername } from '@/lib/creators'
import CreatorLinkPage from '@/components/CreatorLinkPage'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  try {
    const { getAllUsernames } = await import('@/lib/creators')
    const usernames = getAllUsernames()
    
    return usernames.map((username) => ({
      username,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const creator = getCreatorByUsername(params.username)
  
  if (!creator) {
    return {
      title: 'Creator Not Found | Onyxspire',
    }
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const ogImage = creator.heroImageUrl || creator.profileImageUrl
  
  return {
    title: `${creator.displayName} | Onyxspire`,
    description: creator.bio,
    openGraph: {
      title: `${creator.displayName} | Onyxspire`,
      description: creator.bio,
      images: ogImage ? [ogImage] : [],
      url: `${siteUrl}/${creator.username}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${creator.displayName} | Onyxspire`,
      description: creator.bio,
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default function CreatorPage({ params }: { params: { username: string } }) {
  const creator = getCreatorByUsername(params.username)
  
  if (!creator) {
    notFound()
  }
  
  return <CreatorLinkPage creator={creator} />
}

