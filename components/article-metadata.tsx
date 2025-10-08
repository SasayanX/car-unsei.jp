"use client"

import { Clock, Calendar, User, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArticleMetadataProps {
  publishDate: string
  readTime: string
  author?: string
  category: string
  lastModified?: string
  wordCount?: number
}

export function ArticleMetadata({
  publishDate,
  readTime,
  author = "車運勢チェッカー編集部",
  category,
  lastModified,
  wordCount,
}: ArticleMetadataProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Calendar className="w-4 h-4" />
        <time dateTime={publishDate}>{formatDate(publishDate)}</time>
      </div>

      {lastModified && lastModified !== publishDate && (
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>更新:</span>
          <time dateTime={lastModified}>{formatDate(lastModified)}</time>
        </div>
      )}

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Clock className="w-4 h-4" />
        <span>{readTime}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <User className="w-4 h-4" />
        <span>{author}</span>
      </div>

      <div className="flex items-center gap-2">
        <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <Badge variant="secondary">{category}</Badge>
      </div>

      {wordCount && (
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>{wordCount.toLocaleString()}文字</span>
        </div>
      )}

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            datePublished: publishDate,
            dateModified: lastModified || publishDate,
            author: {
              "@type": "Person",
              name: author,
            },
            wordCount: wordCount,
          }),
        }}
      />
    </div>
  )
}
