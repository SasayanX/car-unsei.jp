export const metadata = {
  title: "免責事項 | 愛車運勢チェッカー",
  description: "愛車運勢チェッカーの免責事項。当サイトのサービス利用に関する条件を定めています。",
  keywords: "免責事項,娯楽,占い,ナンバープレート診断,愛車運勢チェッカー",
}

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-5">免責事項</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第1条（サービスの性質）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          カナウ四柱推命（以下「当社」といいます。）が提供する愛車運勢診断サービス（以下「本サービス」といいます。）は、娯楽目的の占いサービスであり、科学的根拠に基づくものではありません。本サービスの診断結果は参考情報として提供されるものであり、その正確性、完全性、有用性等について保証するものではありません。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第2条（責任の制限）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          ユーザーは、本サービスの利用及び診断結果に基づく判断や行動について、自己の責任において行うものとします。当社は、本サービスの利用によりユーザーに生じた損害について、一切責任を負わないものとします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第3条（情報の取り扱い）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当社は、ユーザーが本サービスに入力した車のナンバープレート情報等を、診断結果の提供以外の目的で利用することはありません。ただし、個人を特定できない形での統計データとして利用する場合があります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">第4条（サービスの中断・終了）</h2>
        <p className="text-gray-600 dark:text-gray-300">
          当社は、予告なく本サービスの内容の変更、中断、終了することがあります。これによりユーザーに生じた損害について、当社は一切責任を負わないものとします。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">お問い合わせ</h2>
        <p className="text-gray-600 dark:text-gray-300">
          本免責事項に関するご質問は、以下までお問い合わせください：
          <br />
          <a href="mailto:kanaukiryu@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
            kanaukiryu@gmail.com
          </a>
        </p>
      </section>
    </div>
  )
}

export default DisclaimerPage
