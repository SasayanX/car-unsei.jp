"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hash, Type, EyeOff, Copy, Zap } from "lucide-react"
import { useState } from "react"

export function HashtagTutorial() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const hashtagSets = [
    {
      name: "基本セット",
      tags: "#住所診断 #住まい運勢チェッカー #新文化",
      description: "最低限これだけは入れる",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "拡散セット",
      tags: "#占い好きと繋がりたい #やってみた #面白い",
      description: "より多くの人に届ける",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "トレンドセット",
      tags: "#バズり #話題 #日本発",
      description: "バイラル狙い",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  return (
    <div className="space-y-6">
      {/* メインガイド */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <Hash className="w-12 h-12 mx-auto" />
            <h2 className="text-2xl font-bold">📱 Instagram Stories ハッシュタグ入れ方</h2>
            <p className="text-lg">3つの方法で完璧にマスター！</p>
          </div>
        </CardContent>
      </Card>

      {/* 方法1: テキストで入れる */}
      <Card className="border-2 border-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Type className="w-6 h-6" />
            方法1: テキストで入れる（おすすめ！）
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-blue-800">📋 手順（30秒）:</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>
                  画面上部の <strong>「Aa」ボタン</strong> をタップ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>下のハッシュタグをコピペ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>
                  文字サイズを <strong>小さく</strong> 調整
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>
                  画面の <strong>下部</strong> に配置
                </span>
              </li>
            </ol>
          </div>

          <div className="space-y-3">
            {hashtagSets.map((set, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={set.color}>{set.name}</Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(set.tags, set.name)}
                    className="flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" />
                    {copiedText === set.name ? "コピー済み!" : "コピー"}
                  </Button>
                </div>
                <div className="bg-gray-50 p-2 rounded text-sm font-mono mb-1">{set.tags}</div>
                <p className="text-xs text-gray-600">{set.description}</p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>💡 コツ:</strong> 文字色は白か黒で、透明度を少し下げると自然！
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 方法2: ハッシュタグスタンプ */}
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Hash className="w-6 h-6" />
            方法2: ハッシュタグスタンプ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-green-800">📋 手順（20秒）:</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>
                  画面上部の <strong>スタンプアイコン</strong> をタップ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>
                  <strong>「#ハッシュタグ」</strong> スタンプを選択
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>「住所診断」と入力</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>色やスタイルを選択</span>
              </li>
            </ol>
          </div>

          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-bold mb-2 text-green-800">おすすめハッシュタグ:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2 rounded border">#住所診断</div>
              <div className="bg-white p-2 rounded border">#新文化</div>
              <div className="bg-white p-2 rounded border">#やってみた</div>
              <div className="bg-white p-2 rounded border">#占い</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 方法3: 隠しハッシュタグ */}
      <Card className="border-2 border-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <EyeOff className="w-6 h-6" />
            方法3: 隠しハッシュタグ（上級者向け）
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-3 text-purple-800">📋 手順（40秒）:</h4>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>「Aa」でハッシュタグテキストを追加</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>
                  文字サイズを <strong>最小</strong> にする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>
                  文字色を <strong>背景と同じ色</strong> にする
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>
                  画面の <strong>端っこ</strong> に配置
                </span>
              </li>
            </ol>
          </div>

          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-800">
              <strong>🎯 効果:</strong> 見た目はスッキリ、でも検索には引っかかる！
            </p>
          </div>

          <div className="bg-white p-3 border rounded-lg">
            <h4 className="font-bold mb-2">隠しハッシュタグ用テキスト:</h4>
            <div className="bg-gray-50 p-2 rounded text-xs font-mono mb-2">
              #住所診断 #住まい運勢チェッカー #新文化 #占い好きと繋がりたい #やってみた #面白い #バズり #話題 #日本発
              #トレンド
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                copyToClipboard(
                  "#住所診断 #住まい運勢チェッカー #新文化 #占い好きと繋がりたい #やってみた #面白い #バズり #話題 #日本発 #トレンド",
                  "隠しハッシュタグ",
                )
              }
              className="w-full"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copiedText === "隠しハッシュタグ" ? "コピー済み!" : "全部コピー"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 重要なポイント */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <Zap className="w-12 h-12 mx-auto" />
            <h3 className="text-2xl font-bold">⚡ 重要ポイント</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <h4 className="font-bold mb-2">📊 ハッシュタグ数</h4>
                <p className="text-sm">Stories は最大10個まで。5-7個が効果的</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <h4 className="font-bold mb-2">🎯 配置場所</h4>
                <p className="text-sm">下部または端っこ。メイン画像を邪魔しない</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <h4 className="font-bold mb-2">🔤 文字サイズ</h4>
                <p className="text-sm">小さめで控えめに。読みやすさも重要</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <h4 className="font-bold mb-2">🌈 文字色</h4>
                <p className="text-sm">白・黒・グレーが無難。背景に合わせる</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成功例 */}
      <Card className="border-2 border-green-400">
        <CardHeader>
          <CardTitle className="text-green-700">✅ 成功例</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">パターン1: シンプル</h4>
              <p className="text-sm mb-2">メイン画像 + 小さなハッシュタグ（下部）</p>
              <div className="bg-white p-2 rounded text-xs">#住所診断 #新文化 #やってみた</div>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">パターン2: スタンプ活用</h4>
              <p className="text-sm mb-2">ハッシュタグスタンプ + 質問スタンプ</p>
              <div className="bg-white p-2 rounded text-xs">#住所診断 スタンプ + 「あなたは何点？」質問</div>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">パターン3: 隠し技</h4>
              <p className="text-sm mb-2">見た目スッキリ + 隠しハッシュタグ</p>
              <div className="bg-white p-2 rounded text-xs">メイン画像のみ + 端に隠しタグ</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
