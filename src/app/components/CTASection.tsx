'use client'
export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 bg-muted/50 text-center">
      <h2 className="text-2xl font-semibold mb-4">このまま終わらせずに、少しだけ吐き出してみませんか？</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        誰かに言うほどじゃない。でも、このまま胸の中に溜めておくのも苦しい。
        <br />
        Seenなら、感情を投稿するだけで、そっと返事がもらえます。
      </p>

      <a href="#demo">
        <button className="text-sm px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition">
          今すぐ投稿してみる
        </button>
      </a>
    </section>
  )
}
