import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "ナンバープレート診断ブログ | 愛車運勢診断",
  description:
    "ナンバープレート診断に関する最新情報、体験談、運勢アップのコツをお届けします。車選び、買い替え、ナンバー選びの参考に。",
  keywords: "ナンバープレート診断,ブログ,体験談,車選び,買い替え,愛車運勢,数秘術,占い,F1,レーシング",
}

const blogPosts = [
  {
    title: "【都市伝説】呪いのナンバープレート「4229」の真相を数秘術で解明",
    slug: "cursed-number-4229-mystery",
    excerpt:
      "ネットで囁かれる恐怖の数字4229。81画理論では32点の悪運、それが数秘術8番のパワーで増幅される恐ろしい真相を専門家が解明します。",
    date: "2025-06-07",
    category: "都市伝説・エンターテイメント",
    readTime: "10分で読めます",
  },
  {
    title: "【新機能】数秘術による愛車性格診断が登場！プロ監修の本格的な性格分析",
    slug: "car-personality-numerology-diagnosis",
    excerpt:
      "古代から伝わる数秘術の知恵を現代の愛車診断に応用した革新的な性格診断機能が登場！6つの性格タイプから愛車の個性を詳しく解析。金雨輝龍先生監修による信頼性の高い診断です。",
    date: "2025-06-06",
    category: "新機能・サービス紹介",
    readTime: "8分で読めます",
  },
  {
    title: "雨の日の安全運転テクニック完全ガイド",
    slug: "rainy-day-safe-driving-techniques",
    excerpt:
      "雨天時の事故率は晴天時の4倍！プロドライバー直伝の安全運転テクニックで、視界不良・スリップ・追突を完全回避。車間距離の正しい取り方から緊急時の対処法まで完全解説。",
    date: "2025-06-04",
    category: "交通安全・梅雨対策",
    readTime: "12分で読めます",
  },
  {
    title: "雨天走行後の正しいボディケア方法",
    slug: "rainy-season-car-body-care",
    excerpt:
      "雨天走行後24時間以内のケアが愛車の寿命を左右！プロ直伝の洗車テクニックで、錆や汚れから完全防御する方法を完全解説。下取り価格15-20万円向上の秘訣も。",
    date: "2025-06-03",
    category: "車メンテナンス・梅雨対策",
    readTime: "10分で読めます",
  },
  {
    title: "ワイパーゴムの点検と交換タイミング",
    slug: "rainy-season-wiper-maintenance",
    excerpt:
      "ワイパーゴムの劣化は事故リスクを高める重大要因。梅雨入り前の今こそ、30秒でできる簡易点検で安全を確保しましょう。DIY交換手順も詳しく解説。",
    date: "2025-06-02",
    category: "車メンテナンス・梅雨対策",
    readTime: "7分で読めます",
  },
  {
    title: "梅雨時期の車内湿気・カビ対策完全ガイド",
    slug: "rainy-season-car-humidity-prevention",
    excerpt:
      "健康に直結する車内の湿気・カビ対策。30秒でできる換気法から本格的な除湿グッズまで、プロ直伝の予防術を完全解説。CARCLUBおすすめグッズも紹介。",
    date: "2025-06-01",
    category: "車メンテナンス・梅雨対策",
    readTime: "8分で読めます",
  },
  {
    title: "活躍するF1ドライバーとゼッケン番号の吉凶関係",
    slug: "f1-drivers-numbers",
    excerpt:
      "ルイス・ハミルトン、マックス・フェルスタッペン、角田裕毅など世界で活躍するF1ドライバーのゼッケン番号を81画理論で分析。吉数を背負うレーサーたちの成功の秘密に迫ります。",
    date: "2025-05-25",
    category: "モータースポーツ・数秘術",
    readTime: "12分で読めます",
  },
  {
    title: "81画理論の歴史的背景と現代への応用",
    slug: "81-theory-history",
    excerpt:
      "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代のナンバープレート診断まで、約100年の歴史を紐解きます。",
    date: "2025-05-20",
    category: "歴史・理論",
    readTime: "8分で読めます",
  },
  {
    title: "ナンバープレート運勢を無料で診断！プロ監修の本格的な愛車診断サービス",
    slug: "car-number-fortune-free",
    excerpt:
      "「ナンバープレートで運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できるナンバープレート運勢診断サービスをご紹介します。",
    date: "2025-05-15",
    category: "ナンバープレート診断",
    readTime: "7分で読めます",
  },
  {
    title: "高級車オーナーが選ぶナンバープレートの傾向分析",
    slug: "luxury-car-number-trends",
    excerpt:
      "フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を分析。成功者が選ぶ数字の秘密とは？",
    date: "2025-05-10",
    category: "高級車・ナンバー分析",
    readTime: "10分で読めます",
  },
  {
    title: "中古車購入時のナンバープレート選びガイド",
    slug: "used-car-number-selection",
    excerpt:
      "中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。",
    date: "2025-05-05",
    category: "中古車・ナンバー選び",
    readTime: "7分で読めます",
  },
  {
    title: "事故を避けるナンバープレートの選び方",
    slug: "accident-prevention-numbers",
    excerpt: "交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力とは？",
    date: "2025-05-01",
    category: "交通安全・数秘術",
    readTime: "8分で読めます",
  },
  {
    title: "ナンバープレート診断とは？姓名判断理論を車に応用した新しい占い",
    slug: "what-is-car-number-diagnosis",
    excerpt:
      "ナンバープレート診断は、古来より受け継がれる姓名判断の知恵を現代の愛車に応用した画期的なシステムです。あなたの愛車に秘められた運勢エネルギーを知ることで、より良いカーライフを歩むヒントが得られます。",
    date: "2025-04-15",
    category: "ナンバープレート診断基礎",
    readTime: "6分で読めます",
  },
  {
    title: "ナンバープレート運勢診断って当たるの？",
    slug: "does-car-number-fortune-work",
    excerpt: "科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。",
    date: "2025-04-18",
    category: "ナンバープレート診断",
    readTime: "6分で読めます",
  },
  {
    title: "3分でわかるナンバープレート運勢診断の仕組み",
    slug: "how-car-number-diagnosis-works",
    content: "ナンバープレート運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。",
    date: "2025-04-21",
    category: "ナンバープレート診断",
    readTime: "3分で読めます",
    excerpt: "数字の抽出から吉凶判定まで、診断の流れをわかりやすく説明",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* ヘッダー */}
        <Card className="text-center bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              ナンバープレート診断ブログ
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              ナンバープレート・愛車の運勢診断に関する最新情報、体験談、運勢アップのコツをお届けします
            </p>
          </CardHeader>
        </Card>

        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400">
            ホーム
          </Link>
          <span className="mx-2">›</span>
          <span>ブログ</span>
        </nav>

        {/* ブログ記事一覧 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm"
                  >
                    続きを読む →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの愛車のナンバープレート運勢を診断してみませんか？</h3>
            <p className="mb-4">81画理論に基づく本格診断を無料で体験</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              今すぐ診断する
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
