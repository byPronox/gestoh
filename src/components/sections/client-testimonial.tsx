"use client";

import Image from 'next/image';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { copy } from '@/content/copy';

const USER_IMAGES = [
  '/images/users/user-1.png',
  '/images/users/user-2.png',
  '/images/users/user-3.png',
  '/images/users/user-4.png',
  '/images/users/user-1.png',
  '/images/users/user-2.png',
];

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  const [showAll, setShowAll] = useState(false);
  const t = copy[locale].testimonials;
  const testimonials = t.items.map((item, i) => ({
    id: i + 1,
    name: item.name,
    company: item.company,
    image: USER_IMAGES[i] ?? '/images/users/user-1.png',
    testimonial: item.testimonial,
  }));

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <section className="md:py-28 py-14 relative">
      <div className="wrapper">
        <div>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
              {t.title}
            </h2>
            <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="mt-8 text-center relative z-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none"
            >
              <span>{showAll ? t.showLess : t.showMore}</span>
            </button>
          </div>
        </div>
      </div>

      {!showAll && (
        <div className="white-gradient h-[264px]  w-full absolute bottom-0"></div>
      )}
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { id: number; name: string; company: string; image: string; testimonial: string };
}) {
    return (
      <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
        <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
          <div>
            <Image
              src={testimonial.image || '/placeholder.svg'}
              alt={testimonial.name}
              width={52}
              height={52}
              className="size-13 object-cover ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-base dark:text-white/90">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.company}
            </p>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
          <p className="text-base leading-6 text-gray-700 dark:text-gray-400">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    );
  }
