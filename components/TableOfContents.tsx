'use client'

import { useEffect, useState } from 'react'
import Link from './Link'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  toc: TOCItem[]
  className?: string
}

export default function TableOfContents({ toc, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    toc.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [toc])

  if (!toc || toc.length === 0) return null

  return (
    <div className={`sticky top-24 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Índice</h3>
      <nav className="space-y-1">
        {toc.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={`#${item.id}`}
            className={`hover:text-primary-600 dark:hover:text-primary-400 block text-sm transition-colors duration-200 ${
              item.level === 1
                ? 'font-medium text-gray-900 dark:text-gray-100'
                : item.level === 2
                  ? 'ml-4 text-gray-700 dark:text-gray-300'
                  : 'ml-8 text-gray-600 dark:text-gray-400'
            } ${activeId === item.id ? 'text-primary-600 dark:text-primary-400' : ''}`}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
