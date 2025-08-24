'use client'

import { useState } from 'react'

export default function CopyPix({ pixKey }: { pixKey: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy Pix key:', error)
    }
  }

  return (
    <div className="mt-3 flex items-center gap-3">
      <code className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">{pixKey}</code>
      <button
        onClick={copy}
        className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        aria-label="Copiar chave Pix"
      >
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}
