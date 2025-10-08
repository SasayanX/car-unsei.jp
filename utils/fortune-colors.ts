// 運勢タイプごとの色設定を統一管理
export const getFortuneTypeColor = (type: string) => {
  switch (type) {
    case "大吉":
      return {
        bg: "bg-red-100",
        text: "text-red-800",
        border: "border-red-300",
        full: "bg-red-100 text-red-800 border-red-300",
      }
    case "中吉":
      return {
        bg: "bg-pink-200",
        text: "text-pink-900",
        border: "border-pink-400",
        full: "bg-pink-200 text-pink-900 border-pink-400",
      }
    case "吉":
      return {
        bg: "bg-pink-100",
        text: "text-pink-700",
        border: "border-pink-300",
        full: "bg-pink-100 text-pink-700 border-pink-300",
      }
    case "中凶":
      return {
        bg: "bg-gray-300",
        text: "text-gray-800",
        border: "border-gray-400",
        full: "bg-gray-300 text-gray-800 border-gray-400",
      }
    case "凶":
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        border: "border-gray-300",
        full: "bg-gray-100 text-gray-600 border-gray-300",
      }
    case "大凶":
      return {
        bg: "bg-gray-800",
        text: "text-white",
        border: "border-gray-900",
        full: "bg-gray-800 text-white border-gray-900",
      }
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-800",
        border: "border-gray-300",
        full: "bg-gray-100 text-gray-800 border-gray-300",
      }
  }
}

// 運勢タイプの絵文字を取得
export const getFortuneEmoji = (type: string) => {
  switch (type) {
    case "大吉":
      return "🌟"
    case "中吉":
      return "✨"
    case "吉":
      return "⭐"
    case "中凶":
      return "⚠️"
    case "凶":
      return "⛈️"
    case "大凶":
      return "💥"
    default:
      return "❓"
  }
}

// 点数に基づく色分け
export const getScoreColor = (score: number) => {
  if (score >= 90) {
    return {
      bg: "bg-purple-100",
      text: "text-purple-800",
      border: "border-purple-300",
      full: "bg-purple-100 text-purple-800 border-purple-300",
    }
  } else if (score >= 80) {
    return {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-300",
      full: "bg-red-100 text-red-800 border-red-300",
    }
  } else if (score >= 70) {
    return {
      bg: "bg-pink-200",
      text: "text-pink-900",
      border: "border-pink-400",
      full: "bg-pink-200 text-pink-900 border-pink-400",
    }
  } else if (score >= 60) {
    return {
      bg: "bg-pink-100",
      text: "text-pink-700",
      border: "border-pink-300",
      full: "bg-pink-100 text-pink-700 border-pink-300",
    }
  } else if (score >= 50) {
    return {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-300",
      full: "bg-yellow-100 text-yellow-700 border-yellow-300",
    }
  } else if (score >= 40) {
    return {
      bg: "bg-gray-300",
      text: "text-gray-800",
      border: "border-gray-400",
      full: "bg-gray-300 text-gray-800 border-gray-400",
    }
  } else if (score >= 30) {
    return {
      bg: "bg-gray-100",
      text: "text-gray-600",
      border: "border-gray-300",
      full: "bg-gray-100 text-gray-600 border-gray-300",
    }
  } else {
    return {
      bg: "bg-gray-800",
      text: "text-white",
      border: "border-gray-900",
      full: "bg-gray-800 text-white border-gray-900",
    }
  }
}
