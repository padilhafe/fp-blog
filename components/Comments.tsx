'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <div className="text-center">
          <button
            onClick={() => setLoadComments(true)}
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            💬 Carregar Comentários
          </button>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Os comentários são carregados sob demanda para melhorar a performance
          </p>
        </div>
      )}
    </>
  )
}
