"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, MessageCircle, Mail, Phone, Coffee } from "lucide-react"

export function SNSAlternativeStrategy() {
  return (
    <div className="space-y-6">
      {/* 励ましメッセージ */}
      <Card className="bg-gradient-to-br from-green-100 to-blue-100 border-green-300">
        <CardContent className="p-6 text-center">
          <div className="text-6xl mb-4">🤗</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">SNS苦手でも大丈夫！</h2>
          <p className="text-lg text-green-700 mb-4">
            実は一番効果的なのは<strong>「人と人のつながり」</strong>です
          </p>
          <div className="text-sm text-green-600">SNSより確実で、ストレスもゼロ！あなたらしい方法で広めましょう 💚</div>
        </CardContent>
      </Card>

      {/* SNSなし拡散戦略 */}
      <Card className="border-2 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Heart className="w-6 h-6" />🌟 SNSなしでも効果抜群の方法
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* 直接的な方法 */}
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-yellow-600" />
                <h3 className="font-bold text-yellow-800">1. 直接友達に教える</h3>
                <Badge className="bg-yellow-200 text-yellow-800">効果: 超高</Badge>
              </div>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• 「面白いサイト見つけたよ！住所で運勢がわかるの」</li>
                <li>• 「一緒にやってみない？」と誘う</li>
                <li>• 自分の結果を先に話して興味を引く</li>
                <li>• 「○○さんの住所だと何点かな？」</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-blue-800">2. LINEで個別に送る</h3>
                <Badge className="bg-blue-200 text-blue-800">効果: 高</Badge>
              </div>
              <div className="bg-white p-3 rounded border text-sm text-gray-700 mb-2">
                「これ面白いからやってみて！
                <br />
                住所で運勢がわかるサイト見つけた😊
                <br />
                私は○○点だったよ！
                <br />
                [サイトURL]」
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                📋 メッセージをコピー
              </Button>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-green-800">3. メールで家族に</h3>
                <Badge className="bg-green-200 text-green-800">効果: 中</Badge>
              </div>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• 家族グループメールで共有</li>
                <li>• 「みんなでやってみよう」企画</li>
                <li>• 実家の住所と今の住所を比較</li>
                <li>• 親戚にも広がる可能性大</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* リアル世界での拡散 */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Coffee className="w-6 h-6" />☕ リアル世界で話題にする
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-white rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">職場・学校で</h4>
              <p className="text-sm text-gray-700">
                「最近面白いサイト見つけたんだけど、住所で運勢がわかるの。私○○点だった！」
              </p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">ママ友・友達との会話で</h4>
              <p className="text-sm text-gray-700">
                「引っ越し考えてる人いない？住所の運勢チェックできるサイトがあるよ」
              </p>
            </div>

            <div className="p-3 bg-white rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-2">家族の集まりで</h4>
              <p className="text-sm text-gray-700">「みんなの住所診断してみない？意外と当たってるよ」</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 超簡単な方法 */}
      <Card className="bg-gradient-to-r from-pink-400 to-purple-500 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">✨</div>
            <h3 className="text-2xl font-bold">一番簡単で効果的な方法</h3>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur">
              <h4 className="text-xl font-bold mb-2">「口コミ」が最強！</h4>
              <p className="text-lg">
                あなたが1人に教える → その人が1人に教える
                <br />= 確実に2倍になる！
              </p>
            </div>
            <div className="text-sm">SNSで100人に見せるより、1人に直接教える方が確実に効果があります</div>
          </div>
        </CardContent>
      </Card>

      {/* 今すぐできること */}
      <Card className="border-4 border-green-500 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Phone className="w-6 h-6" />📞 今すぐできること（5分以内）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">1. 一番仲の良い友達に連絡</h4>
              <p className="text-sm text-gray-600 mb-2">
                「面白いサイト見つけた！住所で運勢がわかるの。一緒にやってみない？」
              </p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                📱 今すぐ連絡
              </Button>
            </div>

            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">2. 家族のLINEグループに投稿</h4>
              <p className="text-sm text-gray-600 mb-2">「みんなでやってみよう！住所診断サイト」+ URL</p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                💬 家族に送信
              </Button>
            </div>

            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">3. 明日誰かに話してみる</h4>
              <p className="text-sm text-gray-600 mb-2">職場や学校で「面白いサイトがあるんだけど...」と話題にする</p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                💭 話題を準備
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成功例 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">🎉 こんな成功例があります</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Aさん:</strong> 職場で3人に教えたら、その人たちがまた友達に教えて、1週間で20人以上に広がった
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Bさん:</strong> 家族のLINEグループに送ったら、親戚みんながやって盛り上がった
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Cさん:</strong> ママ友1人に教えただけで、保育園のママたちの間で話題になった
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
