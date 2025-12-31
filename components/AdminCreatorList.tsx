'use client'

import { Creator } from '@/lib/creators'

interface AdminCreatorListProps {
  creators: Creator[]
  selectedCreator: Creator | null
  onSelect: (creator: Creator) => void
  onDelete: (id: string) => void
  onNew: () => void
}

export default function AdminCreatorList({
  creators,
  selectedCreator,
  onSelect,
  onDelete,
  onNew,
}: AdminCreatorListProps) {
  return (
    <div className="bg-ash-graphite rounded-lg border border-bronze-gold/20 p-6">
      <button
        onClick={onNew}
        className="w-full bg-bronze-gold text-black-espresso px-4 py-3 font-semibold uppercase tracking-wider hover:bg-bronze-gold/90 transition-all mb-6"
      >
        + New Creator
      </button>

      <div className="space-y-2">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedCreator?.id === creator.id
                ? 'border-bronze-gold bg-black-espresso'
                : 'border-bronze-gold/20 hover:border-bronze-gold/40'
            }`}
            onClick={() => onSelect(creator)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-soft-ivory font-semibold">{creator.displayName}</h3>
                <p className="text-soft-ivory/60 text-sm">@{creator.username}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(creator.id)
                }}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



