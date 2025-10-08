// SEO関連のユーティリティ関数

/**
 * 正規URLを生成
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = "https://car-unsei.jp"
  // パスの正規化
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

/**
 * サイトマップ用のURL生成
 */
export function generateSitemapUrl(
  path: string,
  lastModified?: Date,
): {
  url: string
  lastModified: Date
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority: number
} {
  const url = generateCanonicalUrl(path)

  // パスに基づいて優先度と更新頻度を決定
  let priority = 0.5
  let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly"

  if (path === "/") {
    priority = 1.0
    changeFrequency = "daily"
  } else if (path.startsWith("/blog/")) {
    priority = 0.7
    changeFrequency = "weekly"
  } else if (path === "/blog") {
    priority = 0.8
    changeFrequency = "weekly"
  }

  return {
    url,
    lastModified: lastModified || new Date(),
    changeFrequency,
    priority,
  }
}

/**
 * 重複コンテンツチェック
 */
export function checkDuplicateContent(content: string, existingContents: string[]): boolean {
  const similarity = existingContents.some((existing) => {
    const words1 = content.toLowerCase().split(/\s+/)
    const words2 = existing.toLowerCase().split(/\s+/)
    const commonWords = words1.filter((word) => words2.includes(word))
    return commonWords.length / Math.max(words1.length, words2.length) > 0.8
  })

  return similarity
}

/**
 * メタデータの検証
 */
export function validateMetadata(metadata: {
  title?: string
  description?: string
  canonical?: string
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!metadata.title) {
    errors.push("タイトルが設定されていません")
  } else if (metadata.title.length < 30 || metadata.title.length > 60) {
    errors.push("タイトルは30-60文字で設定してください")
  }

  if (!metadata.description) {
    errors.push("メタディスクリプションが設定されていません")
  } else if (metadata.description.length < 120 || metadata.description.length > 160) {
    errors.push("メタディスクリプションは120-160文字で設定してください")
  }

  if (metadata.canonical && !metadata.canonical.startsWith("https://car-unsei.jp")) {
    errors.push("Canonical URLが正しくありません")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
