'use client';

import { usePathname } from 'next/navigation';
import { defaultLocale, isValidLocale, type Locale } from '@/lib/i18n';

export { getLocalizedPath } from '@/lib/i18n';

/**
 * Hook to get the current locale from the pathname (/en/... or /es/...).
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  const segment = pathname?.split('/')[1];
  return segment && isValidLocale(segment) ? segment : defaultLocale;
}
