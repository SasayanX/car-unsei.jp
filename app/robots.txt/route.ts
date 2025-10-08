import { NextResponse } from "next/server"

export async function GET() {
  // HTTPSのURLを明示的に指定
  const baseUrl = "https://ie-unsei.jp"

  const robotsTxt = `User-agent: *
Allow: /

# サイトマップの場所（HTTPSのみ）
Sitemap: ${baseUrl}/sitemap.xml

# 不要なページをクロール対象外に
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# 検索エンジンに優先的にクロールしてもらいたいページ
Allow: /
Allow: /blog/
Allow: /faq/
Allow: /contact/`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
