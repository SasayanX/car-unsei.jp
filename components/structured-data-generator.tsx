"use client"

import { useEffect } from "react"

interface ArticleStructuredData {
  "@context": string
  "@type": string
  headline: string
  description: string
  author: {
    "@type": string
    name: string
    url: string
  }
  publisher: {
    "@type": string
    name: string
    logo: {
      "@type": string
      url: string
      width: number
      height: number
    }
  }
  datePublished: string
  dateModified: string
  mainEntityOfPage: {
    "@type": string
    "@id": string
  }
  image?: {
    "@type": string
    url: string
    width: number
    height: number
  }
  keywords?: string[]
  articleSection?: string
}

interface FAQStructuredData {
  "@context": string
  "@type": string
  mainEntity: Array<{
    "@type": string
    name: string
    acceptedAnswer: {
      "@type": string
      text: string
    }
  }>
}

interface BreadcrumbStructuredData {
  "@context": string
  "@type": string
  itemListElement: Array<{
    "@type": string
    position: number
    name: string
    item: string
  }>
}

interface WebSiteStructuredData {
  "@context": string
  "@type": string
  name: string
  url: string
  potentialAction: {
    "@type": string
    target: string
    "query-input": string
  }
}

interface StructuredDataGeneratorProps {
  type: "article" | "faq" | "breadcrumb" | "website"
  data: any
}

export function StructuredDataGenerator({ type, data }: StructuredDataGeneratorProps) {
  useEffect(() => {
    const generateStructuredData = () => {
      let structuredData: any = {}

      switch (type) {
        case "article":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.title,
            description: data.description,
            author: {
              "@type": "Person",
              name: "愛車運勢診断",
              url: "https://car-unsei.jp"
            },
            publisher: {
              "@type": "Organization",
              name: "愛車運勢診断",
              logo: {
                "@type": "ImageObject",
                url: "https://car-unsei.jp/icon-512x512.png",
                width: 512,
                height: 512
              }
            },
            datePublished: data.publishedTime || new Date().toISOString(),
            dateModified: data.modifiedTime || new Date().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": data.url || window.location.href
            },
            ...(data.image && {
              image: {
                "@type": "ImageObject",
                url: data.image.url,
                width: data.image.width || 1200,
                height: data.image.height || 630
              }
            }),
            ...(data.keywords && { keywords: data.keywords }),
            ...(data.category && { articleSection: data.category })
          } as ArticleStructuredData
          break

        case "faq":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.questions.map((q: any) => ({
              "@type": "Question",
              name: q.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: q.answer
              }
            }))
          } as FAQStructuredData
          break

        case "breadcrumb":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: data.items.map((item: any, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url
            }))
          } as BreadcrumbStructuredData
          break

        case "website":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "愛車運勢診断",
            url: "https://car-unsei.jp",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://car-unsei.jp/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          } as WebSiteStructuredData
          break
      }

      // 既存の構造化データスクリプトを削除
      const existingScript = document.querySelector(`script[data-structured-type="${type}"]`)
      if (existingScript) {
        existingScript.remove()
      }

      // 新しい構造化データスクリプトを追加
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.setAttribute("data-structured-type", type)
      script.textContent = JSON.stringify(structuredData, null, 2)
      document.head.appendChild(script)
    }

    generateStructuredData()
  }, [type, data])

  return null
}

// よく使用される構造化データのプリセット
export const CommonStructuredData = {
  // 記事用
  generateArticle: (data: {
    title: string
    description: string
    url?: string
    image?: { url: string; width?: number; height?: number }
    keywords?: string[]
    category?: string
    publishedTime?: string
    modifiedTime?: string
  }) => (
    <StructuredDataGenerator 
      type="article" 
      data={data} 
    />
  ),

  // FAQ用
  generateFAQ: (questions: Array<{ question: string; answer: string }>) => (
    <StructuredDataGenerator 
      type="faq" 
      data={{ questions }} 
    />
  ),

  // パンくずリスト用
  generateBreadcrumb: (items: Array<{ name: string; url: string }>) => (
    <StructuredDataGenerator 
      type="breadcrumb" 
      data={{ items }} 
    />
  ),

  // ウェブサイト用
  generateWebsite: () => (
    <StructuredDataGenerator 
      type="website" 
      data={{}} 
    />
  )
}

// ブログ記事用の構造化データ生成ヘルパー
export function generateBlogPostStructuredData(post: {
  title: string
  slug: string
  description: string
  date: string
  category: string
  keywords?: string[]
  image?: string
}) {
  return (
    <StructuredDataGenerator
      type="article"
      data={{
        title: post.title,
        description: post.description,
        url: `https://car-unsei.jp/blog/${post.slug}`,
        image: post.image ? {
          url: `https://car-unsei.jp${post.image}`,
          width: 1200,
          height: 630
        } : undefined,
        keywords: post.keywords || [post.category, "ナンバープレート診断"],
        category: post.category,
        publishedTime: new Date(post.date).toISOString(),
        modifiedTime: new Date().toISOString()
      }}
    />
  )
}

// よくある質問用の構造化データ
export function generateFAQStructuredData() {
  const faqs = [
    {
      question: "愛車運勢診断で性格分析もできるのですか？",
      answer: "はい、81画理論による運勢診断に加えて、数秘術による性格分析も提供しています。車のナンバープレートから運勢と性格の両方を同時に診断できます。"
    },
    {
      question: "運勢診断と性格診断の違いは何ですか？",
      answer: "運勢診断は81画理論に基づいてナンバープレートの吉凶を判定し、性格診断は数秘術の原理を用いて車との相性や運転スタイルなどの性格特性を分析します。"
    },
    {
      question: "診断は無料ですか？",
      answer: "はい、すべての診断機能を完全無料でご利用いただけます。運勢診断、性格分析、詳細な解説まで、すべて無料でお楽しみください。"
    },
    {
      question: "診断結果はどの程度信頼できますか？",
      answer: "科学的根拠はありませんが、81画理論と数秘術という長い歴史を持つ占術理論に基づいています。プロの姓名判断鑑定師による監修も受けています。"
    },
    {
      question: "どんな車のナンバーでも診断できますか？",
      answer: "はい、軽自動車から大型車まで、すべての車種のナンバープレートで診断可能です。数字部分のみでも、地名やひらがなを含めても診断できます。"
    }
  ]

  return <StructuredDataGenerator type="faq" data={{ questions: faqs }} />
}
