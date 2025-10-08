"use client"

import { useState, useEffect } from "react"

type ScreenSize = "mobile" | "tablet" | "desktop"

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("mobile")

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize("mobile")
      } else if (width < 1024) {
        setScreenSize("tablet")
      } else {
        setScreenSize("desktop")
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return {
    screenSize,
    isMobile: screenSize === "mobile",
    isTablet: screenSize === "tablet",
    isDesktop: screenSize === "desktop",
    showAffiliates: screenSize !== "mobile", // スマホ以外で表示
  }
}
