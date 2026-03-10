'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale';
import { getLocalizedPath } from '@/lib/locale';

export function SignInLink() {
  const locale = useLocale();
  return (
    <Link
      href={getLocalizedPath('/signin', locale)}
      className="text-sm font-semibold text-primary-500"
    >
      Sign In
    </Link>
  );
}
