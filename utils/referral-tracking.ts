// 紹介システムの管理

export interface ReferralData {
  referrerCode: string
  referredUsers: string[]
  totalReferred: number
  rewards: string[]
  joinDate: number
}

export const referralTracking = {
  // 紹介コードから参加した場合の処理
  handleReferralJoin: (referralCode: string) => {
    if (typeof window === "undefined") return

    try {
      // 新規ユーザーの記録
      const userId = Date.now().toString()
      localStorage.setItem("user-id", userId)
      localStorage.setItem("referred-by", referralCode)

      // 紹介者にポイント付与（実際のシステムではサーバーサイドで処理）
      console.log(`User ${userId} joined via referral code: ${referralCode}`)

      // 紹介成功の通知
      setTimeout(() => {
        alert(`🎉 紹介コード「${referralCode}」で参加しました！\n文化創造の仲間入りです！`)
      }, 2000)
    } catch (error) {
      console.error("Referral tracking error:", error)
    }
  },

  // 紹介実績の更新
  updateReferralStats: (referrerCode: string) => {
    if (typeof window === "undefined") return

    try {
      const currentCount = Number.parseInt(localStorage.getItem("friends-referred") || "0")
      localStorage.setItem("friends-referred", (currentCount + 1).toString())

      // 報酬チェック
      const newCount = currentCount + 1
      if (newCount === 1) {
        alert("🎉 初回紹介達成！文化創造者バッジを獲得しました！")
      } else if (newCount === 3) {
        alert("⭐ 運勢マスター称号を獲得しました！")
      } else if (newCount === 5) {
        alert("🏆 バイラル達成賞を獲得しました！")
      } else if (newCount === 10) {
        alert("👑 文化大使に認定されました！")
      }
    } catch (error) {
      console.error("Referral stats update error:", error)
    }
  },

  // URLパラメータから紹介コードを取得
  getReferralCodeFromUrl: (): string | null => {
    if (typeof window === "undefined") return null

    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get("ref")
  },

  // 紹介統計の取得
  getReferralStats: () => {
    if (typeof window === "undefined") return { referred: 0, rewards: [] }

    const referred = Number.parseInt(localStorage.getItem("friends-referred") || "0")
    const rewards = []

    if (referred >= 1) rewards.push("文化創造者バッジ")
    if (referred >= 3) rewards.push("運勢マスター称号")
    if (referred >= 5) rewards.push("バイラル達成賞")
    if (referred >= 10) rewards.push("文化大使認定")

    return { referred, rewards }
  },
}
