'use client'

import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'
import Link from './Link'
import Image from './Image'

interface RelatedPostsProps {
  posts: CoreContent<Blog>[]
  currentPost: CoreContent<Blog>
  maxPosts?: number
}

export default function RelatedPosts({ posts, currentPost, maxPosts = 3 }: RelatedPostsProps) {
  // Encontrar posts relacionados baseado em tags
  const relatedPosts = posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const commonTags = post.tags?.filter((tag) => currentPost.tags?.includes(tag)) || []
      return { ...post, commonTagsCount: commonTags.length }
    })
    .filter((post) => post.commonTagsCount > 0)
    .sort((a, b) => b.commonTagsCount - a.commonTagsCount)
    .slice(0, maxPosts)

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
      <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Posts Relacionados
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/${post.path}`} className="block">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                {post.images && post.images.length > 0 ? (
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 h-48 w-full bg-gradient-to-br" />
                )}
              </div>
              <div className="mt-4">
                <h4 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-lg font-semibold text-gray-900 transition-colors dark:text-gray-100">
                  {post.title}
                </h4>
                {post.summary && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {post.summary}
                  </p>
                )}
                <div className="mt-3 flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <span>{post.tags[0]}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
