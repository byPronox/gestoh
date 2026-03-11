'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageIcon } from '@/icons/icons';
import { locales, localeLabels, type Locale } from '@/lib/i18n';
import { getLocalizedPath, useLocale } from '@/lib/locale';
import { isValidLocale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Build path without locale (e.g. /en/pricing -> /pricing, /en -> /)
  const segments = pathname?.split('/') ?? [];
  const pathWithoutLocale =
    segments.length > 1 && isValidLocale(segments[1])
      ? '/' + segments.slice(2).filter(Boolean).join('/') || '/'
      : pathname || '/';
  const basePath = pathWithoutLocale === '' ? '/' : pathWithoutLocale;
  const pathForLocale = (locale: Locale) =>
    getLocalizedPath(basePath, locale);

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <LanguageIcon
        className="size-4 sm:size-5 text-gray-500 dark:text-gray-400 shrink-0"
        aria-hidden
      />
      <div className="flex items-center rounded-full bg-gray-100 dark:bg-white/5 p-0.5">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={pathForLocale(locale)}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${currentLocale === locale
              ? 'bg-white dark:bg-white/10 text-gray-800 dark:text-white/90 shadow-xs'
              : 'text-gray-500 dark:text-gray-400 hover:text-primary-500'
              }`}
            title={localeLabels[locale]}
          >
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
