interface SkeletonProps {
  className?: string
  lines?: number
}

export default function Skeleton({ className = '', lines = 1 }: SkeletonProps) {
  if (lines === 1) {
    return <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${className}`} />
  }

  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse rounded bg-gray-200 dark:bg-gray-700 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          } ${className}`}
        />
      ))}
    </div>
  )
}

// Skeleton específico para cards de blog
export function BlogCardSkeleton() {
  return (
    <article className="group transform cursor-pointer transition-transform duration-200 hover:scale-105">
      <div className="h-48 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="space-y-3 p-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton lines={2} className="h-3" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </article>
  )
}

// Skeleton para posts
export function PostSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-64 w-full" />
      <div className="space-y-4">
        <Skeleton lines={3} className="h-4" />
        <Skeleton lines={2} className="h-4" />
        <Skeleton lines={4} className="h-4" />
      </div>
    </div>
  )
}
