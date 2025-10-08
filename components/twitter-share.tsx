import type React from "react"
import { TwitterShareButton, TwitterIcon } from "react-share"

interface TwitterShareProps {
  carNumber: string
  score: number
  comment: string
}

const TwitterShare: React.FC<TwitterShareProps> = ({ carNumber, score, comment }) => {
  const shareText = `🌟 愛車運勢診断で車のナンバープレートを診断してみました！

🚗 車のナンバー: ${carNumber}
⭐ 運勢スコア: ${score}点
📊 ${comment}

車のナンバープレートで運勢がわかるなんて意外！✨
みんなも愛車のナンバーで運勢をチェックしてみて！

#愛車運勢診断 #ナンバープレート診断 #車好き #運勢診断 #当たる #車のナンバー

${window.location.origin}`

  const defaultTitle = "愛車運勢診断で車のナンバープレートを診断してみよう！"

  return (
    <TwitterShareButton url={window.location.origin} title={shareText || defaultTitle}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  )
}

export default TwitterShare
