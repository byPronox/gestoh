import BenefitsGrid from '@/components/sections/benefits-grid';
import TestimonialsSection from '@/components/sections/client-testimonial';
import FaqAccordion from '@/components/sections/faq-accordion';
import HeroSection from '@/components/sections/hero-section';
import ToolsTab from '@/components/sections/tools-tab';
import { CoreFeatures } from '@/components/sections/core-features';
import PricingSection from '@/components/sections/pricing';
import type { Locale } from '@/lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <CoreFeatures locale={locale} />
      <ToolsTab locale={locale} />
      <BenefitsGrid locale={locale} />
      <TestimonialsSection locale={locale} />
      <PricingSection locale={locale} />
      <FaqAccordion locale={locale} />
    </>
  );
}
