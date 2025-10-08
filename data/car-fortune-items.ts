interface CarFortuneItem {
  name: string
  emoji: string
  category: string
  description: string
  placement: string
  effect: string
  searchKeyword?: string
  affiliateUrl?: string
}

const carFortuneItems: Record<string, CarFortuneItem> = {
  legendary: {
    name: "黄金の龍神カーチャーム",
    emoji: "🐉",
    category: "最高級お守り",
    description:
      "伝説級の運勢にふさわしい、黄金に輝く龍神のカーチャーム。交通安全と金運上昇を同時に叶える最強のアイテムです。",
    placement: "ルームミラーまたはダッシュボード中央",
    effect: "交通安全、金運上昇、事業成功",
    searchKeyword: "龍神 カーチャーム 交通安全",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  excellent: {
    name: "水晶クラスター",
    emoji: "💎",
    category: "浄化開運",
    description: "車内の邪気を払い、良いエネルギーを循環させる天然水晶。運転中の集中力向上と安全運転をサポートします。",
    placement: "ダッシュボードまたはセンターコンソール",
    effect: "浄化、集中力向上、安全運転",
    searchKeyword: "水晶クラスター 車",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  good: {
    name: "交通安全お守り",
    emoji: "🛡️",
    category: "安全祈願",
    description: "神社で祈祷された本格的な交通安全お守り。日々の運転を見守り、事故から身を守ってくれます。",
    placement: "ルームミラーまたはサンバイザー",
    effect: "交通安全、事故防止、安心感",
    searchKeyword: "交通安全 お守り",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  normal: {
    name: "アロマディフューザー",
    emoji: "🌸",
    category: "リラックス",
    description: "車内を良い香りで満たし、運転中のストレスを軽減。心地よい空間で運気も自然とアップします。",
    placement: "エアコン吹き出し口",
    effect: "リラックス、ストレス軽減、気分向上",
    searchKeyword: "車 アロマディフューザー",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  improve: {
    name: "竹炭消臭剤",
    emoji: "🎋",
    category: "浄化消臭",
    description: "車内の悪い気を吸収し、清浄な空間を作り出す竹炭。運気改善の第一歩として最適です。",
    placement: "座席下またはトランク",
    effect: "浄化、消臭、空気清浄",
    searchKeyword: "竹炭 車 消臭",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  purify: {
    name: "盛り塩セット",
    emoji: "🧂",
    category: "強力浄化",
    description: "強力な浄化作用を持つ盛り塩。車内の悪い気を一掃し、新しいエネルギーを呼び込みます。",
    placement: "車内の四隅（小皿に盛って）",
    effect: "強力浄化、厄除け、運気リセット",
    searchKeyword: "盛り塩 浄化",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
  reset: {
    name: "幸運の鈴",
    emoji: "🔔",
    category: "開運魔除け",
    description: "美しい音色で邪気を払い、幸運を呼び込む鈴。車の振動で自然に鳴り、常に良いエネルギーを循環させます。",
    placement: "ルームミラーまたはキーホルダー",
    effect: "開運、魔除け、幸運招来",
    searchKeyword: "幸運の鈴 車",
    affiliateUrl: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE",
  },
}

export function getCarFortuneItem(score: number): CarFortuneItem {
  if (score >= 90) return carFortuneItems.legendary
  if (score >= 80) return carFortuneItems.excellent
  if (score >= 70) return carFortuneItems.good
  if (score >= 50) return carFortuneItems.normal
  if (score >= 40) return carFortuneItems.improve
  if (score >= 30) return carFortuneItems.purify
  return carFortuneItems.reset
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    最高級お守り: "bg-yellow-200 text-yellow-800 border-yellow-400",
    浄化開運: "bg-purple-200 text-purple-800 border-purple-400",
    安全祈願: "bg-blue-200 text-blue-800 border-blue-400",
    リラックス: "bg-green-200 text-green-800 border-green-400",
    浄化消臭: "bg-gray-200 text-gray-800 border-gray-400",
    強力浄化: "bg-red-200 text-red-800 border-red-400",
    開運魔除け: "bg-orange-200 text-orange-800 border-orange-400",
  }
  return colors[category] || "bg-gray-200 text-gray-800 border-gray-400"
}

export function getAmazonSearchUrl(keyword: string): string {
  const encodedKeyword = encodeURIComponent(keyword)
  return `https://www.amazon.co.jp/s?k=${encodedKeyword}&tag=YOUR_AMAZON_TAG`
}
