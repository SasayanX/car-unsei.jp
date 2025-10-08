import type { MetadataRoute } from "next"
import { existingBlogPosts } from "@/data/existing-blog-posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://car-unsei.jp"
  const currentDate = new Date()

  // デバッグ情報をコンソールに出力
  console.log("=== サイトマップ生成デバッグ ===")
  console.log("ブログ記事総数:", existingBlogPosts.length)
  console.log("最新記事:", existingBlogPosts[0]?.title, existingBlogPosts[0]?.date)
  console.log("梅雨記事数:", existingBlogPosts.filter((post) => post.category === "車メンテナンス・梅雨対策").length)

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

  // ブログ記事を自動生成
  const blogPosts: MetadataRoute.Sitemap = existingBlogPosts.map((post) => {
    // 梅雨対策記事は優先度を高く設定
    const isRainySeasonPost = post.category === "車メンテナンス・梅雨対策"
    const priority = isRainySeasonPost ? 0.7 : 0.6

    console.log(`ブログ記事追加: /blog/${post.slug} (${post.date})`)

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority,
    }
  })

  console.log("サイトマップ総URL数:", staticPages.length + blogPosts.length)
  console.log("=== サイトマップ生成完了 ===")

  return [...staticPages, ...blogPosts]
}
