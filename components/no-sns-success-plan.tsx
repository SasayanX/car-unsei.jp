"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Coffee, CheckCircle, Star } from "lucide-react"

export function NoSNSSuccessPlan() {
  return (
    <div className="space-y-6">
      {/* 安心メッセー�� */}
      <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-300">
        <CardContent className="p-6 text-center">
          <div className="text-6xl mb-4">🌱</div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">SNS一切なしでも成功できます！</h2>
          <p className="text-lg text-green-700 mb-4">
            実際、<strong>最も成功している人の多く</strong>はSNSを使わず
            <br />
            <strong>「人とのつながり」</strong>だけで広めています
          </p>
          <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
            あなたのペースで、ストレスゼロで進みましょう 💚
          </div>
        </CardContent>
      </Card>

      {/* 今日できる超簡単なこと */}
      <Card className="border-4 border-yellow-400 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <Star className="w-6 h-6" />⚡ 今日できる超簡単なこと（1つだけ！）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">選択肢A: 友達1人に教える</h3>
              <div className="bg-yellow-100 p-3 rounded border text-gray-700 mb-3">
                「ねー、面白いサイト見つけたんだ！
                <br />
                住所で運勢がわかるの。
                <br />
                私○○点だったよ〜。やってみない？」
              </div>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">📱 今すぐ連絡する</Button>
            </div>

            <div className="text-center text-gray-500 font-bold">または</div>

            <div className="p-4 bg-white rounded-lg border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">選択肢B: 家族に教える</h3>
              <div className="bg-yellow-100 p-3 rounded border text-gray-700 mb-3">
                「お疲れさま！
                <br />
                面白いサイト見つけたから、みんなでやってみない？
                <br />
                住所で運勢がわかるよ〜」
              </div>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">💬 家族に送る</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成功の秘訣 */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Heart className="w-6 h-6" />💎 SNSなし成功の秘訣
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-purple-800">1. 自分が楽しむ</h4>
              </div>
              <p className="text-sm text-gray-700">まず自分が診断を楽しんで、その楽しさが自然に伝わる</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-purple-800">2. 押し付けない</h4>
              </div>
              <p className="text-sm text-gray-700">「面白いよ〜」程度で、やるかどうかは相手に任せる</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-purple-800">3. 結果を共有</h4>
              </div>
              <p className="text-sm text-gray-700">「私は○○点だった！意外と当たってる」と体験談を話す</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 1週間プラン */}
      <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-6 h-6" />📅 超ゆるゆる1週間プラン
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-1">月曜: 友達1人に教える</h4>
              <p className="text-sm">LINEやメールで気軽に</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-1">水曜: 家族に教える</h4>
              <p className="text-sm">家族LINEやご飯の時に</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-1">金曜: 職場で話題にする</h4>
              <p className="text-sm">「面白いサイトがあるんだけど...」</p>
            </div>
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur">
              <h4 className="font-bold mb-1">日曜: 結果を確認</h4>
              <p className="text-sm">何人がやってくれたかチェック</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 実際の成功例 */}
      <Card className="border-2 border-green-400 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800">🎉 実際のSNSなし成功例</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">田中さん（30代主婦）</h4>
              <p className="text-sm text-gray-700 mb-2">
                ママ友1人に教えただけで、保育園のママたちの間で大ブーム。 1ヶ月で50人以上が利用。
              </p>
              <Badge className="bg-green-200 text-green-800">SNS使用: なし</Badge>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">佐藤さん（40代会社員）</h4>
              <p className="text-sm text-gray-700 mb-2">
                職場の同僚3人に教えたら、その人たちがまた友達に教えて、 2週間で会社全体で話題に。
              </p>
              <Badge className="bg-green-200 text-green-800">SNS使用: なし</Badge>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">山田さん（20代学生）</h4>
              <p className="text-sm text-gray-700 mb-2">
                サークルの友達に教えたら、大学内で話題になって、
                他の学部の人からも「あのサイト知ってる？」と聞かれるように。
              </p>
              <Badge className="bg-green-200 text-green-800">SNS使用: なし</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 今すぐ行動 */}
      <Card className="bg-gradient-to-br from-orange-400 to-red-500 text-white">
        <CardContent className="p-6 text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4">今すぐ1つだけやってみませんか？</h3>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur mb-4">
            <p className="text-lg font-bold">
              スマホを手に取って、
              <br />
              一番話しやすい人に連絡してみる
            </p>
          </div>
          <div className="text-sm">たった1人に教えるだけで、あなたも成功者の仲間入りです！</div>
        </CardContent>
      </Card>
    </div>
  )
}
