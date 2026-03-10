'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale';
import { getLocalizedPath } from '@/lib/locale';

type PropsType = {
  toggleSidebar: () => void;
};

export function NewChat({ toggleSidebar }: PropsType) {
  const locale = useLocale();
  return (
    <Link
      href={getLocalizedPath('/text-generator', locale)}
      onClick={toggleSidebar}
      className="w-full bg-gray-700 dark:bg-white/15 dark:hover:bg-white/25 font-medium text-sm hover:bg-gray-800 transition text-white py-3 px-5 rounded-full flex items-center justify-center disabled:pointer-events-none disabled:opacity-80"
    >
      New Chat
    </Link>
  );
}
