import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";

export default function FeaturesSection() {
  return (
    <section id="features" className="">
      <p className="text-2xl leading-[1.7] tracking-[0.11em] ShipporiMincho-Regular flex justify-center my-13">
        こんな経験、ありませんか？
      </p>
      <div className="mx-10 space-y-6">
        <div className="flex justify-start space-x-7">
          <a className="items-start">
            <Image
              src="/images/star.svg"
              alt="区切り線"
              width={27}
              height={27}
              priority
              className=""
            />
          </a>
          <p className="text-base leading-[1.5] tracking-[0.14em] ShipporiMincho-Regular">
            感情的な投稿をしてしまって、
            <br />
            後から消したくなった。
          </p>
        </div>
        <div className="flex justify-start space-x-7">
          <a className="items-start">
            <Image
              src="/images/star.svg"
              alt="区切り線"
              width={27}
              height={27}
              priority
              className=""
            />
          </a>
          <p className="text-[17px] leading-[1.5] tracking-[0.14em] ShipporiMincho-Regular">
            本音を書いたら、
            <br />
            誰かを傷つけてしまった気がした。
          </p>
        </div>
        <div className="flex justify-start space-x-7">
          <a className="items-start">
            <Image
              src="/images/star.svg"
              alt="区切り線"
              width={27}
              height={27}
              priority
              className=""
            />
          </a>
          <p className="text-[17px] leading-[1.5] tracking-[0.14em] ShipporiMincho-Regular">
            本当は誰かに聞いてほしいのに、
            <br />
            誰にも見せられない。
          </p>
        </div>
      </div>
      <p className="text-2xl leading-[1.7] tracking-[0.11em] ShipporiMincho-Regular flex items-center justify-center mt-15">
        Seenでできること
      </p>
      <div className="flex flex-col items-center space-y-5 mt-9 mb-13">
        <Card className="w-[335px] h-[160px] bg-[#386F80] border-none rounded-[4px] ShipporiMincho-Regular">
          <CardHeader className="text-[21px] font-semiBold text-[#E8BF89] text-center">
            感情を書き出せる“投稿”
          </CardHeader>
          <CardContent className="text-l leading-[1.6] text-[#FFE3BE] text-center">
            誰にも見られない安心感の中で、
            <br />
            自分の気持ちを自由に書き出せます。
          </CardContent>
        </Card>
        <Card className="w-[335px] h-[160px] bg-[#386F80] border-none rounded-[4px] ShipporiMincho-Regular">
          <CardHeader className="text-[21px] font-semiBold text-[#E8BF89] text-center">
            架空のリアクション
          </CardHeader>
          <CardContent className="text-l leading-[1.6] text-[#FFE3BE] text-center">
            投稿には、共感を伝える
            <br />
            “反応” が返ってきます。
          </CardContent>
        </Card>
        <Card className="w-[335px] h-[160px] bg-[#386F80] border-none rounded-[4px] ShipporiMincho-Regular">
          <CardHeader className="text-[21px] font-semiBold text-[#E8BF89] text-center">
            過去の投稿が残る{" "}
          </CardHeader>
          <CardContent className="text-l leading-[1.6] text-[#FFE3BE] text-center">
            投稿は、あなたの端末内でのみ
            <br />
            静かに積み重なっていきます。
          </CardContent>
        </Card>
        <Card className="w-[335px] h-[160px] bg-[#386F80] border-none rounded-[4px] ShipporiMincho-Regular">
          <CardHeader className="text-[21px] font-semiBold text-[#E8BF89] text-center">
            誰にも見られない設計
          </CardHeader>
          <CardContent className="text-l leading-[1.6] text-[#FFE3BE] text-center">
            完全クローズド。
            <br />
            投稿は外部に一切共有されません。
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
