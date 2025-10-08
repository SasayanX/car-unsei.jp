"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { existingBlogPosts } from "@/data/existing-blog-posts"

interface SearchResult {
  title: string
  slug: string
  excerpt: string
  category: string
}

export function SearchFunctionality() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const searchResults = existingBlogPosts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5)
      .map((post) => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || post.content.substring(0, 100) + "...",
        category: post.category,
      }))

    setResults(searchResults)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        setQuery("")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setIsOpen(true)} className="flex items-center gap-2">
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">検索</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          /
        </kbd>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
          <Card className="w-full max-w-2xl mx-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                  placeholder="記事を検索..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsOpen(false)
                    setQuery("")
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {results.length > 0 && (
                <div className="space-y-2">
                  {results.map((result) => (
                    <Link
                      key={result.slug}
                      href={`/blog/${result.slug}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setIsOpen(false)
                        setQuery("")
                      }}
                    >
                      <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">{result.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{result.excerpt}</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">{result.category}</div>
                    </Link>
                  ))}
                </div>
              )}

              {query.length >= 2 && results.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  「{query}」に関する記事が見つかりませんでした
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
