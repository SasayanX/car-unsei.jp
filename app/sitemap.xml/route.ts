import { NextResponse } from "next/server"
import { generateSitemapXml, getSiteUrls } from "@/utils/sitemap-generator"

export async function GET() {
  try {
    // 本番環境のベースURLを設定（環境変数から取得）
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ie-unsei.jp"

    // サイトのURL一覧を取得
    const urls = getSiteUrls()

    // XMLサイトマップを生成
    const sitemapXml = generateSitemapXml(urls, baseUrl)

    return new NextResponse(sitemapXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    })
  } catch (error) {
    console.error("Sitemap generation error:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
