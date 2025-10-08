// 超簡単な紹介システム（ローカルストレージベース）

export const simpleReferralTracking = {
  // 紹介コードから参加した場合の処理
  handleReferralJoin: (referralCode: string) => {
    if (typeof window === "undefined") return false

    try {
      // 既に参加済みかチェック
      const existingRef = localStorage.getItem("referred-by")
      if (existingRef) {
        console.log("Already referred by:", existingRef)
        return false
      }

      // 新規ユーザーの記録
      let userId = localStorage.getItem("user-id")
      if (!userId) {
        userId = Date.now().toString()
        localStorage.setItem("user-id", userId)
      }

      localStorage.setItem("referred-by", referralCode)

      console.log(`User ${userId} joined via referral code: ${referralCode}`)

      // 成功通知（少し遅延させて自然に）
      setTimeout(() => {
        alert(`🎉 紹介コード「${referralCode}」で参加しました！\n新しい日本文化の仲間入りです！`)
      }, 2000)

      // 紹介者の統計を更新（実際のアプリではサーバーサイドで処理）
      // ここでは簡易的にローカルで処理
      this.simulateReferrerReward(referralCode)

      return true
    } catch (error) {
      console.error("Referral tracking error:", error)
      return false
    }
  },

  // 紹介者への報酬シミュレーション
  simulateReferrerReward: (referralCode: string) => {
    // 実際のアプリでは、サーバーAPIを呼び出して紹介者の統計を更新
    // ここでは開発用に簡易シミュレーション
    console.log(`Referrer ${referralCode} should get a point!`)

    // デモ用: 自分が自分を紹介した場合のみローカルで更新
    const myStats = this.getReferralStats()
    if (referralCode === myStats.code) {
      this.updateReferralStats()
    }
  },

  // 紹介実績の更新
  updateReferralStats: () => {
    if (typeof window === "undefined") return 0

    try {
      const currentCount = Number.parseInt(localStorage.getItem("friends-referred") || "0")
      const newCount = currentCount + 1
      localStorage.setItem("friends-referred", newCount.toString())

      // 報酬通知
      setTimeout(() => {
        if (newCount === 1) {
          alert("🎉 初回紹介達成！\n「文化創造者」バッジを獲得しました！")
        } else if (newCount === 3) {
          alert("⭐ 3人紹介達成！\n「運勢マスター」称号を獲得しました！")
        } else if (newCount === 5) {
          alert("🏆 5人紹介達成！\n「バイラル達成」賞を獲得しました！")
        } else if (newCount === 10) {
          alert("👑 10人紹介達成！\n「文化大使」に認定されました！")
        } else {
          alert(`🎊 ${newCount}人目の紹介達成！\n文化拡散にご協力ありがとうございます！`)
        }
      }, 1000)

      return newCount
    } catch (error) {
      console.error("Referral stats update error:", error)
      return 0
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
    if (typeof window === "undefined") return { referred: 0, code: "" }

    const referred = Number.parseInt(localStorage.getItem("friends-referred") || "0")
    let userId = localStorage.getItem("user-id")

    if (!userId) {
      userId = Date.now().toString()
      localStorage.setItem("user-id", userId)
    }

    const code = `SUMAI${userId.slice(-6).toUpperCase()}`

    return { referred, code }
  },

  // 紹介履歴の取得（将来の拡張用）
  getReferralHistory: () => {
    if (typeof window === "undefined") return []

    try {
      const history = localStorage.getItem("referral-history")
      return history ? JSON.parse(history) : []
    } catch (error) {
      console.error("Get referral history error:", error)
      return []
    }
  },

  // デバッグ用: 統計をリセット
  resetStats: () => {
    if (typeof window === "undefined") return

    localStorage.removeItem("friends-referred")
    localStorage.removeItem("referred-by")
    localStorage.removeItem("referral-history")
    console.log("Referral stats reset")
  },
}
