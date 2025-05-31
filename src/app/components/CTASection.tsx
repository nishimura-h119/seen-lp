export default function CtaSection() {
  return (
    <section id="cta" className="space-y-6 text-center">
      <h2 className="text-2xl font-bold">あなたの気持ち、ここに書いてみませんか？</h2>
      <p className="text-zinc-300">
        誰にも見られず、でもちゃんと届く。<br />
        Seenは、あなたの心を受け止める場所です。
      </p>
      <a
        href="https://your-app-url.com"
        className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition"
      >
        アプリを開く
      </a>
    </section>
  );
}
