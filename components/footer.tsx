import Link from "next/link"
import { Car, Heart, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* サイト情報 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg">愛車運勢・性格診断</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              日本初のナンバープレート総合分析サービス。81画理論と数秘術で愛車の運勢と性格を診断。
            </p>
            <div className="flex items-center space-x-1 text-sm text-yellow-600">
              <Star className="w-4 h-4 fill-current" />
              <span>完全無料で本格診断</span>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="font-semibold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  愛車運勢診断
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  愛車性格診断
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  診断ブログ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* 情報 */}
          <div>
            <h3 className="font-semibold mb-4">情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  運営者・監修者情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/service-introduction"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  サービス紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-car-number-diagnosis-works"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  診断の仕組み
                </Link>
              </li>
            </ul>
          </div>

          {/* 法的情報 */}
          <div>
            <h3 className="font-semibold mb-4">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  免責事項
                </Link>
              </li>
            </ul>
          </div>

          {/* 関連サービス */}
          <div>
            <h3 className="font-semibold mb-4">関連サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://ie-unsei.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  住まい運勢診断
                </Link>
              </li>
              <li>
                <Link
                  href="https://seimei.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                >
                  まいにちAI姓名判断
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for car lovers</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 愛車運勢・性格診断. All rights reserved.</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">日本初のナンバープレート総合分析サービス</p>
        </div>
      </div>
    </footer>
  )
}
