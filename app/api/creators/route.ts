import { NextRequest, NextResponse } from 'next/server'
import { getAllCreators, getCreatorByUsername, saveCreator } from '@/lib/creators'
import { Creator } from '@/lib/creators'
import { isAuthenticated } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

const CREATORS_FILE = path.join(process.cwd(), 'data', 'creators.json')

export async function GET() {
  try {
    const creators = getAllCreators()
    return NextResponse.json(creators)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load creators' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  // Check authentication
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const creator: Creator = await request.json()

    // Validate required fields
    if (!creator.username || !creator.displayName) {
      return NextResponse.json({ error: 'Username and display name are required' }, { status: 400 })
    }

    // Check if username already exists (for new creators)
    if (!creator.id) {
      const existing = getCreatorByUsername(creator.username)
      if (existing && existing.id !== creator.id) {
        return NextResponse.json({ error: 'Username already exists' }, { status: 400 })
      }
      creator.id = Date.now().toString()
    }

    // Load current creators
    const creators = getAllCreators()
    const index = creators.findIndex((c) => c.id === creator.id)

    if (index >= 0) {
      creators[index] = creator
    } else {
      creators.push(creator)
    }

    // Save to file (in production, use a database)
    fs.writeFileSync(CREATORS_FILE, JSON.stringify(creators, null, 2))

    return NextResponse.json(creator)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save creator' }, { status: 500 })
  }
}

