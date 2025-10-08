export const metadata = {
  title: "利用規約 | 愛車運勢チェッカー",
  description: "愛車運勢チェッカーの利用規約。当サイトのサービス利用に関する条件を定めています。",
  keywords: "利用規約,サービス利用条件,ナンバープレート診断,愛車運勢チェッカー",
}

const TermsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">利用規約</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第1条（適用）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          本規約は、カナウ四柱推命（以下「当社」といいます。）が提供する愛車運勢診断サービス（以下「本サービス」といいます。）の利用に関する条件を定めるものです。本サービスを利用するすべてのユーザー（以下「ユーザー」といいます。）は、本規約に従って本サービスを利用するものとします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第2条（利用登録）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          本サービスの利用にあたり、ユーザーは、当社が定める方法により利用登録を行う必要があります。利用登録にあたっては、真実かつ正確な情報を提供する必要があります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第3条（禁止事項）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
          <li>本サービスの運営を妨げる行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第4条（免責事項）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当社は、本サービスの内容について、その正確性、完全性、有用性等について保証するものではありません。また、本サービスの利用によりユーザーに生じた損害について、当社は一切責任を負わないものとします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第5条（規約の変更）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当社は、必要に応じて、本規約をいつでも変更することができるものとします。変更後の規約は、当社が定める方法によりユーザーに通知するものとし、通知後、ユーザーが本サービスを利用した場合、変更後の規約に同意したものとみなします。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">お問い合わせ</h2>
        <p className="text-gray-600 dark:text-gray-300">
          本規約に関するご質問は、以下までお問い合わせください：
          <br />
          <a href="mailto:kanaukiryu@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
            kanaukiryu@gmail.com
          </a>
        </p>
      </section>
    </div>
  )
}

export default TermsPage
