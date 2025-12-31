'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Creator, CreatorLink } from '@/lib/creators'
import AdminCreatorForm from '@/components/AdminCreatorForm'
import AdminCreatorList from '@/components/AdminCreatorList'

export default function AdminPage() {
  const [creators, setCreators] = useState<Creator[]>([])
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const loadCreators = async () => {
    try {
      const response = await fetch('/api/creators')
      if (response.ok) {
        const data = await response.json()
        setCreators(data)
      } else {
        // Fallback to client-side data
        const { getAllCreators } = await import('@/lib/creators')
        setCreators(getAllCreators())
      }
    } catch (error) {
      // Fallback to client-side data
      const { getAllCreators } = await import('@/lib/creators')
      setCreators(getAllCreators())
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Check authentication first
    fetch('/api/admin/check')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true)
          loadCreators()
        } else {
          router.push('/admin/login')
        }
      })
      .catch(() => {
        router.push('/admin/login')
      })
  }, [router])

  const handleSave = async (creator: Creator) => {
    try {
      const response = await fetch('/api/creators', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creator),
      })

      if (response.ok) {
        await loadCreators()
        setSelectedCreator(null)
        alert('Creator saved successfully!')
      } else {
        alert('Error saving creator')
      }
    } catch (error) {
      alert('Error saving creator')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this creator?')) return

    try {
      const response = await fetch(`/api/creators/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        await loadCreators()
        if (selectedCreator?.id === id) {
          setSelectedCreator(null)
        }
      } else {
        alert('Error deleting creator')
      }
    } catch (error) {
      alert('Error deleting creator')
    }
  }

  if (!isAuthenticated || isLoading) {
    return (
      <div className="min-h-screen bg-black-espresso flex items-center justify-center">
        <p className="text-soft-ivory">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black-espresso">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold text-soft-ivory mb-2">
              Creator Management
            </h1>
            <p className="text-soft-ivory/70">
              Manage creators and their link pages
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-soft-ivory/70 hover:text-soft-ivory text-sm uppercase tracking-wider"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AdminCreatorList
              creators={creators}
              selectedCreator={selectedCreator}
              onSelect={setSelectedCreator}
              onDelete={handleDelete}
              onNew={() => setSelectedCreator({
                id: '',
                username: '',
                displayName: '',
                bio: '',
                profileImageUrl: '',
                heroImageUrl: null,
                accentColor: '#C6A667',
                links: [],
              })}
            />
          </div>

          <div className="lg:col-span-2">
            {selectedCreator ? (
              <AdminCreatorForm
                creator={selectedCreator}
                onSave={handleSave}
                onCancel={() => setSelectedCreator(null)}
              />
            ) : (
              <div className="bg-ash-graphite p-8 rounded-lg border border-bronze-gold/20">
                <p className="text-soft-ivory/70 text-center">
                  Select a creator to edit or create a new one
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

