"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { getRelatedPosts } from "@/data/existing-blog-posts"

interface RelatedArticlesProps {
  currentSlug: string
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  // 実際に存在する記事から関連記事を取得
  const relatedArticles = getRelatedPosts(currentSlug, 3)

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-gray-100">
          <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          関連記事
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {relatedArticles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{article.category}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{article.readTime}</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center gap-1 mt-2 text-purple-600 dark:text-purple-400 text-sm font-medium">
                続きを読む
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
