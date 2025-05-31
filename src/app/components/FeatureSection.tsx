export default function FeaturesSection() {
  return (
    <section id="features" className="space-y-6">
      <h2 className="text-2xl font-bold">Seenでできること</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-300">
        <li className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="font-semibold text-white">GPTによる架空の反応</h3>
          <p className="text-sm mt-1">
            あなたの投稿に、AIがやさしいリアクションを返します。
            誰かに届いたような安心感を演出します。
          </p>
        </li>
        <li className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="font-semibold text-white">非公開のクローズド投稿</h3>
          <p className="text-sm mt-1">
            投稿は完全に自分専用。誰にも見られず、自由に気持ちを吐き出せます。
          </p>
        </li>
        <li className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="font-semibold text-white">感情を落ち着けるUI</h3>
          <p className="text-sm mt-1">
            落ち着いた配色とシンプルなUIで、感情の整理を妨げません。
          </p>
        </li>
        <li className="bg-zinc-800 p-4 rounded-xl">
          <h3 className="font-semibold text-white">スマホ対応</h3>
          <p className="text-sm mt-1">
            スマホでも使いやすく、外出先でも安心して書き出せます。
          </p>
        </li>
      </ul>
    </section>
  );
}
