'use client'


export default function HeroSection() {
  return (
    <section className="w-full py-24 text-center px-4 bg-background">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        SNSに投稿する前に。
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
        感情があふれそうになったとき、誰かに伝えたくなる。
        <br />
        でも、後悔したくない。誰かを傷つけたくない。
        <br />
        <span className="inline-block mt-4">
          <strong>Seen</strong> は、感情を静かに書き出せる、匿名の“擬似SNS”です。
        </span>
      </p>
      <a href="#demo">
        <button className="text-sm px-6 py-3 rounded-md bg-primary text-white hover:opacity-90 transition">
          今すぐ投稿してみる
        </button>
      </a>
    </section>
  )
}
