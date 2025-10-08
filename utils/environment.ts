// 環境判定とフィーチャーフラグ管理

export const Environment = {
  // 現在の環境
  current: process.env.NODE_ENV || "development",

  // 本番環境かどうか
  isProduction: process.env.NODE_ENV === "production",

  // 開発環境かどうか
  isDevelopment: process.env.NODE_ENV === "development",

  // ステージング環境かどうか
  isStaging: process.env.VERCEL_ENV === "preview",

  // 開発者モードが有効かどうか
  isDeveloperMode(): boolean {
    if (typeof window === "undefined") return false
    return this.isDevelopment || localStorage.getItem("dev-mode") === "true"
  },

  // フィーチャーフラグ
  features: {
    // AdSense広告表示
    showAds: process.env.NODE_ENV === "production",

    // 開発者パネル表示
    showDevPanel(): boolean {
      return Environment.isDeveloperMode()
    },

    // 分析ツール有効化
    enableAnalytics: process.env.NODE_ENV === "production",

    // デバッグ情報表示
    showDebugInfo: process.env.NODE_ENV !== "production",

    // 実験的機能
    enableExperimentalFeatures: process.env.NODE_ENV === "development",
  },
}

// 本番環境での収益化戦略
export const MonetizationStrategy = {
  // 段階的な収益化展開
  phases: {
    // Phase 1: ユーザー獲得重視（広告なし）
    userAcquisition: {
      showAds: false,
      focusOnGrowth: true,
      duration: "最初の3ヶ月",
    },

    // Phase 2: 軽微な収益化開始
    softMonetization: {
      showAds: true,
      adDensity: "低",
      userExperienceFirst: true,
      duration: "3-6ヶ月目",
    },

    // Phase 3: 本格的な収益化
    fullMonetization: {
      showAds: true,
      adDensity: "最適化",
      affiliatePrograms: true,
      premiumFeatures: true,
      duration: "6ヶ月目以降",
    },
  },

  // 現在のフェーズ判定
  getCurrentPhase(): string {
    // 実際のローンチ日からの経過日数で判定
    const launchDate = new Date("2024-01-01") // 実際のローンチ日に変更
    const now = new Date()
    const daysSinceLaunch = Math.floor((now.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceLaunch < 90) return "userAcquisition"
    if (daysSinceLaunch < 180) return "softMonetization"
    return "fullMonetization"
  },
}
