
import  CTASection  from './components/CTASection';
import DemoSection from './components/DemoSection';
import  FeatureSection  from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import  WorldSection  from './components/WorldSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <FeatureSection />
      <DemoSection />
      <WorldSection />
      <CTASection />
      <footer className="py-12 text-sm text-muted-foreground text-center">
        © 2025 Seen. Created for portfolio by 西村ひなた.
      </footer>
    </main>
  )
}
