// components/ProblemSection.tsx

export default function ProblemSection() {
  return (
    <section id="problem" className="space-y-6">
      <h2 className="text-2xl font-bold">こんな悩み、ありませんか？</h2>
      <ul className="list-disc list-inside text-zinc-300 space-y-2">
        <li>感情的な投稿をしてしまって、あとで消したくなる</li>
        <li>誰にも見せずに気持ちを吐き出したいけど、場所がない</li>
        <li>SNSで本音を書けないままモヤモヤがたまっていく</li>
      </ul>
    </section>
  );
}
