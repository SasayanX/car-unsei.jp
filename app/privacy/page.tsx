export const metadata = {
  title: "プライバシーポリシー | 愛車運勢チェッカー",
  description: "愛車運勢チェッカーのプライバシーポリシー。当サイトにおける個人情報の取り扱いについて説明しています。",
  keywords: "プライバシーポリシー,個人情報保護,ナンバープレート診断,愛車運勢チェッカー",
}

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">プライバシーポリシー</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">個人情報保護に関する基本方針</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当サイト（愛車運勢診断）は、お客様の個人情報の重要性を認識し、個人情報保護に関する法令を遵守するとともに、以下のプライバシーポリシーに基づき、お客様の個人情報を適切に管理・利用いたします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">収集する個人情報</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当サイトでは、お問い合わせフォーム、コメント欄、メールマガジン登録などを通じて、お客様の氏名、メールアドレス、その他の個人情報を収集する場合があります。車のナンバープレート情報等
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">個人情報の利用目的</h2>
        <p className="text-gray-600 dark:text-gray-300">収集した個人情報は、以下の目的で利用いたします。</p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
          <li>お問い合わせへの対応</li>
          <li>メールマガジンの配信</li>
          <li>サービス向上のための分析</li>
          <li>その他、お客様に事前にご同意いただいた目的</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">個人情報の第三者への提供</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当サイトは、法令に基づく場合を除き、お客様の同意なしに個人情報を第三者に提供することはありません。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">個人情報の開示・訂正・削除</h2>
        <p className="text-gray-600 dark:text-gray-300">
          お客様は、ご自身の個人情報の開示、訂正、削除を求める権利を有します。ご希望の場合は、下記のお問い合わせ先までご連絡ください。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">お問い合わせ</h2>
        <p className="text-gray-600 dark:text-gray-300">
          ご質問やご要望がございましたら、以下までお気軽にお問い合わせください：
          <br />
          <a href="mailto:kanaukiryu@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
            kanaukiryu@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          個人情報の取り扱いに関するお問い合わせ
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
          <br />
          <a href="mailto:kanaukiryu@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
            kanaukiryu@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">プライバシーポリシーの変更</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載された時点から効力を生じるものとします。
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
