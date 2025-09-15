'use client'

interface ReadingTimeProps {
  content: string
  className?: string
}

export default function ReadingTime({ content, className = '' }: ReadingTimeProps) {
  // Função melhorada para calcular tempo de leitura
  const calculateReadingTime = (text: string) => {
    if (!text || text.trim().length === 0) {
      return '1 min de leitura'
    }

    // Remove markdown syntax e HTML tags
    const cleanText = text
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`[^`]*`/g, '') // Remove inline code
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*.*?\*\*/g, '') // Remove bold
      .replace(/\*.*?\*/g, '') // Remove italic
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim()

    // Conta palavras (considerando português)
    const words = cleanText.split(/\s+/).filter((word) => word.length > 0).length

    // Velocidade de leitura em português (mais conservadora)
    const wordsPerMinute = 180 // Palavras por minuto para português

    // Calcula minutos (mínimo 1 minuto)
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))

    return `${minutes} min de leitura`
  }

  const readingTime = calculateReadingTime(content)

  return (
    <div
      className={`flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{readingTime}</span>
    </div>
  )
}
