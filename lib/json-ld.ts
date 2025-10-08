/**
 * JSON-LD構造化データ生成ユーティリティ
 */

// ブログ記事用のJSON-LD生成
export function generateBlogPostJsonLd(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  imageUrl?: string,
  authorName = "車運勢チェッカー編集部",
  keywords: string[] = [],
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://car-unsei.jp"
  const url = `${baseUrl}/blog/${slug}`
  const image = imageUrl || `${baseUrl}/images/og-default.png`

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description: description,
    image: image,
    keywords: keywords.join(", "),
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "車運勢チェッカー",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
        width: 600,
        height: 60,
      },
    },
  }
}

// FAQページ用のJSON-LD生成
export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// ハウツー記事用のJSON-LD生成
export function generateHowToJsonLd(
  title: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime = "PT30M",
  tools: string[] = [],
  supplies: string[] = [],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    totalTime: totalTime,
    tool: tools.map((tool) => ({
      "@type": "HowToTool",
      name: tool,
    })),
    supply: supplies.map((supply) => ({
      "@type": "HowToSupply",
      name: supply,
    })),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: step.image,
      }),
    })),
  }
}

// サービス用のJSON-LD生成
export function generateServiceJsonLd(
  name: string,
  description: string,
  url: string,
  imageUrl?: string,
  provider = "車運勢チェッカー",
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://car-unsei.jp"
  const image = imageUrl || `${baseUrl}/images/service-default.png`

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    image: image,
  }
}
