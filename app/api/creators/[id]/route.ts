import { NextRequest, NextResponse } from 'next/server'
import { getAllCreators } from '@/lib/creators'
import { isAuthenticated } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

const CREATORS_FILE = path.join(process.cwd(), 'data', 'creators.json')

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check authentication
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const creators = getAllCreators()
    const filtered = creators.filter((c) => c.id !== params.id)

    fs.writeFileSync(CREATORS_FILE, JSON.stringify(filtered, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete creator' }, { status: 500 })
  }
}

