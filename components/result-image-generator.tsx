"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Instagram, Twitter } from "lucide-react"

interface ResultImageGeneratorProps {
  carNumber: string
  analysis: any
  onImageGenerated?: (imageUrl: string) => void
}

export function ResultImageGenerator({ carNumber, analysis, onImageGenerated }: ResultImageGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateImage = async () => {
    if (!canvasRef.current || !analysis) return

    setIsGenerating(true)
    setError(null)

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setError("Canvas context not supported")
      setIsGenerating(false)
      return
    }

    try {
      console.log("画像生成開始:", { carNumber, analysis })
      canvas.width = 1080
      canvas.height = 1080

      const totalScore = analysis.weightedScore || analysis.totalScore || analysis.score || 0
      console.log("スコア:", totalScore)
      const scoreTheme = getScoreTheme(totalScore)

      // スコア別背景デザイン
      drawBackground(ctx, canvas, scoreTheme, totalScore)

      // スコア別装飾
      drawDecorations(ctx, canvas, scoreTheme, totalScore)

      // メインタイトル（スコア別スタイル）
      drawTitle(ctx, canvas, scoreTheme)

      // ナンバープレート（スコア別デザイン）
      drawNumberPlate(ctx, canvas, carNumber, scoreTheme)

      // スコア表示（スコア別エフェクト）
      drawScore(ctx, canvas, totalScore, scoreTheme)

      // 運勢コメント
      drawComment(ctx, canvas, totalScore, scoreTheme)

      // 詳細情報
      drawDetails(ctx, canvas, analysis, scoreTheme)

      // フッター情報
      drawFooter(ctx, canvas, scoreTheme)

      const dataUrl = canvas.toDataURL("image/png", 0.9)
      console.log("画像生成完了")
      setImageUrl(dataUrl)
      onImageGenerated?.(dataUrl)
    } catch (error) {
      console.error("画像生成エラー:", error)
      setError("画像生成中にエラーが発生しました")
    } finally {
      setIsGenerating(false)
    }
  }

  const getScoreTheme = (score: number) => {
    if (score >= 95)
      return {
        name: "神域級",
        bgColors: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"], // 正しい虹色
        plateColor: "#000000",
        plateTextColor: "#FFD700",
        textColor: "#FFFFFF",
        accentColor: "#FFD700",
        decorations: "rainbow",
        emoji: "👑",
        pattern: "divine",
      }
    if (score >= 85)
      return {
        name: "最高級",
        bgColors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
        plateColor: "#FFFFFF",
        plateTextColor: "#2C3E50",
        textColor: "#FFFFFF",
        accentColor: "#FF6B6B",
        decorations: "stars",
        emoji: "⭐",
        pattern: "excellent",
      }
    if (score >= 70)
      return {
        name: "良好",
        bgColors: ["#74B9FF", "#0984E3", "#6C5CE7", "#A29BFE"],
        plateColor: "#FFFFFF",
        plateTextColor: "#2D3436",
        textColor: "#FFFFFF",
        accentColor: "#74B9FF",
        decorations: "circles",
        emoji: "😊",
        pattern: "good",
      }
    if (score >= 50)
      return {
        name: "普通",
        bgColors: ["#55A3FF", "#48CAE4", "#90E0EF", "#CAF0F8"],
        plateColor: "#FFFFFF",
        plateTextColor: "#023047",
        textColor: "#FFFFFF",
        accentColor: "#55A3FF",
        decorations: "waves",
        emoji: "👍",
        pattern: "normal",
      }
    return {
      name: "要注意",
      bgColors: ["#FFA726", "#FF7043", "#8D6E63", "#A1887F"],
      plateColor: "#FFFFFF",
      plateTextColor: "#3E2723",
      textColor: "#FFFFFF",
      accentColor: "#FFA726",
      decorations: "triangles",
      emoji: "⚠️",
      pattern: "caution",
    }
  }

  const drawBackground = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, theme: any, score: number) => {
    if (score >= 95) {
      // 神域級：美しい虹色放射状グラデーション
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )

      // 正しい虹色の順序で美しいグラデーション
      gradient.addColorStop(0, "#FFD700") // 中心は金色
      gradient.addColorStop(0.15, "#FF0000") // 赤
      gradient.addColorStop(0.3, "#FF7F00") // オレンジ
      gradient.addColorStop(0.45, "#FFFF00") // 黄
      gradient.addColorStop(0.6, "#00FF00") // 緑
      gradient.addColorStop(0.75, "#0000FF") // 青
      gradient.addColorStop(0.9, "#4B0082") // 藍
      gradient.addColorStop(1, "#9400D3") // 紫

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 美しい光の輪エフェクト
      for (let i = 0; i < 7; i++) {
        const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]
        ctx.globalAlpha = 0.08
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 150 + i * 60, 0, 2 * Math.PI)
        ctx.strokeStyle = rainbowColors[i]
        ctx.lineWidth = 15
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      // キラキラエフェクト
      ctx.globalAlpha = 0.6
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 8 + 4

        ctx.fillStyle = "#FFFFFF"
        ctx.beginPath()
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fill()

        // 十字の光
        ctx.fillRect(x - size * 2, y - 1, size * 4, 2)
        ctx.fillRect(x - 1, y - size * 2, 2, size * 4)
      }
      ctx.globalAlpha = 1
    } else {
      // 通常のグラデーション
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      theme.bgColors.forEach((color: string, index: number) => {
        gradient.addColorStop(index / (theme.bgColors.length - 1), color)
      })
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }

  const drawDecorations = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, theme: any, score: number) => {
    ctx.globalAlpha = 0.15

    if (theme.decorations === "rainbow") {
      // 美しい虹色の装飾
      const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]

      // 虹色の円
      for (let i = 0; i < 35; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 40 + 20
        const colorIndex = i % rainbowColors.length

        ctx.fillStyle = rainbowColors[colorIndex]
        ctx.beginPath()
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.fill()
      }

      // 虹色の星
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 25 + 15
        const colorIndex = i % rainbowColors.length

        drawStar(ctx, x, y, size, rainbowColors[colorIndex])
      }
    } else if (theme.decorations === "stars") {
      // 星の装飾
      for (let i = 0; i < 20; i++) {
        drawStar(
          ctx,
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 30 + 15,
          theme.accentColor,
        )
      }
    } else if (theme.decorations === "circles") {
      // 円の装飾
      for (let i = 0; i < 15; i++) {
        ctx.beginPath()
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 80 + 40, 0, 2 * Math.PI)
        ctx.fillStyle = theme.accentColor
        ctx.fill()
      }
    } else if (theme.decorations === "waves") {
      // 波の装飾
      ctx.strokeStyle = theme.accentColor
      ctx.lineWidth = 5
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * 135)
        for (let x = 0; x < canvas.width; x += 20) {
          ctx.lineTo(x, i * 135 + Math.sin(x * 0.01) * 30)
        }
        ctx.stroke()
      }
    } else if (theme.decorations === "triangles") {
      // 三角形の装飾
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 60 + 30

        ctx.fillStyle = theme.accentColor
        ctx.beginPath()
        ctx.moveTo(x, y - size)
        ctx.lineTo(x - size, y + size)
        ctx.lineTo(x + size, y + size)
        ctx.closePath()
        ctx.fill()
      }
    }

    ctx.globalAlpha = 1
  }

  const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    ctx.fillStyle = color
    ctx.beginPath()
    for (let i = 0; i < 5; i++) {
      const angle = ((i * 144 - 90) * Math.PI) / 180
      const x1 = x + Math.cos(angle) * size
      const y1 = y + Math.sin(angle) * size
      if (i === 0) ctx.moveTo(x1, y1)
      else ctx.lineTo(x1, y1)
    }
    ctx.closePath()
    ctx.fill()
  }

  const drawTitle = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, theme: any) => {
    ctx.fillStyle = theme.textColor
    ctx.font = "bold 72px Arial, sans-serif"
    ctx.textAlign = "center"

    // 神域級の場合は特別なエフェクト
    if (theme.name === "神域級") {
      ctx.shadowColor = "#FFD700"
      ctx.shadowBlur = 20
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 4
      ctx.strokeText("愛車運勢チェッカー", canvas.width / 2, 150)
    } else {
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 3
      ctx.strokeText("愛車運勢チェッカー", canvas.width / 2, 150)
    }

    ctx.fillText("愛車運勢チェッカー", canvas.width / 2, 150)
    ctx.shadowBlur = 0
  }

  const drawNumberPlate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, carNumber: string, theme: any) => {
    const plateX = canvas.width / 2 - 200
    const plateY = 200
    const plateWidth = 400
    const plateHeight = 120

    // 神域級の場合は特別なプレートデザイン
    if (theme.name === "神域級") {
      // 虹色の枠
      const gradient = ctx.createLinearGradient(plateX, plateY, plateX + plateWidth, plateY + plateHeight)
      gradient.addColorStop(0, "#FF0000")
      gradient.addColorStop(0.16, "#FF7F00")
      gradient.addColorStop(0.33, "#FFFF00")
      gradient.addColorStop(0.5, "#00FF00")
      gradient.addColorStop(0.66, "#0000FF")
      gradient.addColorStop(0.83, "#4B0082")
      gradient.addColorStop(1, "#9400D3")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 8
      ctx.strokeRect(plateX, plateY, plateWidth, plateHeight)

      // 黒い背景
      ctx.fillStyle = "#000000"
      ctx.fillRect(plateX + 4, plateY + 4, plateWidth - 8, plateHeight - 8)
    } else {
      // 通常のプレート
      ctx.fillStyle = theme.plateColor
      ctx.fillRect(plateX, plateY, plateWidth, plateHeight)
      ctx.strokeStyle = theme.plateTextColor
      ctx.lineWidth = 6
      ctx.strokeRect(plateX, plateY, plateWidth, plateHeight)
    }

    // ナンバー表示
    ctx.fillStyle = theme.plateTextColor
    ctx.font = "bold 48px Arial, sans-serif"
    ctx.textAlign = "center"

    if (theme.name === "神域級") {
      ctx.shadowColor = "#FFD700"
      ctx.shadowBlur = 10
    }

    ctx.fillText(carNumber, canvas.width / 2, plateY + 75)
    ctx.shadowBlur = 0
  }

  const drawScore = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, score: number, theme: any) => {
    // スコア背景円（テーマ別）
    if (theme.name === "神域級") {
      // 虹色の背景円
      const gradient = ctx.createRadialGradient(canvas.width / 2, 480, 0, canvas.width / 2, 480, 120)
      gradient.addColorStop(0, "#FFD700")
      gradient.addColorStop(0.3, "#FF0000")
      gradient.addColorStop(0.6, "#00FF00")
      gradient.addColorStop(1, "#9400D3")
      ctx.fillStyle = gradient
    } else {
      ctx.fillStyle = theme.accentColor
    }

    ctx.globalAlpha = 0.3
    ctx.beginPath()
    ctx.arc(canvas.width / 2, 480, 120, 0, 2 * Math.PI)
    ctx.fill()
    ctx.globalAlpha = 1

    // スコア表示
    ctx.fillStyle = theme.textColor
    ctx.font = "bold 120px Arial, sans-serif"
    ctx.textAlign = "center"

    if (theme.name === "神域級") {
      ctx.shadowColor = "#FFD700"
      ctx.shadowBlur = 15
    }

    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 4
    ctx.strokeText(`${score}`, canvas.width / 2, 500)
    ctx.fillText(`${score}`, canvas.width / 2, 500)

    ctx.font = "bold 48px Arial, sans-serif"
    ctx.strokeText("点", canvas.width / 2, 570)
    ctx.fillText("点", canvas.width / 2, 570)
    ctx.shadowBlur = 0

    // エモジ表示
    ctx.font = "60px Arial, sans-serif"
    ctx.fillText(theme.emoji, canvas.width / 2 + 150, 480)
  }

  const drawComment = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, score: number, theme: any) => {
    const comment = getScoreComment(score)
    ctx.fillStyle = theme.textColor
    ctx.font = "bold 42px Arial, sans-serif"
    ctx.textAlign = "center"

    if (theme.name === "神域級") {
      ctx.shadowColor = "#FFD700"
      ctx.shadowBlur = 10
    }

    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 2
    ctx.strokeText(comment, canvas.width / 2, 650)
    ctx.fillText(comment, canvas.width / 2, 650)
    ctx.shadowBlur = 0
  }

  const drawDetails = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, analysis: any, theme: any) => {
    ctx.font = "32px Arial, sans-serif"
    ctx.fillStyle = theme.textColor
    ctx.textAlign = "center"

    const details = getAnalysisDetails(analysis)
    const startY = 750
    details.forEach((detail, index) => {
      const y = startY + Math.floor(index / 2) * 50
      const x = index % 2 === 0 ? canvas.width / 2 - 150 : canvas.width / 2 + 150
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 1
      ctx.strokeText(detail, x, y)
      ctx.fillText(detail, x, y)
    })
  }

  const drawFooter = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, theme: any) => {
    ctx.fillStyle = theme.textColor
    ctx.textAlign = "center"

    // サイトURL
    ctx.font = "28px Arial, sans-serif"
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 1
    ctx.strokeText("car-unsei.jp", canvas.width / 2, 950)
    ctx.fillText("car-unsei.jp", canvas.width / 2, 950)

    // ハッシュタグ
    ctx.font = "24px Arial, sans-serif"
    ctx.strokeText("#愛車運勢チェッカー #ナンバープレート診断 #車好き", canvas.width / 2, 1000)
    ctx.fillText("#愛車運勢チェッカー #ナンバープレート診断 #車好き", canvas.width / 2, 1000)
  }

  const getAnalysisDetails = (analysis: any): string[] => {
    const details: string[] = []
    try {
      if (analysis.scores) {
        if (analysis.scores.wealth !== undefined) details.push(`金運: ${analysis.scores.wealth}点`)
        if (analysis.scores.safety !== undefined) details.push(`安全: ${analysis.scores.safety}点`)
        if (analysis.scores.success !== undefined) details.push(`成功: ${analysis.scores.success}点`)
        if (analysis.scores.relationships !== undefined) details.push(`人間関係: ${analysis.scores.relationships}点`)
      } else if (analysis.individualAnalysis && analysis.individualAnalysis.length > 0) {
        // 個別分析から情報を取得
        analysis.individualAnalysis.slice(0, 4).forEach((item: any) => {
          if (item.type && item.score !== undefined) {
            details.push(`${item.type}: ${item.score}点`)
          }
        })
      } else {
        details.push(`総合運勢: ${analysis.weightedScore || analysis.totalScore || analysis.score || 0}点`)
        if (analysis.fortuneItems && analysis.fortuneItems.length > 0) {
          details.push(`特徴: ${analysis.fortuneItems[0].name}`)
        }
      }
    } catch (error) {
      console.error("詳細情報取得エラー:", error)
      details.push(`総合運勢: ${analysis.weightedScore || 0}点`)
    }
    return details.length > 0 ? details : ["総合運勢: 分析完了"]
  }

  const getScoreComment = (score: number): string => {
    if (score >= 95) return "👑 神域級の運勢！"
    if (score >= 85) return "⭐ 最高の運勢！"
    if (score >= 70) return "😊 とても良い運勢"
    if (score >= 50) return "👍 良い運勢"
    return "⚠️ 要注意の運勢"
  }

  const downloadImage = () => {
    if (!imageUrl) return
    const link = document.createElement("a")
    link.download = `愛車運勢_${carNumber}_${analysis.weightedScore || analysis.totalScore || analysis.score || 0}点.png`
    link.href = imageUrl
    link.click()
  }

  const shareToTwitter = () => {
    const totalScore = analysis.weightedScore || analysis.totalScore || analysis.score || 0
    const text = `🚗 私の愛車「${carNumber}」の運勢は${totalScore}点でした！

${getScoreComment(totalScore)}

みんなも愛車の運勢をチェックしてみて！
#愛車運勢チェッカー #ナンバープレート診断 #車好き #運勢診断

👇 無料で診断
${window.location.origin}`

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const shareToInstagram = () => {
    const totalScore = analysis.weightedScore || analysis.totalScore || analysis.score || 0
    const text = `🚗✨ 愛車運勢チェッカーで診断してみました！

📍 ナンバー: ${carNumber}
⭐ 運勢スコア: ${totalScore}点
${getScoreComment(totalScore)}

意外と当たってる！😲
みんなもやってみて〜

#愛車運勢チェッカー #ナンバープレート診断 #車好き #運勢診断 #やってみた #面白い #当たる

🔗 ${window.location.origin}`

    navigator.clipboard.writeText(text).then(() => {
      alert("Instagramの投稿文をコピーしました！\n画像をダウンロードして、Instagramで投稿してください。")
    })
  }

  useEffect(() => {
    if (analysis) {
      console.log("分析結果変更を検出:", analysis)
      generateImage()
    }
  }, [carNumber, analysis])

  if (!analysis) {
    console.log("分析結果がないため、コンポーネントを表示しません")
    return null
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">📸 SNSシェア用画像</h3>

          <canvas ref={canvasRef} style={{ display: "none" }} width={1080} height={1080} />

          {isGenerating && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
              <span className="ml-3 text-purple-700">画像生成中...</span>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              <p>{error}</p>
              <Button onClick={generateImage} className="mt-2 bg-red-600 hover:bg-red-700 text-white">
                再試行
              </Button>
            </div>
          )}

          {imageUrl && !isGenerating && (
            <div className="mb-4">
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="診断結果画像"
                className="w-64 h-64 mx-auto rounded-lg shadow-lg border-2 border-purple-300"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              onClick={downloadImage}
              disabled={!imageUrl || isGenerating}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              画像ダウンロード
            </Button>

            <Button onClick={shareToTwitter} disabled={isGenerating} className="bg-black hover:bg-gray-800 text-white">
              <Twitter className="w-4 h-4 mr-2" />
              Twitterでシェア
            </Button>

            <Button
              onClick={shareToInstagram}
              disabled={!imageUrl || isGenerating}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagramでシェア
            </Button>
          </div>

          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌈 神域級デザイン特徴</h4>
            <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
              <p>
                <strong>95点以上:</strong> 👑 正しい虹色グラデーション（赤→橙→黄→緑→青→藍→紫）
              </p>
              <p>
                <strong>特別エフェクト:</strong> 虹色の光の輪 + キラキラ + 虹色ナンバープレート枠
              </p>
              <p>
                <strong>装飾:</strong> 虹色の円と星が散りばめられた神々しいデザイン
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
