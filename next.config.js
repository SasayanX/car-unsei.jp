/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // リダイレクト設定を完全に削除（緊急対応）
  // async redirects() {
  //   return []
  // },

  // トレイリングスラッシュの統一
  trailingSlash: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
