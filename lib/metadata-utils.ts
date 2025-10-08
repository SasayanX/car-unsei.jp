// メタデータユーティリティ関数

/**
 * ブログ記事用の標準メタデータを生成
 */
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  date?: string,
  imageUrl?: string,
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://car-unsei.jp"
  const url = `${baseUrl}/blog/${slug}`
  const ogImage = imageUrl || `${baseUrl}/images/og-default.png`

  return {
    title: `${title} | 愛車運勢・性格診断`,
    description,
    canonical: url, // 正規URLを設定
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | 愛車運勢・性格診断`,
      description,
      type: "article",
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: date,
      modifiedTime: date,
      siteName: "愛車運勢・性格診断",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 愛車運勢・性格診断`,
      description,
      images: [ogImage],
    },
  }
}

/**
 * 静的ページ用の標準メタデータを生成
 */
export function generatePageMetadata(title: string, description: string, path: string, imageUrl?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://car-unsei.jp"
  const url = `${baseUrl}${path}`
  const ogImage = imageUrl || `${baseUrl}/images/og-default.png`

  return {
    title: `${title} | 愛車運勢・性格診断`,
    description,
    canonical: url, // 正規URLを設定
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | 愛車運勢・性格診断`,
      description,
      type: "website",
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "愛車運勢・性格診断",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | 愛車運勢・性格診断`,
      description,
      images: [ogImage],
    },
  }
}
