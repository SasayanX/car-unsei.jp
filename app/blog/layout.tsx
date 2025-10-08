import type React from "react"
import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata-utils"

export const metadata: Metadata = generatePageMetadata(
  "ブログ | 愛車運勢チェッカー",
  "車のナンバープレートから運勢を診断する方法や、車に関する様々な情報を提供するブログです。",
  "/blog",
)

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto px-4 py-8">{children}</div>
}
