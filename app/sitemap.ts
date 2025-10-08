import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://car-unsei.jp"
  const currentDate = new Date()

  // ブログディレクトリから実際のページを取得
  const blogDir = path.join(process.cwd(), "app", "blog")
  let blogSlugs: string[] = []
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    blogSlugs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  } catch (error) {
    console.error("ブログディレクトリの読み込みエラー:", error)
  }

  // デバッグ情報をコンソールに出力
  console.log("=== サイトマップ生成デバッグ ===")
  console.log("ブログ記事総数:", blogSlugs.length)
  console.log("検出された記事:", blogSlugs.slice(0, 5).join(", "), "...")

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // ブログ記事を自動生成（ファイルシステムから）
  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => {
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }
  })

  console.log("サイトマップ総URL数:", staticPages.length + blogPosts.length)
  console.log("=== サイトマップ生成完了 ===")

  return [...staticPages, ...blogPosts]
}
