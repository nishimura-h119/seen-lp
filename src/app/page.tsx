import HeroSection from "@/app/components/HeroSection";
import ProblemSection from "@/app/components/ProblemSection";
import FeatureSection from "@/app/components/FeatureSection";
import DemoSection from "@/app/components/DemoSection";
import WorldSection from "@/app/components/WorldSection";
// import CtaSection from "@/app/components/CtaSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <div className="flex justify-center">
        <Image
          src="/images/line.svg"
          alt="区切り線"
          width={394}
          height={1}
          priority
        />
      </div>
      <FeatureSection />
      <DemoSection />
      <div className="flex justify-center">
        <Image
          src="/images/line.svg"
          alt="区切り線"
          width={394}
          height={1}
          priority
        />
      </div>
      <WorldSection />
      <div className="flex justify-center">
        <Image
          src="/images/line.svg"
          alt="区切り線"
          width={394}
          height={1}
          priority
        />
      </div>
      {/* <CtaSection /> */}
    </>
  );
}
