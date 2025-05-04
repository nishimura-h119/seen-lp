'use client'

export default function ProblemSection() {
  return (
    <section className="w-full py-20 px-4 bg-muted/50 text-center">
      <h2 className="text-2xl font-semibold mb-6">こんな経験、ありませんか？</h2>

      <div className="max-w-2xl mx-auto space-y-6 text-left text-muted-foreground">
        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <p>感情的な投稿をしてしまって、後から消したくなった</p>
        </div>
        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <p>本音を書いたら、誰かを傷つけてしまった気がした</p>
        </div>
        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <p>本当は誰かに聞いてほしいのに、誰にも見せられない</p> 
        </div>
      </div>
    </section>
  )
}
