import Image from "next/image";

export default function ProblemSection() {
  return (
    <section id="problem" className="">
      <p className="text-2xl leading-[1.7] tracking-[0.11em] ShipporiMincho-Regular pb-7 mx-9 mt-15">
        SNSに投稿して、
        <br />
        あとから後悔したこと
        <br />
        ありませんか？
      </p>
      <div className="pb-9 flex justify-center">
        <Image
          src="/images/line.svg"
          alt="区切り線"
          width={394}
          height={1}
          priority
        />
      </div>
      <p className="text-[17px] leading-[1.5] tracking-[0.14em] ShipporiMincho-Regular pb-13 mx-8">
        衝動的に気持ちを吐き出したあと、
        <br />
        誰かに見られるのが怖くなって、
        <br />
        投稿を削除した。
        <br />
        <br />
        それでも、感情をどこかに出したかった。
        <br />
        <br />
        Seenは、感情を投稿できる。
        <br />
        <br />
        けれど、
        <br />
        誰にも見られないSNS風アプリです。
        <br />
        <br />
        投稿には反応が返ってきます。
        <br />
        架空の共感コメントや既読も。
        <br />
        <br />
        でも、あなた以外に
        <br />
        その内容を見られることはありません。
        <br />
        <br />
        SNSに出す前に、自分のために投稿する。
        <br />
        <br />
        Seenは、そのための場所です。
        <br />
      </p>
      <div className="pb-13 flex justify-center">
        <Image
          src="/images/submmit-buttom.svg"
          alt="今すぐ投稿してみる"
          width={394}
          height={1}
          priority
          className="shadow-xl"
        />
      </div>
    </section>
  );
}
