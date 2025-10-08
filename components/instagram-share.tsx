import type React from "react"
import { Instagram } from "lucide-react"

interface InstagramShareProps {
  carNumber: string
  fortuneResult: string
}

const InstagramShare: React.FC<InstagramShareProps> = ({ carNumber, fortuneResult }) => {
  const shareText = encodeURIComponent(
    `車のナンバー「${carNumber}」の運勢は…\n\n${fortuneResult}\n\n#愛車運勢診断 #車のナンバー`,
  )

  const instagramUrl = `https://www.instagram.com/?utm_source=ig_web_button_share_sheet&igshid=ZDc4ODBmNjlmNQ==`

  return (
    <a
      href={`https://www.instagram.com/`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors duration-200 shadow-md"
    >
      <Instagram className="w-5 h-5" />
      <span className="font-medium">Instagram</span>
    </a>
  )
}

export default InstagramShare
