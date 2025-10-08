// ブログ記事の型定義
export interface BlogPost {
  title: string
  slug: string
  content: string
  date: string
  category: string
  readTime: string
  excerpt: string
}

// ブログ記事データ
export const blogPosts: BlogPost[] = [
  {
    title: "【都市伝説】呪いのナンバープレート「4229」の真相を数秘術で解明",
    slug: "cursed-number-4229-mystery",
    content:
      "ネットで噂される「呪いのナンバープレート4229」。事故が多発すると言われるこの数字の真相を、数秘術の専門家が科学的に分析。実は隠された真実が...",
    date: "2025-06-07",
    category: "都市伝説・エンターテイメント",
    readTime: "10分で読めます",
    excerpt:
      "ネットで囁かれる恐怖の数字4229。81画理論では32点の悪運、それが数秘術8番のパワーで増幅される恐ろしい真相を専門家が解明します。",
  },
  {
    title: "【新機能】数秘術による愛車性格診断が登場！プロ監修の本格的な性格分析",
    slug: "car-personality-numerology-diagnosis",
    content:
      "数秘術の専門知識を活用した革新的な愛車性格診断機能が新登場！ナンバープレートから愛車の隠された性格を解明。プロ監修による信頼性の高い診断で、あなたの愛車の真の性格を発見しましょう。",
    date: "2025-06-06",
    category: "新機能・サービス紹介",
    readTime: "8分で読めます",
    excerpt:
      "古代から伝わる数秘術の知恵を現代の愛車診断に応用した革新的な性格診断機能が登場！6つの性格タイプから愛車の個性を詳しく解析します。",
  },
  {
    title: "雨の日の安全運転テクニック完全ガイド",
    slug: "rainy-day-safe-driving-techniques",
    content:
      "雨天時の事故リスクを大幅に減らす実践的な運転テクニックを徹底解説。視界確保から車間距離、スリップ対策まで、プロドライバーが実践する安全運転の秘訣をご紹介します。",
    date: "2025-06-04",
    category: "交通安全・梅雨対策",
    readTime: "12分で読めます",
    excerpt:
      "雨天時の事故率は晴天時の約4倍！プロドライバー直伝の安全運転テクニックで、雨の日も安心してドライブを楽しみましょう。視界確保からスリップ対策まで完全網羅。",
  },
  {
    title: "雨天走行後の正しいボディケア方法",
    slug: "rainy-season-car-body-care",
    content:
      "雨の日のドライブ後、愛車のボディを錆や汚れから守る正しいケア方法を解説。プロが教える効果的な洗車テクニックと、長期間美しさを保つ秘訣をご紹介します。",
    date: "2025-06-03",
    category: "車メンテナンス・梅雨対策",
    readTime: "10分で読めます",
    excerpt:
      "雨天走行後24時間以内のケアが愛車の寿命を左右！プロ直伝の洗車テクニックで、錆や汚れから完全防御する方法を完全解説。",
  },
  {
    title: "ワイパーゴムの点検と交換タイミング",
    slug: "rainy-season-wiper-maintenance",
    content:
      "梅雨時期に欠かせないワイパーゴムの点検方法と最適な交換タイミングを解説。安全運転のために知っておくべき劣化サインと、自分でできる簡単メンテナンス方法を紹介します。",
    date: "2025-06-02",
    category: "車メンテナンス・梅雨対策",
    readTime: "7分で読めます",
    excerpt:
      "ワイパーゴムの劣化は事故リスクを高める重大要因。梅雨入り前の今こそ、30秒でできる簡易点検で安全を確保しましょう。",
  },
  {
    title: "梅雨時期の車内湿気・カビ対策完全ガイド",
    slug: "rainy-season-car-humidity-prevention",
    content:
      "梅雨の車内湿気とカビを徹底予防！プロが教える効果的な対策方法と、おすすめグッズをご紹介。健康で快適なドライブを実現しましょう。",
    date: "2025-06-01",
    category: "車メンテナンス・梅雨対策",
    readTime: "8分で読めます",
    excerpt:
      "健康に直結する車内の湿気・カビ対策。30秒でできる換気法から本格的な除湿グッズまで、プロ直伝の予防術を完全解説。",
  },
  {
    title: "活躍するF1ドライバーとゼッケン番号の吉凶関係",
    slug: "f1-drivers-numbers",
    content:
      "ルイス・ハミルトン、マックス・フェルスタッペン、角田裕毅など世界で活躍するF1ドライバーのゼッケン番号を81画理論で分析。吉数を背負うレーサーたちの成功の秘密に迫ります。",
    date: "2025-05-25",
    category: "モータースポーツ・数秘術",
    readTime: "12分で読めます",
    excerpt:
      "ルイス・ハミルトン、マックス・フェルスタッペン、角田裕毅など世界で活躍するF1ドライバーのゼッケン番号を81画理論で分析。吉数を背負うレーサーたちの成功の秘密に迫ります。",
  },
  {
    title: "81画理論の歴史的背景と現代への応用",
    slug: "81-theory-history",
    content:
      "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代のナンバープレート診断まで、約100年の歴史を紐解きます。",
    date: "2025-05-20",
    category: "歴史・理論",
    readTime: "8分で読めます",
    excerpt:
      "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代のナンバープレート診断まで、約100年の歴史を紐解きます。",
  },
  {
    title: "ナンバープレート運勢を無料で診断！プロ監修の本格的な愛車診断サービス",
    slug: "car-number-fortune-free",
    content:
      "「ナンバープレートで運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できるナンバープレート運勢診断サービスをご紹介します。",
    date: "2025-05-15",
    category: "ナンバープレート診断",
    readTime: "7分で読めます",
    excerpt:
      "完全無料で利用できるナンバープレート運勢診断サービス。プロ監修の本格的な診断で、あなたの車の運勢を詳しく分析します。",
  },
  {
    title: "高級車オーナーが選ぶナンバープレートの傾向分析",
    slug: "luxury-car-number-trends",
    content:
      "フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を分析。成功者が選ぶ数字の秘密とは？",
    date: "2025-05-10",
    category: "高級車・ナンバー分析",
    readTime: "10分で読めます",
    excerpt:
      "フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を分析。成功者が選ぶ数字の秘密とは？",
  },
  {
    title: "中古車購入時のナンバープレート選びガイド",
    slug: "used-car-number-selection",
    content:
      "中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。",
    date: "2025-05-05",
    category: "中古車・ナンバー選び",
    readTime: "7分で読めます",
    excerpt:
      "中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。",
  },
  {
    title: "事故を避けるナンバープレートの選び方",
    slug: "accident-prevention-numbers",
    content: "交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力とは？",
    date: "2025-05-01",
    category: "交通安全・数秘術",
    readTime: "8分で読めます",
    excerpt: "交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力とは？",
  },
  {
    title: "ナンバープレート診断とは？姓名判断理論を車に応用した新しい占い",
    slug: "what-is-car-number-diagnosis",
    content:
      "ナンバープレート診断は、古来より受け継がれる姓名判断の知恵を現代の愛車に応用した画期的なシステムです。あなたの愛車に秘められた運勢エネルギーを知ることで、より良いカーライフを歩むヒントが得られます。",
    date: "2025-04-15",
    category: "ナンバープレート診断基礎",
    readTime: "6分で読めます",
    excerpt:
      "姓名判断理論をナンバープレートに応用した革新的な占いシステム。愛車に秘められた運勢エネルギーを解明します。",
  },
  {
    title: "ナンバープレート運勢診断って当たるの？",
    slug: "does-car-number-fortune-work",
    content: "科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。",
    date: "2025-04-18",
    category: "ナンバープレート診断",
    readTime: "6分で読めます",
    excerpt: "開発者とNさんの実体験を交えて、診断の性質について誠実に解説",
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

// 既存のブログ記事データのエイリアス（他のファイルとの互換性のため）
export const existingBlogPosts = blogPosts

// カテゴリ一覧（実際に使用されているもののみ）
export const blogCategories = [
  "すべて",
  "車メンテナンス・梅雨対策",
  "モータースポーツ・数秘術",
  "歴史・理論",
  "サービス紹介",
  "ナンバープレート診断基礎",
  "ナンバープレート運勢",
  "ナンバープレート診断",
  "車・ナンバープレート",
  "住所診断",
  "新機能・サービス紹介",
  "都市伝説・エンターテイメント",
  "交通安全・梅雨対策",
  "高級車・ナンバー分析",
  "中古車・ナンバー選び",
]

// カテゴリ別記事取得
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "すべて") {
    return blogPosts
  }
  return blogPosts.filter((post) => post.category === category)
}

// 関連記事取得（同じカテゴリから3件）
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = blogPosts.find((post) => post.slug === currentSlug)
  if (!currentPost) return []

  return blogPosts.filter((post) => post.slug !== currentSlug && post.category === currentPost.category).slice(0, limit)
}

// 記事存在チェック
export function postExists(slug: string): boolean {
  return blogPosts.some((post) => post.slug === slug)
}

// 記事データ取得
export function getPostData(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
