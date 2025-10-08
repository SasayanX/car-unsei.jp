import { existingBlogPosts } from "@/data/existing-blog-posts"

export interface SitemapUrl {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

export function generateSitemapXml(urls: SitemapUrl[], baseUrl: string): string {
  const urlEntries = urls
    .map(({ url, lastModified, changeFrequency, priority }) => {
      const fullUrl = `${baseUrl}${url}`
      const lastMod = lastModified || new Date().toISOString().split("T")[0]

      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFrequency || "weekly"}</changefreq>
    <priority>${priority || 0.5}</priority>
  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

// ブログURLを生成（existing-blog-posts.tsから自動取得）
function getBlogUrls(): SitemapUrl[] {
  return existingBlogPosts.map(({ slug, date }) => ({
    url: `/blog/${slug}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
}

export function getSiteUrls(): SitemapUrl[] {
  const currentDate = new Date().toISOString().split("T")[0]

  // 静的ページ
  const staticUrls: SitemapUrl[] = [
    {
      url: "/",
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "/blog",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "/faq",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/contact",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "/privacy",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "/terms",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "/disclaimer",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "/about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // ブログ記事を自動取得
  const blogUrls = getBlogUrls()

  return [...staticUrls, ...blogUrls]
}

// デバッグ用：現在のサイトマップ内容を確認
export function debugSitemap(): void {
  console.log("=== サイトマップデバッグ情報 ===")
  console.log("ブログ記事数:", existingBlogPosts.length)
  console.log("最新記事:", existingBlogPosts[0]?.title, existingBlogPosts[0]?.date)

  const blogUrls = getBlogUrls()
  console.log("ブログURL数:", blogUrls.length)
  console.log("最新ブログURL:", blogUrls[0])

  const allUrls = getSiteUrls()
  console.log("総URL数:", allUrls.length)
  console.log("ブログ記事URL一覧:")
  blogUrls.forEach((url) => {
    console.log(`- ${url.url} (${url.lastModified})`)
  })
}
