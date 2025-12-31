import creatorsData from '@/data/creators.json'

export interface CreatorLink {
  id: string
  label: string
  url: string
  platform: string
  isPrimary: boolean
  isActive: boolean
  order: number
}

export interface Creator {
  id: string
  username: string
  displayName: string
  bio: string
  profileImageUrl: string
  heroImageUrl: string | null
  accentColor: string
  links: CreatorLink[]
}

export function getAllCreators(): Creator[] {
  return creatorsData as Creator[]
}

export function getCreatorByUsername(username: string): Creator | undefined {
  return creatorsData.find((creator) => creator.username === username) as Creator | undefined
}

export function getAllUsernames(): string[] {
  return creatorsData.map((creator) => creator.username)
}

export function saveCreator(creator: Creator): void {
  // In a real app, this would save to a database
  // For now, we'll update the JSON file
  const creators = getAllCreators()
  const index = creators.findIndex((c) => c.id === creator.id)
  
  if (index >= 0) {
    creators[index] = creator
  } else {
    creators.push(creator)
  }
  
  // Note: In production, you'd want to use a database or API
  // This is just for development
}



