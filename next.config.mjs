/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Netlifyでは画像最適化をサーバーレスで処理
  },
  // Netlify configuration
  output: 'standalone',
  distDir: '.next',
}

export default nextConfig
