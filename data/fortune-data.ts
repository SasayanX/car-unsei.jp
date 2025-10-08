// 運勢データを最適化（頻繁にアクセスされるため）
export const fortuneData: Record<
  number,
  { score: number; type: string; description: string; carDescription?: string }
> = {
  1: {
    score: 100,
    type: "大吉",
    description: "出立・活躍・急上昇",
    carDescription: "最高の出発運・ドライブ運に恵まれる",
  },
  2: {
    score: 20,
    type: "大凶",
    description: "分裂・絶縁・決別",
    carDescription: "車両トラブルや事故に注意が必要",
  },
  3: {
    score: 100,
    type: "大吉",
    description: "活動・積極的・陽気",
    carDescription: "アクティブなドライブと楽しい車旅を約束",
  },
  4: {
    score: 20,
    type: "大凶",
    description: "災難・不幸・悲運",
    carDescription: "車両事故や機械トラブルに要注意",
  },
  5: {
    score: 100,
    type: "大吉",
    description: "成功・実現",
    carDescription: "目的地への到達と願望成就の運",
  },
  6: {
    score: 100,
    type: "大吉",
    description: "福徳・歓喜・地位",
    carDescription: "高級車や理想の愛車との出会い運",
  },
  7: {
    score: 65,
    type: "吉",
    description: "成長・発展・進歩",
    carDescription: "運転技術向上と車への愛着が深まる",
  },
  8: {
    score: 80,
    type: "中吉",
    description: "意志・活発・達成",
    carDescription: "力強い走行と目標達成をサポート",
  },
  9: {
    score: 40,
    type: "中凶",
    description: "孤立・絶縁・決裂",
    carDescription: "一人旅は良いが人間関係のトラブルに注意",
  },
  10: {
    score: 40,
    type: "中凶",
    description: "無力・不器用・挫折",
    carDescription: "運転ミスや駐車トラブルに要注意",
  },
  11: {
    score: 100,
    type: "大吉",
    description: "独立・安定・聡明",
    carDescription: "自立したカーライフと賢明な車選び",
  },
  12: {
    score: 20,
    type: "大凶",
    description: "誤解・錯覚・絶縁",
    carDescription: "道迷いや判断ミスによる事故に注意",
  },
  13: {
    score: 100,
    type: "大吉",
    description: "賢明・知恵・利口",
    carDescription: "賢い車選びと安全運転の知恵",
  },
  14: {
    score: 20,
    type: "大凶",
    description: "絶望・破滅・波乱",
    carDescription: "重大事故や車両の全損に要警戒",
  },
  15: {
    score: 100,
    type: "大吉",
    description: "堅実・専門・着実",
    carDescription: "堅実な運転と車のメンテナンス運",
  },
  16: {
    score: 100,
    type: "大吉",
    description: "指導・地位・財産",
    carDescription: "運転指導者や高級車オーナーの素質",
  },
  17: {
    score: 65,
    type: "吉",
    description: "率直・直進・威厳",
    carDescription: "真っ直ぐな道のりと堂々とした運転",
  },
  18: {
    score: 80,
    type: "中吉",
    description: "忍耐・気力・活気",
    carDescription: "長距離運転と困難な道のりを乗り越える力",
  },
  19: {
    score: 30,
    type: "凶",
    description: "強情・頑固・偏屈",
    carDescription: "頑固な運転癖や交通ルール違反に注意",
  },
  20: {
    score: 30,
    type: "凶",
    description: "崩壊・陥没・混乱",
    carDescription: "車両故障や道路状況の混乱に巻き込まれやすい",
  },
  21: {
    score: 100,
    type: "大吉",
    description: "独立・自立・自由",
    carDescription: "自由なドライブと独立したカーライフ",
  },
  22: {
    score: 20,
    type: "大凶",
    description: "無力・不器用・挫折",
    carDescription: "運転技術の未熟さによる事故に注意",
  },
  23: {
    score: 100,
    type: "大吉",
    description: "発展・朝日・進捗",
    carDescription: "新しいカーライフの始まりと発展",
  },
  24: {
    score: 100,
    type: "大吉",
    description: "財産・裕福・富豪",
    carDescription: "高級車購入や車関連投資の成功",
  },
  25: {
    score: 80,
    type: "中吉",
    description: "安定・根性・気難",
    carDescription: "安定した運転技術と車への愛着",
  },
  26: {
    score: 40,
    type: "中凶",
    description: "横柄・傲慢・威圧",
    carDescription: "あおり運転や傲慢な運転態度に注意",
  },
  27: {
    score: 30,
    type: "凶",
    description: "独特・特殊・癖",
    carDescription: "特殊な運転癖や変わった車の趣味",
  },
  28: {
    score: 30,
    type: "凶",
    description: "混乱・動揺・騒動",
    carDescription: "交通渋滞や騒がしい車内環境",
  },
  29: {
    score: 80,
    type: "中吉",
    description: "独特・特殊・癖",
    carDescription: "個性的な運転スタイルと特別な車への愛着",
  },
  30: {
    score: 40,
    type: "中凶",
    description: "強気・攻撃・強引",
    carDescription: "強引な運転や無謀な追い越しに注意",
  },
  31: {
    score: 100,
    type: "大吉",
    description: "権威・成果・躍動",
    carDescription: "カーレースや運転競技での成功",
  },
  32: {
    score: 100,
    type: "大吉",
    description: "幸運・頑丈・良縁",
    carDescription: "丈夫な愛車と良いカーライフパートナー",
  },
  33: {
    score: 100,
    type: "大吉",
    description: "美形・才能・逸材",
    carDescription: "美しい愛車と優れた運転センス",
  },
  34: {
    score: 30,
    type: "凶",
    description: "破滅・奇抜・人気",
    carDescription: "奇抜な改造車や目立ちすぎる車に注意",
  },
  35: {
    score: 100,
    type: "大吉",
    description: "学問・知識・常識",
    carDescription: "車の知識と交通ルールの理解が深い",
  },
  36: {
    score: 40,
    type: "中凶",
    description: "無駄・厄難・無益",
    carDescription: "無駄な燃費や不要な車の装備",
  },
  37: {
    score: 65,
    type: "吉",
    description: "権威・指導・命令",
    carDescription: "運転指導や車関連の指導的立場",
  },
  38: {
    score: 65,
    type: "吉",
    description: "技能・才能・技術",
    carDescription: "優れた運転技術と車の整備技能",
  },
  39: {
    score: 100,
    type: "大吉",
    description: "繁栄・成功・事業",
    carDescription: "車関連事業の成功と繁栄",
  },
  40: {
    score: 40,
    type: "中凶",
    description: "強情・見栄・強烈",
    carDescription: "見栄っ張りな車選びや強情な運転",
  },
  41: {
    score: 100,
    type: "大吉",
    description: "大物・権力・勢力",
    carDescription: "大型車や権威ある車との縁",
  },
  42: {
    score: 20,
    type: "大凶",
    description: "傷心・衝突・精神",
    carDescription: "車両衝突事故や精神的ショック",
  },
  43: {
    score: 30,
    type: "凶",
    description: "品位・批判・葛藤",
    carDescription: "車の品位や運転マナーへの批判",
  },
  44: {
    score: 20,
    type: "大凶",
    description: "厄難・悲運・不幸",
    carDescription: "重大な車両事故や不幸な出来事",
  },
  45: {
    score: 100,
    type: "大吉",
    description: "願望・理想・順風",
    carDescription: "理想の愛車との出会いと順調なドライブ",
  },
  46: {
    score: 40,
    type: "中凶",
    description: "変化・浮沈・困難",
    carDescription: "車の調子の浮き沈みや運転の困難",
  },
  47: {
    score: 100,
    type: "大吉",
    description: "最上級・格上・優秀",
    carDescription: "最高級車や優秀な運転技術",
  },
  48: {
    score: 80,
    type: "中吉",
    description: "冷静・平穏・公平",
    carDescription: "冷静な判断力と平穏な運転",
  },
  49: {
    score: 30,
    type: "凶",
    description: "変人・異常・独特",
    carDescription: "変わった運転癖や異常な車の趣味",
  },
  50: {
    score: 40,
    type: "中凶",
    description: "停滞・泥沼・挫折",
    carDescription: "渋滞や車の故障による停滞",
  },
  51: {
    score: 65,
    type: "吉",
    description: "律儀・真面目・堅実",
    carDescription: "真面目な運転と堅実な車選び",
  },
  52: {
    score: 100,
    type: "大吉",
    description: "隆盛・成功・開花",
    carDescription: "カーライフの充実と成功",
  },
  53: {
    score: 40,
    type: "中凶",
    description: "好機・挫折・失敗",
    carDescription: "チャンスを逃しやすい運転判断",
  },
  54: {
    score: 30,
    type: "凶",
    description: "欠乏・不備・障害",
    carDescription: "車の整備不良や燃料不足",
  },
  55: {
    score: 40,
    type: "中凶",
    description: "好機・挫折・失敗",
    carDescription: "良い車との出会いを逃しやすい",
  },
  56: {
    score: 40,
    type: "中凶",
    description: "動揺・低迷・不運",
    carDescription: "運転中の動揺や車の調子の悪さ",
  },
  57: {
    score: 65,
    type: "吉",
    description: "安定・調和・標準",
    carDescription: "安定した運転と調和のとれたカーライフ",
  },
  58: {
    score: 80,
    type: "中吉",
    description: "再起・復活・上達",
    carDescription: "運転技術の向上と車への愛の復活",
  },
  59: {
    score: 30,
    type: "凶",
    description: "非凡・変動・悲観",
    carDescription: "変わった車や不安定な運転状況",
  },
  60: {
    score: 40,
    type: "中凶",
    description: "脅迫・束縛・強情",
    carDescription: "交通ルールに縛られすぎる運転",
  },
  61: {
    score: 100,
    type: "大吉",
    description: "人望・評判・流行",
    carDescription: "人気の車種や評判の良い運転",
  },
  62: {
    score: 40,
    type: "中凶",
    description: "落胆・沈痛・憂鬱",
    carDescription: "車の故障や事故による落胆",
  },
  63: {
    score: 65,
    type: "吉",
    description: "勝者・地位・一流",
    carDescription: "カーレースでの勝利や一流の運転技術",
  },
  64: {
    score: 30,
    type: "凶",
    description: "絶望・失意・悲観",
    carDescription: "車関連の大きな失望や絶望",
  },
  65: {
    score: 100,
    type: "大吉",
    description: "繁栄・円滑・成功",
    carDescription: "円滑な交通と繁栄するカーライフ",
  },
  66: {
    score: 40,
    type: "中凶",
    description: "浪費・軽率・失墜",
    carDescription: "車への無駄遣いや軽率な運転",
  },
  67: {
    score: 65,
    type: "吉",
    description: "天命・勝負・惨事",
    carDescription: "運命的な車との出会いと勝負運",
  },
  68: {
    score: 80,
    type: "中吉",
    description: "無傷・万全・完璧",
    carDescription: "無事故運転と完璧な車のコンディション",
  },
  69: {
    score: 40,
    type: "中凶",
    description: "怠慢・軽視・横着",
    carDescription: "車のメンテナンス怠慢や横着な運転",
  },
  70: {
    score: 40,
    type: "中凶",
    description: "高圧・横暴・弾圧",
    carDescription: "高圧的な運転や横暴な車の使い方",
  },
  71: {
    score: 65,
    type: "吉",
    description: "熱心・欲求・急変",
    carDescription: "車への熱心な愛情と急な環境変化",
  },
  72: {
    score: 20,
    type: "大凶",
    description: "浪費・消耗・苦悩",
    carDescription: "車への過度な出費と燃料消費",
  },
  73: {
    score: 30,
    type: "凶",
    description: "闘争・競争・反感",
    carDescription: "カーレースでの激しい競争や対立",
  },
  74: {
    score: 20,
    type: "大凶",
    description: "急変・変化・破滅",
    carDescription: "突然の車両故障や急激な状況変化",
  },
  75: {
    score: 65,
    type: "吉",
    description: "適応・軽薄・無謀",
    carDescription: "様々な車への適応力と軽快な運転",
  },
  76: {
    score: 40,
    type: "中凶",
    description: "不能・非力・不器用",
    carDescription: "運転技術の未熟さや車の扱いの不器用さ",
  },
  77: {
    score: 65,
    type: "吉",
    description: "復活・再起・再生",
    carDescription: "車の修理復活や運転技術の再生",
  },
  78: {
    score: 80,
    type: "中吉",
    description: "資格・応用・精気",
    carDescription: "運転免許や車関連資格の取得",
  },
  79: {
    score: 80,
    type: "中吉",
    description: "意志・活発・達成",
    carDescription: "強い意志による目標達成と活発な運転",
  },
  80: {
    score: 40,
    type: "中凶",
    description: "悲観・困窮・困難",
    carDescription: "車関連の経済的困難や悲観的状況",
  },
  81: {
    score: 100,
    type: "大吉",
    description: "天徳・至福・有徳",
    carDescription: "天に愛される最高のカーライフと至福の運転",
  },
}

// スコア変換を最適化
const scoreMap: Record<string, number> = {
  大吉: 100,
  中吉: 80,
  吉: 65,
  凶: 40,
  中凶: 30,
  大凶: 20,
}

export const getScoreFromType = (type: string): number => scoreMap[type] || 50

// コメント生成を最適化（車関連に変更）
export const getFortuneComment = (
  score: number,
): { title: string; message: string; color: string; bgColor: string } => {
  if (score >= 100) {
    return {
      title: "🌟 天運・神域級の運勢 🌟",
      message:
        "🎊 満点達成！おめでとうございます！🎊\nこのナンバーは天の恵みを受けた神域級のパワーナンバー！乗るだけで奇跡が起こり、人生のすべてが最高の方向へ導かれる究極の愛車です。まさに運命に選ばれた特別なナンバープレートです！",
      color: "text-yellow-800",
      bgColor: "bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 animate-golden-pulse",
    }
  }
  if (score >= 85) {
    return {
      title: "大吉・最強運",
      message:
        "このナンバーはまさにパワーナンバー！乗るだけで運気がどんどん上昇し、仕事も人間関係も順調に発展していきます。",
      color: "text-red-600",
      bgColor: "bg-red-50",
    }
  }
  if (score >= 70) {
    return {
      title: "中吉・強運",
      message:
        "とても良い運気が流れています。安全運転と共に、すべてが順調に進みやすく、安定した幸運に恵まれるでしょう。",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    }
  }
  if (score >= 65) {
    return {
      title: "吉・良運",
      message: "良い運勢です。日常の運転が穏やかに流れ、安心してドライブできる愛車。努力が実を結びやすい環境です。",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    }
  }
  if (score >= 40) {
    return {
      title: "凶・低運",
      message:
        "運気が停滞しやすいナンバーです。こまめな車のメンテナンスや車内の掃除、ラッキーアイテムの活用で運気向上を図りましょう。",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    }
  }
  if (score >= 30) {
    return {
      title: "中凶・注意運",
      message: "やや注意が必要な運勢です。慎重な運転を心がけ、車内環境を整えることで運気改善の可能性があります。",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    }
  }
  return {
    title: "大凶・要注意",
    message:
      "要注意！このナンバーは運勢的に厳しい傾向です。車内環境の改善や買い替えの検討、交通安全お守りの活用をおすすめします。",
    color: "text-red-800",
    bgColor: "bg-red-100",
  }
}

// 統計情報
export const fortuneStats = {
  大吉: 23,
  中吉: 6,
  吉: 8,
  凶: 9,
  中凶: 15,
  大凶: 5,
}
