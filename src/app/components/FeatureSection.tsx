'use client'
export default function FeatureSection() {
  return (
    <section className="w-full py-24 text-center px-4 bg-background">
      <h2 className="text-2xl font-semibold mb-6">Seenでできること</h2>

      <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-2 text-left">
        <div className="p-6 border rounded-xl bg-background shadow-sm">
          <h3 className="text-lg font-semibold mb-2">感情を書き出せる“投稿”</h3>
          <p className="text-muted-foreground text-sm">
            誰にも見られない安心感の中で、自分の気持ちを自由に書き出せます。
          </p>
        </div>
        <div className="p-6 border rounded-xl bg-background shadow-sm">
          <h3 className="text-lg font-semibold mb-2">架空のリアクション</h3>
          <p className="text-muted-foreground text-sm">
            投稿には、共感を伝える“反応”が返ってきます。実在しないからこそ安心できる言葉たち。
          </p>
        </div>
        <div className="p-6 border rounded-xl bg-background shadow-sm">
          <h3 className="text-lg font-semibold mb-2">過去の投稿が残る</h3>
          <p className="text-muted-foreground text-sm">
            あなたが綴った感情は、タイムラインに静かに積み重なっていきます。
          </p>
        </div>
        <div className="p-6 border rounded-xl bg-background shadow-sm">
          <h3 className="text-lg font-semibold mb-2">誰にも見られない設計</h3>
          <p className="text-muted-foreground text-sm">
            完全クローズド。あなたの投稿は誰にも届かず、保存も共有もされません。
          </p>
        </div>
      </div>
    </section>
  )
}
