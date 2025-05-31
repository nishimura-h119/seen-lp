import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-6 text-[#CBBFA1] font-serif">
      <Image
        src="/images/title-scroll.svg"
        alt="Seenのロゴ"
        width={338}
        height={106}
        priority
      />
      <Image
        src="/images/mock_sp.png"
        alt="Seenのモックアップ(スマホ)"
        width={338}
        height={106}
        priority
      />
    </section>
  );
}
