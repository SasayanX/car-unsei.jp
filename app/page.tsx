"use client"

import type React from "react"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { analyzeCarNumber, type CarNumberAnalysis } from "../utils/car-number-analyzer"
import { getFortuneComment } from "../data/fortune-data"
import { historyStorage, favoriteStorage } from "../utils/storage"
import { getFortuneTypeColor, getFortuneEmoji, getScoreColor } from "../utils/fortune-colors"
import {
  Car,
  Star,
  Share2,
  History,
  Heart,
  Settings,
  Twitter,
  Globe,
  Palette,
  Code,
  Instagram,
  User,
  Sparkles,
} from "lucide-react"
import { CarFortuneItems } from "../components/car-fortune-items"
import { PWAInstallPrompt } from "../components/pwa-install-prompt"
import { HistoryModal } from "../components/history-modal"
import { PWAFeatures } from "../components/pwa-features"
import { OfflineIndicator } from "../components/offline-indicator"
import TwitterShare from "../components/twitter-share"
import { CulturalImpact } from "../components/cultural-impact"
import { AdSenseAd } from "../components/adsense-integration"
import { ThemeToggle } from "@/components/theme-toggle"
import { DevPanel } from "@/components/dev-panel"
import { SimpleFriendReferral } from "../components/simple-friend-referral"
import { simpleReferralTracking } from "../utils/simple-referral-tracking"
import { trackDiagnosis, trackShare, trackConversion } from "../utils/analytics"
import { SuccessStories } from "../components/success-stories"
import { normalizeCarNumberInput } from "../utils/text-normalizer"
import { PerfectScoreResult } from "@/components/perfect-score-result"
import { CarAffiliateRecommendations } from "../components/car-affiliate-recommendations"
import { getCarNumerologyData, calculateNumerologyNumber } from "../data/car-numerology-data"

export default function HomePage() {
  const [carNumber, setCarNumber] = useState("")
  const [analysis, setAnalysis] = useState<CarNumberAnalysis | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [showPWAFeatures, setShowPWAFeatures] = useState(false)
  const [showTwitterShare, setShowTwitterShare] = useState(false)
  const [showCulturalImpact, setShowCulturalImpact] = useState(false)
  const [showThemeSettings, setShowThemeSettings] = useState(false)
  const [showDevPanel, setShowDevPanel] = useState(false)
  const [showInstagramShare, setShowInstagramShare] = useState(false)
  const [activeTab, setActiveTab] = useState<"fortune" | "personality">("fortune")

  // 開発者モード判定をメモ化
  const isDeveloperMode = useMemo(
    () =>
      process.env.NODE_ENV === "development" ||
      (typeof window !== "undefined" && localStorage.getItem("dev-mode") === "true"),
    [],
  )

  // 運勢コメントとスコア色をメモ化
  const { fortuneComment, scoreColors } = useMemo(() => {
    if (!analysis) return { fortuneComment: null, scoreColors: null }
    return {
      fortuneComment: getFortuneComment(analysis.weightedScore),
      scoreColors: getScoreColor(analysis.weightedScore),
    }
  }, [analysis])

  // 数秘術データ
  const numerologyNumber = useMemo(() => {
    if (!carNumber) return 0
    return calculateNumerologyNumber(carNumber)
  }, [carNumber])

  const numerologyData = useMemo(() => {
    if (!carNumber) return null
    return getCarNumerologyData(carNumber)
  }, [carNumber])

  const isMasterNumber = useMemo(() => {
    return [11, 22, 33].includes(numerologyNumber)
  }, [numerologyNumber])

  useEffect(() => {
    // 紹介コードのチェック（初回のみ）
    const referralCode = simpleReferralTracking.getReferralCodeFromUrl()
    if (referralCode) {
      simpleReferralTracking.handleReferralJoin(referralCode)
    }
  }, [])

  // 分析処理を最適化
  const handleAnalyze = useCallback(async () => {
    if (!carNumber.trim()) return

    setIsAnalyzing(true)

    try {
      // 非同期処理を最小限に
      await new Promise((resolve) => setTimeout(resolve, 500))

      // ナンバーを正規化してから分析
      const normalizedNumber = normalizeCarNumberInput(carNumber)
      const result = analyzeCarNumber(normalizedNumber)
      setAnalysis(result)

      // 診断後は運勢タブをデフォルトに
      setActiveTab("fortune")

      // 履歴とお気に入り状態を並行処理
      const [, isFav] = await Promise.all([
        historyStorage.add(normalizedNumber, result),
        Promise.resolve(favoriteStorage.isFavorite(normalizedNumber)),
      ])

      setIsFavorite(isFav)
      trackDiagnosis(normalizedNumber, result.weightedScore)
    } finally {
      setIsAnalyzing(false)
    }
  }, [carNumber])

  // シェア処理を最適化
  const handleShare = useCallback(() => {
    if (!analysis) return

    const shareText = `私の愛車のナンバー「${carNumber}」の運勢スコアは${analysis.weightedScore}点でした！ #愛車運勢診断 #車のナンバー`

    if (navigator.share) {
      navigator
        .share({
          title: "愛車運勢診断",
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {}) // エラーを無視
    } else {
      navigator.clipboard.writeText(shareText)
      alert("結果をクリップボードにコピーしました！")
    }

    trackShare("native", analysis.weightedScore)
  }, [analysis, carNumber])

  // Twitter投稿を最適化
  const handleDirectTwitterShare = useCallback(() => {
    if (!analysis) return

    const text = `🚗 私の愛車のナンバー「${carNumber}」の運勢スコアは${analysis.weightedScore}点でした！

${analysis.weightedScore >= 80 ? "最高の運勢！✨" : analysis.weightedScore >= 60 ? "良い運勢です！😊" : "もう少し頑張りましょう！🤔"}

車のナンバープレートで運勢がわかるなんて意外！
あなたの愛車のナンバーも診断してみませんか？
新しい日本文化「ナンバープレート診断」を一緒に楽しみましょう！

#愛車運勢診断 #ナンバープレート診断 #車好き #新文化 #車のナンバー

${window.location.origin}`

    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank")
    trackShare("twitter", analysis.weightedScore)
  }, [analysis, carNumber])

  // Instagram投稿を最適化
  const handleDirectInstagramShare = useCallback(async () => {
    if (!analysis) {
      alert("診断結果がありません。先に診断を行ってください。")
      return
    }

    const score = analysis.weightedScore
    const emoji = score >= 80 ? "🚗✨" : score >= 60 ? "🚙😊" : "🚕🤔"

    const postText = `${emoji} 車のナンバープレートで運勢がわかるって知ってた？

🚗 私の愛車のナンバー「${carNumber}」の運勢スコア: ${score}点

意外と当たってる！✨
日本発の新しい文化「ナンバープレート診断」

車好きのみんなもやってみて〜！

#ナンバープレート診断 #愛車運勢診断 #新文化 #車好きと繋がりたい #やってみた #面白い #バズり #愛車自慢 #車のナンバー

${window.location.origin}`

    try {
      await navigator.clipboard.writeText(postText)

      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      if (isMobile) {
        window.location.href = "instagram://camera"
        setTimeout(() => window.open("https://www.instagram.com/", "_blank"), 1000)
      } else {
        window.open("https://www.instagram.com/", "_blank")
      }

      alert("投稿文をコピーしました！Instagramで貼り付けてください。")
      trackShare("instagram", analysis.weightedScore)
    } catch (error) {
      // フォールバック処理を簡略化
      const textArea = document.createElement("textarea")
      textArea.value = postText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      alert("投稿文をコピーしました！Instagramで貼り付けてください。")
      window.open("https://www.instagram.com/", "_blank")
    }
  }, [analysis, carNumber])

  // お気に入り処理を最適化
  const handleToggleFavorite = useCallback(() => {
    if (!analysis || !carNumber) return

    if (isFavorite) {
      const favorites = favoriteStorage.getAll()
      const item = favorites.find((f) => f.address === carNumber)
      if (item) favoriteStorage.remove(item.id)
      setIsFavorite(false)
    } else {
      favoriteStorage.add(carNumber, analysis)
      setIsFavorite(true)
      trackConversion("favorite")
    }
  }, [analysis, carNumber, isFavorite])

  // 履歴選択を最適化
  const handleSelectFromHistory = useCallback((selectedNumber: string) => {
    setCarNumber(selectedNumber)
    // 直接分析を実行せず、carNumberの変更のみ
  }, [])

  // 開発者モード切り替えを最適化
  const handleDevModeToggle = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentMode = localStorage.getItem("dev-mode") === "true"
      localStorage.setItem("dev-mode", (!currentMode).toString())
      window.location.reload()
    }
  }, [])

  // Enterキー処理を最適化
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleAnalyze()
    },
    [handleAnalyze],
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900 p-4 transition-colors duration-300">
      {/* オフライン状態インジケーター */}
      <OfflineIndicator />

      <div className="max-w-2xl mx-auto space-y-6">
        {/* ヘッダー */}
        <Card className="text-center bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-4 border-green-800 dark:border-green-600 shadow-lg transition-colors duration-300 rounded-xl">
          <CardHeader className="pb-4">
            {/* タイトル部分 */}
            <div className="flex items-center justify-center gap-2 mb-3 bg-green-50 dark:bg-green-900/20 py-3 px-6 rounded-lg border border-green-200 dark:border-green-700">
              <Car className="w-8 h-8 text-green-700 dark:text-green-400" />
              <CardTitle
                className="text-3xl font-bold bg-gradient-to-r from-green-700 to-green-600 dark:from-green-400 dark:to-green-300 bg-clip-text text-transparent cursor-pointer"
                onClick={handleDevModeToggle}
                title="開発者モード切り替え（5回クリック）"
              >
                愛車運勢診断
              </CardTitle>
            </div>

            {/* 説明文 */}
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              あなたの愛車のナンバーに宿る運勢パワーと性格を診断します
            </p>

            {/* システムアイコン群 - 中央揃え */}
            <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistoryModal(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-1 h-auto py-2"
                title="診断履歴"
              >
                <History className="w-5 h-5" />
                <span className="text-xs">履歴</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowThemeSettings(!showThemeSettings)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-1 h-auto py-2"
                title="テーマ設定"
              >
                <Palette className="w-5 h-5" />
                <span className="text-xs">テーマ</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCulturalImpact(!showCulturalImpact)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-1 h-auto py-2"
                title="文化的インパクト"
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs">文化</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPWAFeatures(!showPWAFeatures)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex flex-col items-center gap-1 h-auto py-2"
                title="アプリ機能"
              >
                <Settings className="w-5 h-5" />
                <span className="text-xs">アプリ</span>
              </Button>

              {/* 開発者モードでのみ表示 */}
              {isDeveloperMode && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDevPanel(!showDevPanel)}
                  className="text-orange-600 dark:text-orange-400 border border-orange-300 dark:border-orange-600 flex flex-col items-center gap-1 h-auto py-2"
                  title="開発者パネル"
                >
                  <Code className="w-5 h-5" />
                  <span className="text-xs">DEV</span>
                </Button>
              )}
            </div>

            {/* 文化バッジ */}
            <div className="mt-2">
              <Badge className="bg-gradient-to-r from-green-600 to-green-500 text-white border-0 shadow-md">
                🚗 日本発の新しい文化
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* 開発者パネル（開発モードでのみ表示） */}
        {isDeveloperMode && showDevPanel && <DevPanel />}
        {showThemeSettings && <ThemeToggle />}
        {showCulturalImpact && <CulturalImpact />}
        {showPWAFeatures && <PWAFeatures />}

        {/* 入力フォーム */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  車のナンバープレートの数字を入力してください
                </label>
                <Input
                  type="text"
                  placeholder="例: 品川330あ1234 または 1234 または ３３０１２３４（全角OK）"
                  value={carNumber}
                  onChange={(e) => setCarNumber(e.target.value)}
                  className="text-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  onKeyDown={handleKeyDown}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  ※ 全角数字（１２３４）も半角数字（1234）も対応しています。地名やひらがなは自動で除外されます
                </p>
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!carNumber.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg py-6 text-white"
              >
                {isAnalyzing ? "診断中..." : "愛車の運勢と性格を診断する"}
              </Button>
              {!analysis && (
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <p>🚗 新しい日本文化の創造に参加しよう！</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* タブ切り替えボタン（診断ボタン直下、診断結果がある場合のみ表示） */}
        {analysis && (
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="flex">
                <Button
                  variant={activeTab === "fortune" ? "default" : "ghost"}
                  onClick={() => setActiveTab("fortune")}
                  className={`flex-1 rounded-none rounded-tl-lg h-14 text-base font-medium ${
                    activeTab === "fortune"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Star className="w-5 h-5 mr-2" />
                  運勢詳細
                </Button>
                <Button
                  variant={activeTab === "personality" ? "default" : "ghost"}
                  onClick={() => setActiveTab("personality")}
                  className={`flex-1 rounded-none rounded-tr-lg h-14 text-base font-medium ${
                    activeTab === "personality"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  <User className="w-5 h-5 mr-2" />
                  性格分析
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 診断結果 */}
        {analysis && (
          <div className="space-y-6">
            {/* 100点満点の場合の特別演出 */}
            <PerfectScoreResult score={analysis.weightedScore} />

            {/* メインスコア表示（100点未満の場合のみ） */}
            {analysis.weightedScore < 100 && (
              <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      {analysis.weightedScore}
                    </div>
                    <div className="text-xl text-gray-600 dark:text-gray-300">/ 100点</div>
                    {fortuneComment && scoreColors && (
                      <div className={`space-y-3 p-4 rounded-lg ${fortuneComment.bgColor} dark:bg-gray-700/50`}>
                        <Badge
                          className={`text-lg px-4 py-2 border font-semibold ${scoreColors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                        >
                          {fortuneComment.title}
                        </Badge>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{fortuneComment.message}</p>
                      </div>
                    )}
                    {/* 文化参加メッセージ */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <p className="text-sm text-blue-700 dark:text-blue-200">
                        🎉 おめでとうございます！あなたは<strong>ナンバープレート診断文化</strong>の創造者の一人です！
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* タブコンテンツ */}
            {activeTab === "fortune" && (
              <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    <Star className="w-5 h-5 text-yellow-500" />
                    運勢の詳細分析
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 個別数字の分析 */}
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      個別数字の運勢 ({analysis.individualAnalysis.length}個)
                    </h3>
                    {analysis.individualAnalysis.length === 0 ? (
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <p className="text-yellow-700 dark:text-yellow-200">
                          ⚠️ 個別数字が見つかりませんでした。
                          <br />
                          抽出された数字: [{analysis.numbers.join(", ")}]
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {analysis.individualAnalysis.map((item, index) => {
                          const colors = getFortuneTypeColor(item.type)
                          const emoji = getFortuneEmoji(item.type)
                          return (
                            <div
                              key={index}
                              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                  {item.number}
                                </span>
                                <div className="text-right">
                                  <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.score}点</div>
                                  <Badge
                                    className={`border font-medium ${colors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                                  >
                                    {emoji} {item.type}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {/* 広告配置: 運勢タブ内 */}
                  <AdSenseAd adSlot="7766782092" adFormat="auto" className="my-4" label="関連情報" />

                  {/* 組み合わせ数字の分析 */}
                  {analysis.combinationAnalysis.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">連続数字の運勢</h3>
                      <div className="space-y-3">
                        {analysis.combinationAnalysis.map((item, index) => {
                          const colors = getFortuneTypeColor(item.type)
                          const emoji = getFortuneEmoji(item.type)
                          return (
                            <div
                              key={index}
                              className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                  {item.number}
                                </span>
                                <div className="text-right">
                                  <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.score}点</div>
                                  <Badge
                                    className={`border font-medium ${colors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                                  >
                                    {emoji} {item.type}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {activeTab === "personality" && numerologyData && (
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    あなたの愛車の性格分析
                    {isMasterNumber && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        マスターナンバー
                      </Badge>
                    )}
                  </CardTitle>
                  <div className="text-sm text-gray-600 dark:text-gray-400">数秘術に基づく性格とエネルギー分析</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* メイン性格タイプ */}
                  <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `${numerologyData.color}20` }}>
                    <div className="text-6xl mb-2">{numerologyData.emoji}</div>
                    <div className="text-4xl font-bold mb-2" style={{ color: numerologyData.color }}>
                      {numerologyNumber}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{numerologyData.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{numerologyData.personality}</p>
                  </div>

                  {/* エネルギー特性 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="font-semibold text-purple-800 dark:text-purple-200">エネルギー特性</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.energy}</p>
                    </div>

                    <div className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Car className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-800 dark:text-blue-200">運転スタイル</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.drivingStyle}</p>
                    </div>
                  </div>

                  {/* 適性と用途 */}
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-800 dark:text-green-200">
                          この車に向いている人・用途
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {numerologyData.suitableFor.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Heart className="w-4 h-4 text-pink-600" />
                          <span className="font-semibold text-pink-800 dark:text-pink-200">家族との相性</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.familyCompatibility}</p>
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Car className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-blue-800 dark:text-blue-200">ビジネス活用</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.businessUse}</p>
                      </div>
                    </div>
                  </div>

                  {/* マスターナンバーの特別説明 */}
                  {isMasterNumber && (
                    <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                        ✨ マスターナンバーの特別な意味
                      </h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        {numerologyNumber === 11 &&
                          "直感力と霊感が強く、特別な使命を持つ車です。運転中にひらめきや重要な気づきを得やすいでしょう。"}
                        {numerologyNumber === 22 &&
                          "大きな夢や目標を現実化する力を持つ車です。長期的なプロジェクトや重要な移動に力を発揮します。"}
                        {numerologyNumber === 33 &&
                          "無条件の愛と癒しのエネルギーを持つ車です。乗る人すべてに安らぎと希望を与える特別な存在です。"}
                      </p>
                    </div>
                  )}

                  {/* 計算過程の表示 */}
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">計算過程:</span> {carNumber} → 数字抽出・合計 → {numerologyNumber}
                    {isMasterNumber && " (マスターナンバーとして確定)"}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 広告配置1: 診断結果直後（最も効果的） */}
            <AdSenseAd adSlot="8610241854" adFormat="auto" className="my-6" label="おすすめ" />

            {/* 友だち紹介機能 */}
            <SimpleFriendReferral userAnalysis={analysis} userAddress={carNumber} />

            {/* 体験談セクション */}
            <SuccessStories />

            {/* 運気アップアイテム */}
            <CarFortuneItems score={analysis.weightedScore} />

            {/* 広告配置3: 運気アップアイテム後（購買意欲が高い） */}
            <AdSenseAd adSlot="7759344556" adFormat="auto" className="my-6" label="あなたにおすすめ" />

            {/* 車関連アフィリエイト */}
            <CarAffiliateRecommendations score={analysis.weightedScore} carNumber={carNumber} />

            {/* アクションボタン */}
            <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      🚗 この診断結果をシェアして、新しい文化を広めよう！
                    </p>
                  </div>
                  {/* 2行2列のレイアウトに変更 */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      onClick={handleDirectTwitterShare}
                      className="flex flex-col items-center gap-2 h-auto py-6 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-300"
                    >
                      <Twitter className="w-6 h-6" />
                      <span className="text-base font-medium">ツイート</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleDirectInstagramShare}
                      className="flex flex-col items-center gap-2 h-auto py-6 bg-pink-50 dark:bg-pink-900/30 hover:bg-pink-100 dark:hover:bg-pink-900/50 border-pink-200 dark:border-pink-700 text-pink-600 dark:text-pink-300"
                    >
                      <Instagram className="w-6 h-6" />
                      <span className="text-base font-medium">Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleShare}
                      className="flex flex-col items-center gap-2 h-auto py-6 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                    >
                      <Share2 className="w-6 h-6" />
                      <span className="text-base font-medium">シェア</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleToggleFavorite}
                      className={`flex flex-col items-center gap-2 h-auto py-6 ${
                        isFavorite
                          ? "text-red-600 dark:text-red-400 border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/30"
                          : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`} />
                      <span className="text-base font-medium">{isFavorite ? "お気に入り済み" : "お気に入り"}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* フッター広告 */}
        <AdSenseAd adSlot="5655925392" adFormat="auto" className="mt-8" label="スポンサー" />
      </div>

      {/* 履歴モーダル */}
      <HistoryModal
        isOpen={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
        onSelectAddress={handleSelectFromHistory}
      />

      {/* PWAインストールプロンプト */}
      <PWAInstallPrompt />

      {/* モーダル - 診断結果がある場合のみ表示（削除） */}
      {analysis && (
        <TwitterShare
          isOpen={showTwitterShare}
          onClose={() => setShowTwitterShare(false)}
          carNumber={carNumber}
          analysis={analysis}
        />
      )}
    </div>
  )
}
