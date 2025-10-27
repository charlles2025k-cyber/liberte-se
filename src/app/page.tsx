import HeroSection from '@/components/landing/HeroSection';
import PainPointsSection from '@/components/landing/PainPointsSection';
import SolutionSection from '@/components/landing/SolutionSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ComparisonSection from '@/components/landing/ComparisonSection';
import OfferSection from '@/components/landing/OfferSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-dark-blue text-foreground">
      <main className="flex-grow">
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ComparisonSection />
        <OfferSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
