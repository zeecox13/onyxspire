'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated
    fetch('/api/admin/check')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          router.push('/admin')
        }
      })
      .catch(() => {
        // Ignore errors
      })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.error || 'Invalid password')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center px-6 z-50" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-[20px] border-2 border-accent-pink/35 shadow-xl p-10"
        >
          <h1 
            className="text-4xl font-bold text-black-espresso mb-3 text-center"
            style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            Admin Login
          </h1>
          <p className="text-black-espresso/70 mb-10 text-center text-sm uppercase tracking-wider font-sans">
            Enter your password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-black-espresso mb-3 text-sm font-semibold uppercase tracking-wider font-sans">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-all text-lg font-sans"
                placeholder="••••••••"
                required
                autoFocus
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border-2 border-red-500/50 text-red-600 px-5 py-4 rounded-lg text-sm font-sans"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent-pink text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all luxury-glow disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-accent-pink/20 text-center">
            <p className="text-black-espresso/40 text-xs font-sans">
              Restricted access. Authorized personnel only.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
