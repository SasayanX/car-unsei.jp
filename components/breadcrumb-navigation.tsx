"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function BreadcrumbNavigation() {
  const pathname = usePathname()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: "ホーム", href: "/" }]

    let currentPath = ""
    paths.forEach((path, index) => {
      currentPath += `/${path}`

      if (path === "blog") {
        breadcrumbs.push({ label: "ブログ", href: "/blog" })
      } else if (paths[0] === "blog" && index === 1) {
        // ブログ記事の場合、タイトルを取得（実際の実装では記事データから取得）
        const articleTitle = getArticleTitle(path)
        breadcrumbs.push({ label: articleTitle, href: currentPath })
      } else {
        // その他のページ
        const label = getPageLabel(path)
        breadcrumbs.push({ label, href: currentPath })
      }
    })

    return breadcrumbs
  }

  const getArticleTitle = (slug: string): string => {
    // 実際の記事タイトルを取得（簡略化）
    const titleMap: Record<string, string> = {
      "rainy-season-wiper-maintenance": "ワイパーゴムの点検と交換タイミング",
      "rainy-season-car-humidity-prevention": "梅雨時期の車内湿気・カビ対策完全ガイド",
      "sports-players-numbers": "活躍するF1ドライバーとゼッケン番号の吉凶関係",
      // 他の記事も追加可能
    }
    return titleMap[slug] || "記事"
  }

  const getPageLabel = (path: string): string => {
    const labelMap: Record<string, string> = {
      faq: "よくある質問",
      contact: "お問い合わせ",
      about: "サイトについて",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      disclaimer: "免責事項",
    }
    return labelMap[path] || path
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <nav aria-label="パンくずリスト" className="py-2 px-4 text-sm">
      <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {item.label}
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
              </>
            ) : (
              <span className="text-gray-800 dark:text-gray-200 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>

      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: `https://car-unsei.jp${item.href}`,
            })),
          }),
        }}
      />
    </nav>
  )
}
