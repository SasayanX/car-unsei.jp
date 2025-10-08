"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, TrendingUp, Clock } from "lucide-react"

interface RelatedArticle {
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  priority: number
  keywords: string[]
}

interface RelatedArticlesEnhancedProps {
  currentSlug: string
  currentCategory?: string
  limit?: number
}

// 記事データ（実際のプロダクトではCMSから取得）
const articles: RelatedArticle[] = [
  {
    title: "81画理論の歴史的背景と現代への応用",
    slug: "81-theory-history",
    excerpt: "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代のナンバープレート診断まで、約100年の歴史を紐解きます。",
    category: "歴史・理論",
    readTime: "8分で読めます",
    priority: 9,
    keywords: ["81画理論", "歴史", "熊崎健翁", "姓名判断"]
  },
  {
    title: "【都市伝説】呪いのナンバープレート「4229」の真相を数秘術で解明",
    slug: "cursed-number-4229-mystery",
    excerpt: "ネットで噂される「呪いのナンバープレート4229」。事故が多発すると言われるこの数字の真相を、数秘術の専門家が科学的に分析。実は隠された真実が...",
    category: "都市伝説・エンターテイメント",
    readTime: "10分で読めます",
    priority: 8,
    keywords: ["都市伝説", "4229", "呪い", "数秘術", "事故"]
  },
  {
    title: "【新機能】数秘術による愛車性格診断が登場！プロ監修の本格的な性格分析",
    slug: "car-personality-numerology-diagnosis",
    excerpt: "数秘術の専門知識を活用した革新的な愛車性格診断機能が新登場！ナンバープレートから愛車の隠された性格を解明。プロ監修による信頼性の高い診断で、あなたの愛車の真の性格を発見しましょう。",
    category: "新機能・サービス紹介",
    readTime: "8分で読めます",
    priority: 10,
    keywords: ["数秘術", "性格診断", "新機能", "プロ監修"]
  },
  {
    title: "雨の日の安全運転テクニック完全ガイド",
    slug: "rainy-day-safe-driving-techniques",
    excerpt: "雨天時の事故リスクを大幅に減らす実践的な運転テクニックを徹底解説。視界確保から車間距離、スリップ対策まで、プロドライバーが実践する安全運転の秘訣をご紹介します。",
    category: "交通安全・梅雨対策",
    readTime: "12分で読めます",
    priority: 7,
    keywords: ["雨天運転", "安全運転", "事故防止", "テクニック"]
  },
  {
    title: "雨天走行後の正しいボディケア方法",
    slug: "rainy-season-car-body-care",
    excerpt: "雨の日のドライブ後、愛車のボディを錆や汚れから守る正しいケア方法を解説。プロが教える効果的な洗車テクニックと、長期間美しさを保つ秘訣をご紹介します。",
    category: "車メンテナンス・梅雨対策",
    readTime: "10分で読めます",
    priority: 6,
    keywords: ["ボディケア", "洗車", "錆対策", "メンテナンス"]
  },
  {
    title: "ワイパーゴムの点検と交換タイミング",
    slug: "rainy-season-wiper-maintenance",
    excerpt: "梅雨時期に欠かせないワイパーゴムの点検方法と最適な交換タイミングを解説。安全運転のために知っておくべき劣化サインと、自分でできる簡単メンテナンス方法を紹介します。",
    category: "車メンテナンス・梅雨対策",
    readTime: "7分で読めます",
    priority: 5,
    keywords: ["ワイパー", "メンテナンス", "点検", "交換"]
  },
  {
    title: "梅雨時期の車内湿気・カビ対策完全ガイド",
    slug: "rainy-season-car-humidity-prevention",
    excerpt: "梅雨の車内湿気とカビを徹底予防！プロが教える効果的な対策方法と、おすすめグッズをご紹介。健康で快適なドライブを実現しましょう。",
    category: "車メンテナンス・梅雨対策",
    readTime: "8分で読めます",
    priority: 4,
    keywords: ["湿気対策", "カビ予防", "除湿", "健康"]
  },
  {
    title: "活躍するF1ドライバーとゼッケン番号の吉凶関係",
    slug: "f1-drivers-numbers",
    excerpt: "ルイス・ハミルトン、マックス・フェルスタッペン、角田裕毅など世界で活躍するF1ドライバーのゼッケン番号を81画理論で分析。吉数を背負うレーサーたちの成功の秘密に迫ります。",
    category: "モータースポーツ・数秘術",
    readTime: "12分で読めます",
    priority: 8,
    keywords: ["F1", "ドライバー", "ゼッケン番号", "吉凶"]
  },
  {
    title: "ナンバープレート運勢を無料で診断！プロ監修の本格的な愛車診断サービス",
    slug: "car-number-fortune-free",
    excerpt: "「ナンバープレートで運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できるナンバープレート運勢診断サービスをご紹介します。",
    category: "ナンバープレート診断",
    readTime: "7分で読めます",
    priority: 9,
    keywords: ["無料診断", "プロ監修", "運勢", "ナンバープレート"]
  },
  {
    title: "高級車オーナーが選ぶナンバープレートの傾向分析",
    slug: "luxury-car-number-trends",
    excerpt: "フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を分析。成功者が選ぶ数字の秘密とは？",
    category: "高級車・ナンバー分析",
    readTime: "10分で読めます",
    priority: 7,
    keywords: ["高級車", "オーナー", "傾向", "成功者"]
  },
  {
    title: "中古車購入時のナンバープレート選びガイド",
    slug: "used-car-number-selection",
    excerpt: "中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。",
    category: "中古車・ナンバー選び",
    readTime: "7分で読めます",
    priority: 6,
    keywords: ["中古車", "購入", "ナンバー選び", "ガイド"]
  },
  {
    title: "事故を避けるナンバープレートの選び方",
    slug: "accident-prevention-numbers",
    excerpt: "交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力とは？",
    category: "交通安全・数秘術",
    readTime: "8分で読めます",
    priority: 8,
    keywords: ["事故防止", "交通安全", "ナンバー選び", "数秘術"]
  },
  {
    title: "ナンバープレート診断とは？姓名判断理論を車に応用した新しい占い",
    slug: "what-is-car-number-diagnosis",
    excerpt: "ナンバープレート診断は、古来より受け継がれる姓名判断の知恵を現代の愛車に応用した画期的なシステムです。あなたの愛車に秘められた運勢エネルギーを知ることで、より良いカーライフを歩むヒントが得られます。",
    category: "ナンバープレート診断基礎",
    readTime: "6分で読めます",
    priority: 9,
    keywords: ["診断とは", "姓名判断", "理論", "基礎"]
  },
  {
    title: "ナンバープレート運勢診断って当たるの？",
    slug: "does-car-number-fortune-work",
    excerpt: "科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。",
    category: "ナンバープレート診断",
    readTime: "6分で読めます",
    priority: 8,
    keywords: ["当たる", "体験談", "科学的根拠", "客観的"]
  },
  {
    title: "3分でわかるナンバープレート運勢診断の仕組み",
    slug: "how-car-number-diagnosis-works",
    excerpt: "ナンバープレート運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。",
    category: "ナンバープレート診断",
    readTime: "3分で読めます",
    priority: 7,
    keywords: ["仕組み", "3分", "基本", "解説"]
  }
]

export function RelatedArticlesEnhanced({ 
  currentSlug, 
  currentCategory, 
  limit = 4 
}: RelatedArticlesEnhancedProps) {
  // 関連記事を取得するロジック
  const getRelatedArticles = (): RelatedArticle[] => {
    // 1. 同じカテゴリの記事を優先
    const sameCategory = articles.filter(
      article => article.slug !== currentSlug && 
      article.category === currentCategory
    )
    
    // 2. 他のカテゴリから高優先度の記事
    const otherCategory = articles.filter(
      article => article.slug !== currentSlug && 
      article.category !== currentCategory
    )
    
    // 3. 優先度でソート
    const combined = [...sameCategory, ...otherCategory]
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit)
    
    return combined
  }

  const relatedArticles = getRelatedArticles()

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
          <TrendingUp className="w-5 h-5" />
          関連記事
          <Badge variant="outline" className="ml-auto text-xs">
            SEO最適化
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {relatedArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.keywords.slice(0, 2).map((keyword, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* 全記事へのリンク */}
        <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
          >
            <TrendingUp className="w-4 h-4" />
            すべての記事を見る
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
