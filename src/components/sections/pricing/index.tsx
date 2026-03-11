'use client';

import { cn } from '@/lib/utils';
import { PricingCard, type TPlan } from '@/components/sections/pricing/card';
import type { Locale } from '@/lib/i18n';
import { copy } from '@/content/copy';

export default function PricingSection({ locale }: { locale: Locale }) {
  const t = copy[locale].pricing;

  return (
    <section className="py-14 md:py-30 bg-gray-50 dark:bg-[#171f2e] dark:bg-linear-180 dark:from-white/3 dark:from-[45.56%] dark:to-white/0">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            {t.title}
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <div>
          <div className="mt-12 z-30 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:mx-auto lg:grid-cols-3 xl:grid-cols-4">
            {t.plans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan as TPlan}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
