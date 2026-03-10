import FaqAccordion from '@/components/sections/faq-accordion';
import type { Metadata } from 'next';
import PricingSection from '@/components/sections/pricing';
import type { Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Pricing',
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PricingSection locale={locale} />
      <FaqAccordion locale={locale} />
    </>
  );
}
