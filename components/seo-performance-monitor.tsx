"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Clock, 
  Eye, 
  Search, 
  AlertTriangle, 
  CheckCircle,
  ExternalLink,
  Zap,
  Smartphone,
  Globe
} from "lucide-react"

interface WebVitals {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
}

interface SEOPerformanceData {
  pageTitle: string
  metaDescription: string
  metaDescriptionLength: number
  headingStructure: {
    h1: number
    h2: number
    h3: number
    h4: number
  }
  internalLinks: number
  externalLinks: number
  imagesWithAlt: number
  imagesWithoutAlt: number
  structuredDataCount: number
  wordCount: number
  webVitals: WebVitals
  mobileFriendly: boolean
  sslEnabled: boolean
}

export function SEOPerformanceMonitor() {
  const [performanceData, setPerformanceData] = useState<SEOPerformanceData | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [score, setScore] = useState(0)

  const analyzeSEO = async () => {
    setIsAnalyzing(true)
    
    try {
      // ページタイトルとメタディスクリプション
      const title = document.title
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      
      // 見出し構造の分析
      const h1 = document.querySelectorAll('h1').length
      const h2 = document.querySelectorAll('h2').length
      const h3 = document.querySelectorAll('h3').length
      const h4 = document.querySelectorAll('h4').length
      
      // リンク分析
      const internalLinks = document.querySelectorAll('a[href^="/"]').length
      const externalLinks = document.querySelectorAll('a[href^="http"]').length
      
      // 画像分析
      const images = document.querySelectorAll('img')
      const imagesWithAlt = Array.from(images).filter(img => img.getAttribute('alt')).length
      const imagesWithoutAlt = images.length - imagesWithAlt
      
      // 構造化データ
      const structuredDataCount = document.querySelectorAll('script[type="application/ld+json"]').length
      
      // 文字数カウント
      const textContent = document.body.innerText
      const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length
      
      // Web Vitals (簡易版)
      const webVitals: WebVitals = {}
      
      // LCP (Largest Contentful Paint) の簡易測定
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lcpEntry = entries[entries.length - 1]
            webVitals.lcp = lcpEntry.startTime
          })
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          console.log('LCP measurement not supported')
        }
      }
      
      // モバイルフレンドリー判定
      const mobileFriendly = window.innerWidth <= 768 || 
        document.querySelector('meta[name="viewport"]') !== null
      
      // SSL判定
      const sslEnabled = location.protocol === 'https:'
      
      const data: SEOPerformanceData = {
        pageTitle: title,
        metaDescription,
        metaDescriptionLength: metaDescription.length,
        headingStructure: { h1, h2, h3, h4 },
        internalLinks,
        externalLinks,
        imagesWithAlt,
        imagesWithoutAlt,
        structuredDataCount,
        wordCount,
        webVitals,
        mobileFriendly,
        sslEnabled
      }
      
      setPerformanceData(data)
      
      // スコア計算
      let seoScore = 0
      
      // タイトル (10点)
      if (title.length >= 30 && title.length <= 60) seoScore += 10
      else if (title.length > 0) seoScore += 5
      
      // メタディスクリプション (10点)
      if (metaDescription.length >= 120 && metaDescription.length <= 160) seoScore += 10
      else if (metaDescription.length > 0) seoScore += 5
      
      // 見出し構造 (15点)
      if (h1 === 1) seoScore += 5
      if (h2 >= 2) seoScore += 5
      if (h3 >= 1) seoScore += 5
      
      // 内部リンク (15点)
      if (internalLinks >= 3) seoScore += 15
      else if (internalLinks >= 1) seoScore += 10
      
      // 画像alt属性 (15点)
      const imageAltRatio = imagesWithAlt / (images.length || 1)
      if (imageAltRatio === 1) seoScore += 15
      else if (imageAltRatio >= 0.8) seoScore += 10
      else if (imageAltRatio >= 0.5) seoScore += 5
      
      // 構造化データ (10点)
      if (structuredDataCount >= 1) seoScore += 10
      
      // コンテンツ量 (10点)
      if (wordCount >= 300) seoScore += 10
      else if (wordCount >= 150) seoScore += 5
      
      // モバイルフレンドリー (5点)
      if (mobileFriendly) seoScore += 5
      
      // SSL (5点)
      if (sslEnabled) seoScore += 5
      
      setScore(Math.min(100, seoScore))
      
    } catch (error) {
      console.error('SEO analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  useEffect(() => {
    analyzeSEO()
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100"
    if (score >= 70) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5" />
    if (score >= 70) return <AlertTriangle className="w-5 h-5" />
    return <AlertTriangle className="w-5 h-5" />
  }

  if (!performanceData) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardContent className="p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">SEO分析中...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* スコア表示 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            SEOパフォーマンス
            <Badge className={`ml-auto ${getScoreColor(score)}`}>
              {score}/100
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-full ${getScoreColor(score)}`}>
              {getScoreIcon(score)}
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {score >= 90 ? "優秀" : score >= 70 ? "良好" : "改善必要"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {score >= 90 
                  ? "SEO対策が完璧に実装されています" 
                  : score >= 70 
                    ? "基本的なSEO対策は整っています" 
                    : "SEO対策の改善が必要です"
                }
              </p>
            </div>
          </div>
          
          <Button 
            onClick={analyzeSEO} 
            disabled={isAnalyzing}
            className="w-full"
            variant="outline"
          >
            {isAnalyzing ? "分析中..." : "再分析"}
          </Button>
        </CardContent>
      </Card>

      {/* 詳細分析 */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* 基本SEO */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">基本SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">タイトル</span>
              <Badge variant={performanceData.pageTitle.length >= 30 && performanceData.pageTitle.length <= 60 ? "default" : "secondary"}>
                {performanceData.pageTitle.length}文字
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">メタディスクリプション</span>
              <Badge variant={performanceData.metaDescriptionLength >= 120 && performanceData.metaDescriptionLength <= 160 ? "default" : "secondary"}>
                {performanceData.metaDescriptionLength}文字
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">構造化データ</span>
              <Badge variant={performanceData.structuredDataCount > 0 ? "default" : "secondary"}>
                {performanceData.structuredDataCount}個
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* コンテンツ構造 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">コンテンツ構造</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">H1見出し</span>
              <Badge variant={performanceData.headingStructure.h1 === 1 ? "default" : "secondary"}>
                {performanceData.headingStructure.h1}個
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">H2見出し</span>
              <Badge variant={performanceData.headingStructure.h2 >= 2 ? "default" : "secondary"}>
                {performanceData.headingStructure.h2}個
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">文字数</span>
              <Badge variant={performanceData.wordCount >= 300 ? "default" : "secondary"}>
                {performanceData.wordCount}文字
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* リンクと画像 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">リンクと画像</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">内部リンク</span>
              <Badge variant={performanceData.internalLinks >= 3 ? "default" : "secondary"}>
                {performanceData.internalLinks}個
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">外部リンク</span>
              <Badge variant="outline">
                {performanceData.externalLinks}個
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">画像alt属性</span>
              <Badge variant={performanceData.imagesWithoutAlt === 0 ? "default" : "secondary"}>
                {performanceData.imagesWithAlt}/{performanceData.imagesWithAlt + performanceData.imagesWithoutAlt}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* 技術的要件 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">技術的要件</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">モバイル対応</span>
              <Badge variant={performanceData.mobileFriendly ? "default" : "secondary"}>
                <Smartphone className="w-3 h-3 mr-1" />
                {performanceData.mobileFriendly ? "対応済み" : "未対応"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">SSL証明書</span>
              <Badge variant={performanceData.sslEnabled ? "default" : "secondary"}>
                <Globe className="w-3 h-3 mr-1" />
                {performanceData.sslEnabled ? "有効" : "無効"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Web Vitals</span>
              <Badge variant="outline">
                <Zap className="w-3 h-3 mr-1" />
                測定中
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 改善提案 */}
      {score < 90 && (
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-yellow-800 dark:text-yellow-200">
              <AlertTriangle className="w-5 h-5 inline mr-2" />
              改善提案
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {performanceData.pageTitle.length < 30 && (
                <li>• タイトルを30文字以上に拡張してください</li>
              )}
              {performanceData.metaDescriptionLength < 120 && (
                <li>• メタディスクリプションを120文字以上に拡張してください</li>
              )}
              {performanceData.headingStructure.h1 !== 1 && (
                <li>• H1見出しを1つに統一してください</li>
              )}
              {performanceData.internalLinks < 3 && (
                <li>• 内部リンクを3つ以上追加してください</li>
              )}
              {performanceData.imagesWithoutAlt > 0 && (
                <li>• すべての画像にalt属性を追加してください</li>
              )}
              {performanceData.wordCount < 300 && (
                <li>• コンテンツを300文字以上に拡張してください</li>
              )}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
