import type { Metadata } from "next"
import { SEOPerformanceMonitor } from "@/components/seo-performance-monitor"
import { RelatedArticlesEnhanced } from "@/components/related-articles-enhanced"

export const metadata: Metadata = {
  title: "ナンバープレート診断ブログ",
  description: "ナンバープレート診断に関する最新情報、体験談、運勢アップのコツをお届けします。車選び、買い替え、ナンバー選びの参考に。",
  keywords: "ナンバープレート診断,ブログ,体験談,車選び,買い替え,愛車運勢,数秘術,占い,F1,レーシング",
  openGraph: {
    title: "ナンバープレート診断ブログ | 愛車運勢診断",
    description: "ナンバープレート診断に関する最新情報、体験談、運勢アップのコツをお届けします。",
    url: "https://car-unsei.jp/blog",
    images: [
      {
        url: "https://car-unsei.jp/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ナンバープレート診断ブログ",
      },
    ],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      
      {/* SEO最適化コンポーネント */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 関連記事の強化 */}
        <RelatedArticlesEnhanced 
          currentSlug="blog-index"
          currentCategory="ブログ"
          limit={6}
        />
        
        {/* SEOパフォーマンス監視（開発モードのみ） */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8">
            <SEOPerformanceMonitor />
          </div>
        )}
      </div>
    </>
  )
}