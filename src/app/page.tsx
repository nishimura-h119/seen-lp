
import  CTASection  from './components/CTASection';
import DemoSection from './components/DemoSection';
import  FeatureSection  from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import  WorldSection  from './components/WorldSection';

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex h-screen overflow-hidden">
        {/* 左側：固定表示 */}
          <div className="text-center p-6 max-w-sm">
            <h1 className="text-5xl font-serif mb-6">Seen</h1>
            <p className="text-lg leading-loose">
              Seenは、感情を投稿できる。<br />
              だけど誰にも見られない。<br />
              そんな“SNS風”アプリです。
            </p>
          </div>
        </div>

        {/* 右側：スクロールエリア */}
        <div className="ml-auto w-1/2 h-screen overflow-y-scroll px-6 py-16 r-60">
          <HeroSection />
          <ProblemSection />
          <FeatureSection />
          <DemoSection />
          <WorldSection />
          <CTASection />
        </div>
      </div>
      <footer className="py-12 text-sm text-muted-foreground text-center">
        © 2025 Seen. Created for portfolio by 西村ひなた.
      </footer>
    </main>
  )
}
