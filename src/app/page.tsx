import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import FeatureSection from "./components/FeatureSection";
// import DemoSection from "./components/DemoSection";
// import WorldSection from "./components/WorldSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeatureSection />
      {/* <DemoSection /> */}
      {/* <WorldSection /> */}
      <CtaSection />
    </>
  );
}
