import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { Footer } from "@/components/footer"
import PWAInstallPrompt from "@/components/PWAInstallPrompt"

export const metadata: Metadata = {
  title: {
    default: "愛車運勢診断 | プロ姓名判断鑑定師監修のナンバープレート診断",
    template: "%s | 愛車運勢診断",
  },
  description:
    "愛車の運勢を診断！プロの姓名判断鑑定師が監修したナンバープレート診断で、あなたの愛車の運勢を占います。新機能：数秘術による性格分析も追加！81画理論に基づく本格的な車のナンバー運勢チェックサービス。",
  keywords: [
    "愛車運勢診断",
    "車の性格診断",
    "ナンバープレート診断",
    "車のナンバープレート診断",
    "ナンバープレート占い",
    "車のナンバー運勢",
    "愛車数秘術",
    "ナンバープレート性格診断",
    "車の相性診断",
    "無料車診断",
    "81画理論",
    "数秘術診断",
    "車のナンバー無料",
    "ナンバープレート分析",
    "愛車の性格",
    "車の運勢チェック",
  ],
  generator: "v0.dev",
  metadataBase: new URL("https://car-unsei.jp"),
  alternates: {
    canonical: "https://car-unsei.jp",
    languages: {
      "ja-JP": "https://car-unsei.jp",
    },
  },
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-3409171148853394",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    canonical: "https://car-unsei.jp",
  },
  appleWebApp: {
    title: "愛車運勢診断",
    statusBarStyle: "default",
    capable: true,
  },
  openGraph: {
    title: "愛車運勢診断 | プロ姓名判断鑑定師監修のナンバープレート診断",
    description:
      "愛車の運勢を診断！プロの姓名判断鑑定師が監修したナンバープレート診断で、あなたの愛車の運勢を占います。新機能：数秘術による性格分析も追加！",
    url: "https://car-unsei.jp",
    siteName: "愛車運勢診断",
    images: [
      {
        url: "https://car-unsei.jp/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "愛車運勢診断 - ナンバープレートで運勢・性格がわかる",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "愛車運勢診断 | プロ姓名判断鑑定師監修のナンバープレート診断",
    description:
      "愛車の運勢を診断！プロの姓名判断鑑定師が監修したナンバープレート診断で、あなたの愛車の運勢を占います。新機能：数秘術による性格分析も追加！",
    images: ["https://car-unsei.jp/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {/* PWA設定 */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="愛車運勢診断" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="application-name" content="愛車運勢診断" />

        {/* Google Analytics - 直接実装 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V0W7B8NKG1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-V0W7B8NKG1', {
               page_title: document.title,
               page_location: window.location.href,
               send_page_view: true
             });
             console.log('Google Analytics initialized with ID: G-V0W7B8NKG1');
           `,
          }}
        />

        {/* Service Worker登録（強化版） */}
        <script>
          {`
           if ('serviceWorker' in navigator) {
             window.addEventListener('load', function() {
               navigator.serviceWorker.register('/sw.js', { scope: '/' })
                 .then(function(registration) {
                   console.log('SW registered: ', registration);
                   
                   // Service Workerの更新をチェック
                   registration.addEventListener('updatefound', () => {
                     const newWorker = registration.installing;
                     if (newWorker) {
                       newWorker.addEventListener('statechange', () => {
                         if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                           // 新しいService Workerが利用可能
                           console.log('New service worker available');
                           newWorker.postMessage({ type: 'SKIP_WAITING' });
                         }
                       });
                     }
                   });
                   
                   // 定期的に更新をチェック
                   setInterval(() => {
                     registration.update();
                   }, 60000); // 1分ごと
                 })
                 .catch(function(registrationError) {
                   console.log('SW registration failed: ', registrationError);
                 });
                 
               // Service Workerが制御を取得したときの処理
               navigator.serviceWorker.addEventListener('controllerchange', () => {
                 console.log('Service Worker controller changed');
               });
             });
           }
         `}
        </script>

        {/* Enhanced Structured data */}
        <script type="application/ld+json">
          {`
           {
             "@context": "https://schema.org",
             "@type": "WebApplication",
             "name": "愛車運勢診断",
             "alternateName": ["車のナンバープレート診断", "ナンバープレート運勢診断", "愛車診断サービス"],
             "url": "https://car-unsei.jp",
             "description": "車のナンバープレートから運勢と性格を無料で診断するサービス。81画理論と数秘術を組み合わせた本格的な診断。",
             "applicationCategory": "LifestyleApplication",
             "operatingSystem": "Web Browser",
             "offers": {
               "@type": "Offer",
               "price": "0",
               "priceCurrency": "JPY",
               "description": "完全無料の愛車運勢・性格診断サービス"
             },
             "publisher": {
               "@type": "Organization",
               "name": "愛車運勢診断",
               "url": "https://car-unsei.jp"
             },
             "potentialAction": {
               "@type": "SearchAction",
               "target": "https://car-unsei.jp/search?q={search_term_string}",
               "query-input": "required name=search_term_string"
             },
             "featureList": [
               "車のナンバープレート運勢診断",
               "数秘術による性格分析",
               "81画理論による詳細分析",
               "運勢と性格の総合診断",
               "無料診断サービス",
               "SNSシェア機能"
             ]
           }
         `}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {`
           {
             "@context": "https://schema.org",
             "@type": "FAQPage",
             "mainEntity": [
               {
                 "@type": "Question",
                 "name": "愛車運勢診断で性格分析もできるのですか？",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "はい、81画理論による運勢診断に加えて、数秘術による性格分析も提供しています。車のナンバープレートから運勢と性格の両方を同時に診断できます。"
                 }
               },
               {
                 "@type": "Question",
                 "name": "運勢診断と性格診断の違いは何ですか？",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "運勢診断は81画理論に基づいてナンバープレートの吉凶を判定し、性格診断は数秘術の原理を用いて車との相性や運転スタイルなどの性格特性を分析します。"
                 }
               },
               {
                 "@type": "Question",
                 "name": "診断は無料ですか？",
                 "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "はい、すべての診断機能を完全無料でご利用いただけます。運勢診断、性格分析、詳細な解説まで、すべて無料でお楽しみください。"
                 }
               }
             ]
           }
         `}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://car-unsei.jp" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <PWAInstallPrompt />
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
