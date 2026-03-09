import GestohHeader from '@/components/gestoh/header';
import HeroSection from '@/components/gestoh/hero-section';
import PainPointsSection from '@/components/gestoh/pain-points-section';
import SolutionSection from '@/components/gestoh/solution-section';
import LocalValidationSection from '@/components/gestoh/local-validation-section';
import PricingSection from '@/components/gestoh/pricing-section';
import ContactSection from '@/components/gestoh/contact-section';
import GestohFooter from '@/components/gestoh/footer';

export default async function Home() {
  return (
    <>
      <GestohHeader />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <LocalValidationSection />
        <PricingSection />
        <ContactSection />
      </main>
      <GestohFooter />
    </>
  );
}
