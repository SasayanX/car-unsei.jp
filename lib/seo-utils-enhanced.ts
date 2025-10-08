/**
 * 拡張SEOユーティリティ関数
 * パフォーマンス最適化、メタデータ生成、構造化データ管理
 */

import type { Metadata } from "next"

// SEO設定の型定義
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
  structuredData?: any[]
}

// メタデータ生成関数
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = "/images/og-image.png",
    noindex = false
  } = config

  const fullTitle = title.includes("|") ? title : `${title} | 愛車運勢診断`
  const fullDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      ...keywords,
      "愛車運勢診断",
      "ナンバープレート診断",
      "車の運勢",
      "数秘術",
      "81画理論"
    ],
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: canonical ? {
      canonical: canonical.startsWith("http") ? canonical : `https://car-unsei.jp${canonical}`
    } : undefined,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical ? (canonical.startsWith("http") ? canonical : `https://car-unsei.jp${canonical}`) : undefined,
      siteName: "愛車運勢診断",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `https://car-unsei.jp${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage.startsWith("http") ? ogImage : `https://car-unsei.jp${ogImage}`],
    },
  }
}

// ブログ記事用メタデータ生成
export function generateBlogMetadata(post: {
  title: string
  slug: string
  description: string
  date: string
  category: string
  keywords?: string[]
  image?: string
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.description,
    keywords: [
      ...(post.keywords || []),
      post.category,
      "ブログ",
      "記事"
    ],
    canonical: `/blog/${post.slug}`,
    ogImage: post.image || "/images/og-image.png"
  })
}

// ページ用メタデータ生成
export function generatePageMetadata(page: {
  title: string
  path: string
  description: string
  keywords?: string[]
}): Metadata {
  return generateMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: page.path,
  })
}

// キーワード最適化関数
export function optimizeKeywords(
  primary: string,
  secondary: string[] = [],
  longtail: string[] = []
): string[] {
  const baseKeywords = [
    primary,
    ...secondary,
    "愛車運勢診断",
    "ナンバープレート診断",
    "車の運勢",
    "数秘術",
    "81画理論"
  ]

  const optimizedKeywords = [...baseKeywords]
  
  // ロングテールキーワードを追加
  longtail.forEach(keyword => {
    if (!optimizedKeywords.some(k => k.includes(keyword))) {
      optimizedKeywords.push(keyword)
    }
  })

  // 重複削除と長さ制限
  return [...new Set(optimizedKeywords)]
    .filter(keyword => keyword.length <= 50)
    .slice(0, 20) // 最大20個
}

// 内部リンク生成ヘルパー
export function generateInternalLinks(links: Array<{
  url: string
  title: string
  description?: string
  rel?: "nofollow" | "sponsored"
}>) {
  return links.map(link => ({
    href: link.url,
    title: link.title,
    description: link.description,
    rel: link.rel
  }))
}

// パフォーマンス最適化関数
export function optimizeImages(src: string, width?: number, height?: number) {
  // Next.js Image コンポーネント用の最適化設定
  return {
    src,
    width: width || 800,
    height: height || 600,
    alt: "", // 必須で設定する必要がある
    loading: "lazy" as const,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw",
    quality: 85,
    placeholder: "blur" as const,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
  }
}

// 構造化データ検証
export function validateStructuredData(data: any): boolean {
  try {
    JSON.stringify(data)
    return true
  } catch {
    return false
  }
}

// メタディスクリプション最適化
export function optimizeDescription(description: string): string {
  const maxLength = 160
  const minLength = 120
  
  if (description.length <= maxLength && description.length >= minLength) {
    return description
  }
  
  if (description.length > maxLength) {
    return description.substring(0, maxLength - 3) + "..."
  }
  
  // 短すぎる場合は拡張
  const extensions = [
    "プロ監修の本格的な診断で、あなたの愛車の運勢を詳しく分析。",
    "81画理論と数秘術を組み合わせた革新的な診断システム。",
    "完全無料で利用できる愛車運勢・性格診断サービス。"
  ]
  
  const randomExtension = extensions[Math.floor(Math.random() * extensions.length)]
  return description + " " + randomExtension
}

// タイトル最適化
export function optimizeTitle(title: string, category?: string): string {
  const maxLength = 60
  const minLength = 30
  
  if (title.length <= maxLength && title.length >= minLength) {
    return title
  }
  
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "..."
  }
  
  // 短すぎる場合は拡張
  const extensions = {
    "ブログ": " | 愛車運勢診断ブログ",
    "診断": " | 愛車運勢診断",
    "運勢": " | プロ監修の運勢診断",
    "性格": " | 数秘術による性格分析"
  }
  
  const extension = category && extensions[category as keyof typeof extensions] 
    ? extensions[category as keyof typeof extensions]
    : " | 愛車運勢診断"
    
  return title + extension
}

// SEOスコア計算
export function calculateSEOScore(config: {
  title?: string
  description?: string
  headings?: { h1: number; h2: number; h3: number }
  internalLinks?: number
  imagesWithAlt?: number
  totalImages?: number
  wordCount?: number
  structuredData?: boolean
}): number {
  let score = 0
  
  // タイトル (15点)
  if (config.title) {
    if (config.title.length >= 30 && config.title.length <= 60) {
      score += 15
    } else if (config.title.length > 0) {
      score += 8
    }
  }
  
  // メタディスクリプション (15点)
  if (config.description) {
    if (config.description.length >= 120 && config.description.length <= 160) {
      score += 15
    } else if (config.description.length > 0) {
      score += 8
    }
  }
  
  // 見出し構造 (20点)
  if (config.headings) {
    if (config.headings.h1 === 1) score += 8
    if (config.headings.h2 >= 2) score += 7
    if (config.headings.h3 >= 1) score += 5
  }
  
  // 内部リンク (15点)
  if (config.internalLinks) {
    if (config.internalLinks >= 3) score += 15
    else if (config.internalLinks >= 1) score += 8
  }
  
  // 画像alt属性 (15点)
  if (config.imagesWithAlt !== undefined && config.totalImages !== undefined) {
    const ratio = config.imagesWithAlt / Math.max(config.totalImages, 1)
    if (ratio === 1) score += 15
    else if (ratio >= 0.8) score += 10
    else if (ratio >= 0.5) score += 5
  }
  
  // コンテンツ量 (10点)
  if (config.wordCount) {
    if (config.wordCount >= 300) score += 10
    else if (config.wordCount >= 150) score += 5
  }
  
  // 構造化データ (10点)
  if (config.structuredData) score += 10
  
  return Math.min(100, score)
}

// サイトマップURL生成
export function generateSitemapUrl(path: string): string {
  return `https://car-unsei.jp${path}`
}

// キャノニカルURL生成
export function generateCanonicalUrl(path: string): string {
  return `https://car-unsei.jp${path}`
}

// ロボット.txt設定生成
export function generateRobotsConfig(allowPaths: string[] = ["/"], disallowPaths: string[] = ["/api/", "/admin/"]) {
  return {
    rules: {
      userAgent: "*",
      allow: allowPaths,
      disallow: disallowPaths,
    },
    sitemap: "https://car-unsei.jp/sitemap.xml",
    host: "https://car-unsei.jp",
  }
}
