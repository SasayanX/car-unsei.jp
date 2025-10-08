"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function CanonicalUrlFixer() {
  const pathname = usePathname()

  useEffect(() => {
    // 既存のcanonicalタグを確認・修正
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    const correctUrl = `https://car-unsei.jp${pathname}`

    if (existingCanonical) {
      const currentHref = existingCanonical.getAttribute("href")
      if (currentHref !== correctUrl) {
        console.log(`Canonical URL修正: ${currentHref} → ${correctUrl}`)
        existingCanonical.setAttribute("href", correctUrl)
      }
    } else {
      // canonicalタグが存在しない場合は追加
      const link = document.createElement("link")
      link.rel = "canonical"
      link.href = correctUrl
      document.head.appendChild(link)
      console.log(`Canonical URL追加: ${correctUrl}`)
    }

    // 重複するcanonicalタグを削除
    const allCanonicals = document.querySelectorAll('link[rel="canonical"]')
    if (allCanonicals.length > 1) {
      for (let i = 1; i < allCanonicals.length; i++) {
        allCanonicals[i].remove()
      }
      console.log(`重複するcanonicalタグを${allCanonicals.length - 1}個削除`)
    }
  }, [pathname])

  return null
}
