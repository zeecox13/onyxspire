'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface VideoContextType {
  isDarkVideo: boolean
  setIsDarkVideo: (isDark: boolean) => void
}

const VideoContext = createContext<VideoContextType | undefined>(undefined)

export function VideoProvider({ children }: { children: ReactNode }) {
  const [isDarkVideo, setIsDarkVideo] = useState(false)

  return (
    <VideoContext.Provider value={{ isDarkVideo, setIsDarkVideo }}>
      {children}
    </VideoContext.Provider>
  )
}

export function useVideo() {
  const context = useContext(VideoContext)
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider')
  }
  return context
}



