'use client'

import { useState } from 'react'
import { Creator, CreatorLink } from '@/lib/creators'
import Image from 'next/image'

interface AdminCreatorFormProps {
  creator: Creator
  onSave: (creator: Creator) => void
  onCancel: () => void
}

export default function AdminCreatorForm({ creator: initialCreator, onSave, onCancel }: AdminCreatorFormProps) {
  const [creator, setCreator] = useState<Creator>(initialCreator)
  const [newLink, setNewLink] = useState<Partial<CreatorLink>>({
    label: '',
    url: '',
    platform: 'custom',
    isPrimary: false,
    isActive: true,
    order: creator.links.length + 1,
  })

  const updateField = (field: keyof Creator, value: any) => {
    setCreator({ ...creator, [field]: value })
  }

  const updateLink = (linkId: string, field: keyof CreatorLink, value: any) => {
    setCreator({
      ...creator,
      links: creator.links.map((link) =>
        link.id === linkId ? { ...link, [field]: value } : link
      ),
    })
  }

  const addLink = () => {
    if (!newLink.label || !newLink.url) return

    const link: CreatorLink = {
      id: Date.now().toString(),
      label: newLink.label!,
      url: newLink.url!,
      platform: newLink.platform || 'custom',
      isPrimary: newLink.isPrimary || false,
      isActive: newLink.isActive !== false,
      order: newLink.order || creator.links.length + 1,
    }

    setCreator({
      ...creator,
      links: [...creator.links, link],
    })

    setNewLink({
      label: '',
      url: '',
      platform: 'custom',
      isPrimary: false,
      isActive: true,
      order: creator.links.length + 2,
    })
  }

  const removeLink = (linkId: string) => {
    setCreator({
      ...creator,
      links: creator.links.filter((link) => link.id !== linkId),
    })
  }

  const moveLink = (linkId: string, direction: 'up' | 'down') => {
    const links = [...creator.links]
    const index = links.findIndex((l) => l.id === linkId)
    if (index === -1) return

    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= links.length) return

    ;[links[index], links[newIndex]] = [links[newIndex], links[index]]
    links.forEach((link, i) => {
      link.order = i + 1
    })

    setCreator({ ...creator, links })
  }

  return (
    <div className="bg-ash-graphite rounded-lg border border-bronze-gold/20 p-8">
      <h2 className="text-2xl font-serif font-bold text-soft-ivory mb-6">
        {creator.id ? 'Edit Creator' : 'New Creator'}
      </h2>

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-soft-ivory mb-2">Username (URL slug)</label>
            <input
              type="text"
              value={creator.username}
              onChange={(e) => updateField('username', e.target.value)}
              className="w-full px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
              placeholder="alexiabrea"
            />
          </div>

          <div>
            <label className="block text-soft-ivory mb-2">Display Name</label>
            <input
              type="text"
              value={creator.displayName}
              onChange={(e) => updateField('displayName', e.target.value)}
              className="w-full px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
              placeholder="Alexia Brea"
            />
          </div>

          <div>
            <label className="block text-soft-ivory mb-2">Bio</label>
            <textarea
              value={creator.bio}
              onChange={(e) => updateField('bio', e.target.value)}
              className="w-full px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
              rows={3}
              placeholder="Short bio..."
            />
          </div>

          <div>
            <label className="block text-soft-ivory mb-2">Profile Image URL</label>
            <input
              type="text"
              value={creator.profileImageUrl}
              onChange={(e) => updateField('profileImageUrl', e.target.value)}
              className="w-full px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
              placeholder="/images/profile.jpg"
            />
          </div>

          <div>
            <label className="block text-soft-ivory mb-2">Hero Image URL (optional)</label>
            <input
              type="text"
              value={creator.heroImageUrl || ''}
              onChange={(e) => updateField('heroImageUrl', e.target.value || null)}
              className="w-full px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
              placeholder="/images/hero.jpg"
            />
          </div>

          <div>
            <label className="block text-soft-ivory mb-2">Accent Color</label>
            <div className="flex gap-4">
              <input
                type="color"
                value={creator.accentColor}
                onChange={(e) => updateField('accentColor', e.target.value)}
                className="h-10 w-20 rounded"
              />
              <input
                type="text"
                value={creator.accentColor}
                onChange={(e) => updateField('accentColor', e.target.value)}
                className="flex-1 px-4 py-2 bg-black-espresso border border-bronze-gold/30 text-soft-ivory rounded-lg"
                placeholder="#C6A667"
              />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-soft-ivory mb-4">Links</h3>

          <div className="space-y-3 mb-4">
            {creator.links.map((link) => (
              <div
                key={link.id}
                className="bg-black-espresso p-4 rounded-lg border border-bronze-gold/20"
              >
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => updateLink(link.id, 'label', e.target.value)}
                    className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                    className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
                    placeholder="URL"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={link.platform}
                    onChange={(e) => updateLink(link.id, 'platform', e.target.value)}
                    className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
                  >
                    <option value="custom">Custom</option>
                    <option value="onlyfans">OnlyFans</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="tiktok">TikTok</option>
                    <option value="website">Website</option>
                  </select>
                  <label className="flex items-center gap-2 text-soft-ivory text-sm">
                    <input
                      type="checkbox"
                      checked={link.isPrimary}
                      onChange={(e) => updateLink(link.id, 'isPrimary', e.target.checked)}
                    />
                    Primary
                  </label>
                  <label className="flex items-center gap-2 text-soft-ivory text-sm">
                    <input
                      type="checkbox"
                      checked={link.isActive}
                      onChange={(e) => updateLink(link.id, 'isActive', e.target.checked)}
                    />
                    Active
                  </label>
                  <button
                    onClick={() => moveLink(link.id, 'up')}
                    className="text-bronze-gold text-sm"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveLink(link.id, 'down')}
                    className="text-bronze-gold text-sm"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeLink(link.id)}
                    className="text-red-400 text-sm ml-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Link */}
          <div className="bg-black-espresso p-4 rounded-lg border border-bronze-gold/20">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                value={newLink.label}
                onChange={(e) => setNewLink({ ...newLink, label: e.target.value })}
                className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
                placeholder="Label"
              />
              <input
                type="text"
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
                placeholder="URL"
              />
            </div>
            <div className="flex items-center gap-4">
              <select
                value={newLink.platform}
                onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
                className="px-3 py-2 bg-ash-graphite border border-bronze-gold/30 text-soft-ivory rounded text-sm"
              >
                <option value="custom">Custom</option>
                <option value="onlyfans">OnlyFans</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="tiktok">TikTok</option>
                <option value="website">Website</option>
              </select>
              <label className="flex items-center gap-2 text-soft-ivory text-sm">
                <input
                  type="checkbox"
                  checked={newLink.isPrimary}
                  onChange={(e) => setNewLink({ ...newLink, isPrimary: e.target.checked })}
                />
                Primary
              </label>
              <button
                onClick={addLink}
                className="bg-bronze-gold text-black-espresso px-4 py-2 rounded text-sm font-semibold hover:bg-bronze-gold/90"
              >
                Add Link
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-bronze-gold/20">
          <button
            onClick={() => onSave(creator)}
            className="bg-bronze-gold text-black-espresso px-8 py-3 font-semibold uppercase tracking-wider hover:bg-bronze-gold/90 transition-all"
          >
            Save Creator
          </button>
          <button
            onClick={onCancel}
            className="border-2 border-bronze-gold text-bronze-gold px-8 py-3 font-semibold uppercase tracking-wider hover:bg-bronze-gold/10 transition-all"
          >
            Cancel
          </button>
          {creator.id && creator.username && (
            <a
              href={`/${creator.username}`}
              target="_blank"
              className="border-2 border-soft-ivory text-soft-ivory px-8 py-3 font-semibold uppercase tracking-wider hover:bg-soft-ivory/10 transition-all"
            >
              View Page
            </a>
          )}
        </div>
      </div>
    </div>
  )
}



