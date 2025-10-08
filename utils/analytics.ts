// Google Analytics 4 設定

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// ページビュー追跡
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// イベント追跡
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 愛車診断特有のイベント
export const trackDiagnosis = (carNumber: string, score: number) => {
  event({
    action: "diagnosis_completed",
    category: "engagement",
    label: `score_${score}`,
    value: score,
  })
}

export const trackShare = (platform: string, score: number) => {
  event({
    action: "share",
    category: "social",
    label: platform,
    value: score,
  })
}

export const trackAdClick = (adPosition: string) => {
  event({
    action: "ad_click",
    category: "monetization",
    label: adPosition,
  })
}

// コンバージョン追跡
export const trackConversion = (type: "referral" | "favorite" | "pwa_install") => {
  event({
    action: "conversion",
    category: "engagement",
    label: type,
    value: 1,
  })
}
