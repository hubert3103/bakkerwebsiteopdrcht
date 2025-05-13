'use client'

import { useEffect } from 'react'
import Navigation from './components/Navigation'
import { register } from './sw-register'

export default function ClientLayout({ children }) {
  useEffect(() => {
    register()
  }, [])

  return (
    <body className="min-h-screen bg-amber-50">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-amber-700 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center">© 2024 Het witte bolletje. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </body>
  )
} 