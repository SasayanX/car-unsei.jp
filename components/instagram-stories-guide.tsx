"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Plus, Type, Hash, Users, Zap, CheckCircle } from "lucide-react"
import { useState } from "react"

export function InstagramStoriesGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex])
    }
    if (stepIndex < steps.length - 1) {
      setCurrentStep(stepIndex + 1)
    }
  }

  const steps = [
    {
      title: "📱 診断結果をスクリーンショット",
      icon: <Camera className="w-6 h-6" />,
      duration: "30秒",
      instructions: [
        "住まい運勢チェッカーで診断完了",
        "結果画面を表示",
        "スマホの電源ボタン + 音量上ボタン同時押し",
        "または画面録画機能を使用",
      ],
      tips: "縦長で撮影すると Stories にピッタリ！",
      example: "スコア表示部分が中央に来るように調整",
    },
    {
      title: "📲 Instagram アプリを開く",
      icon: <Plus className="w-6 h-6" />,
      duration: "10秒",
      instructions: [
        "Instagram アプリをタップ",
        "ホーム画面左上の「+」ボタンをタップ",
        "「ストーリーズ」を選択",
        "カメラ画面が開く",
      ],
      tips: "アプリが最新版か確認しておく",
      example: "左上の自分のアイコンをタップでもOK",
    },
    {
      title: "🖼️ スクショ画像を選択",
      icon: <Camera className="w-6 h-6" />,
      duration: "20秒",
      instructions: [
        "画面下の写真アイコンをタップ",
        "先ほど撮ったスクショを選択",
        "画像が Stories 画面に表示される",
        "サイズ調整（ピンチで拡大縮小）",
      ],
      tips: "画像が見切れないよう全体が見えるように調整",
      example: "スコア部分が見やすい位置に配置",
    },
    {
      title: "✏️ テキストを追加",
      icon: <Type className="w-6 h-6" />,
      duration: "60秒",
      instructions: [
        "画面上部の「Aa」ボタンをタップ",
        "以下のテキストを入力：",
        "「住所で運勢がわかるって知ってた？😳」",
        "「私は○○点だった！意外と当たってる✨」",
      ],
      tips: "文字色は白か黒で読みやすく",
      example: "フォントは「クラシック」がおすすめ",
    },
    {
      title: "🏷️ ハッシュタグを追加",
      icon: <Hash className="w-6 h-6" />,
      duration: "30秒",
      instructions: [
        "再度「Aa」ボタンでテキスト追加",
        "以下をコピペ：",
        "#住所診断 #住まい運勢チェッカー #新文化",
        "#占い好きと繋がりたい #やってみた",
      ],
      tips: "ハッシュタグは小さめの文字で下部に配置",
      example: "透明度を下げて目立ちすぎないように",
    },
    {
      title: "🎯 スタンプを追加",
      icon: <Zap className="w-6 h-6" />,
      duration: "40秒",
      instructions: [
        "画面上部のスタンプアイコンをタップ",
        "「質問」スタンプを選択",
        "「あなたの住所スコアは？」と入力",
        "または「やってみて」スタンプを使用",
      ],
      tips: "インタラクティブなスタンプで参加促進",
      example: "質問スタンプで友達の反応を促す",
    },
    {
      title: "👥 友達をタグ付け",
      icon: <Users className="w-6 h-6" />,
      duration: "30秒",
      instructions: [
        "画面上部の「@」ボタンをタップ",
        "仲の良い友達を2-3人選択",
        "「これやってみて！」メッセージ追加",
        "タグ位置を調整",
      ],
      tips: "占いや新しいもの好きな友達を選ぶ",
      example: "最大5人まで、でも3人程度が効果的",
    },
    {
      title: "🚀 投稿して拡散",
      icon: <CheckCircle className="w-6 h-6" />,
      duration: "20秒",
      instructions: [
        "画面下部「ストーリーズ」ボタンをタップ",
        "投稿完了！",
        "24時間以内に友達の反応をチェック",
        "コメントには積極的に返信",
      ],
      tips: "投稿後1時間が最も重要な時間",
      example: "反応があったらすぐに返信して会話を続ける",
    },
  ]

  const quickTexts = [
    {
      type: "メインテキスト",
      text: "住所で運勢がわかるって知ってた？😳\n私は○○点だった！意外と当たってる✨",
      color: "白",
      position: "上部",
    },
    {
      type: "ハッシュタグ",
      text: "#住所診断 #住まい運勢チェッカー #新文化 #占い好きと繋がりたい #やってみた",
      color: "グレー",
      position: "下部",
    },
    {
      type: "質問スタンプ",
      text: "あなたの住所スコアは？",
      color: "カラフル",
      position: "中央",
    },
  ]

  return (
    <div className="space-y-6">
      {/* プログレスバー */}
      <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">📱 Instagram Stories 投稿ガイド</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">進捗:</span>
              <Badge className="bg-white text-purple-600 text-lg px-3 py-1">
                {completedSteps.length}/{steps.length} 完了
              </Badge>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ステップバイステップガイド */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index)
          const isCurrent = currentStep === index
          const isNext = currentStep < index

          return (
            <Card
              key={index}
              className={`transition-all duration-300 ${
                isCompleted
                  ? "bg-green-50 border-green-500"
                  : isCurrent
                    ? "bg-blue-50 border-blue-500 shadow-lg"
                    : isNext
                      ? "bg-gray-50 border-gray-300"
                      : "bg-white border-gray-200"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg ${isCompleted ? "text-green-800" : isCurrent ? "text-blue-800" : "text-gray-600"}`}
                      >
                        ステップ {index + 1}: {step.title}
                      </h3>
                      <Badge variant="outline" className="mt-1">
                        所要時間: {step.duration}
                      </Badge>
                    </div>
                  </div>
                  {!isCompleted && isCurrent && (
                    <Button onClick={() => markStepComplete(index)} className="bg-blue-600 hover:bg-blue-700">
                      完了
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              {(isCurrent || isCompleted) && (
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">📋 手順:</h4>
                      <ol className="space-y-2">
                        {step.instructions.map((instruction, instrIndex) => (
                          <li key={instrIndex} className="flex items-start gap-2">
                            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                              {instrIndex + 1}
                            </span>
                            <span className="text-gray-700">{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>💡 コツ:</strong> {step.tips}
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>📝 例:</strong> {step.example}
                      </p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* コピペ用テキスト */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Type className="w-6 h-6" />📝 コピペ用テキスト集
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {quickTexts.map((textItem, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-purple-800">{textItem.type}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">色: {textItem.color}</Badge>
                    <Badge variant="outline">位置: {textItem.position}</Badge>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-line mb-2">
                  {textItem.text}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(textItem.text)}
                  className="w-full"
                >
                  📋 コピー
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 成功のポイント */}
      <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">🎯 バイラル成功のポイント</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-bold mb-2">投稿タイミング</h4>
                <p className="text-sm">19:00-22:00 が最もアクティブ</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold mb-2">即座に返信</h4>
                <p className="text-sm">コメントには1時間以内に返信</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-bold mb-2">再投稿</h4>
                <p className="text-sm">24時間後にフィード投稿も</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 完了後のアクション */}
      {completedSteps.length === steps.length && (
        <Card className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white animate-pulse">
          <CardContent className="p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-4">投稿完了おめでとうございます！</h3>
            <p className="text-lg mb-4">次は他のプラットフォームでも拡散しましょう！</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Twitter投稿</Button>
              <Button className="bg-green-600 hover:bg-green-700">LINE共有</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">TikTok投稿</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
