'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
  className?: string
}

export default function ViewCounter({ slug, className = '' }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular contador de visualizações
    // Em produção, você pode integrar com um serviço como Vercel Analytics, Plausible, etc.
    const storedViews = localStorage.getItem(`views-${slug}`)
    const currentViews = storedViews ? parseInt(storedViews, 10) : 0
    const newViews = currentViews + 1

    localStorage.setItem(`views-${slug}`, newViews.toString())
    setViews(newViews)
    setIsLoading(false)
  }, [slug])

  if (isLoading) {
    return (
      <div
        className={`flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 ${className}`}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span>...</span>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      <span>{views?.toLocaleString('pt-BR')} visualizações</span>
    </div>
  )
}
