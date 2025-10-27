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
import AnimatedSection from '@/components/landing/AnimatedSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-dark-blue text-foreground overflow-x-hidden">
      <main className="flex-grow">
        <HeroSection />
        <AnimatedSection id="dores">
          <PainPointsSection />
        </AnimatedSection>
        <AnimatedSection id="solucao">
          <SolutionSection />
        </AnimatedSection>
        <AnimatedSection id="beneficios">
          <BenefitsSection />
        </AnimatedSection>
        <AnimatedSection id="depoimentos">
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection id="comparativo">
          <ComparisonSection />
        </AnimatedSection>
        <AnimatedSection id="oferta">
          <OfferSection />
        </AnimatedSection>
        <AnimatedSection id="garantia">
          <GuaranteeSection />
        </AnimatedSection>
        <AnimatedSection id="faq">
          <FaqSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
