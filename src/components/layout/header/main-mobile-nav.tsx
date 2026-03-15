'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from './nav-items';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/icons/icons';
import { useLocale } from '@/lib/locale';
import { getLocalizedPath } from '@/lib/locale';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? '' : key);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden h-screen absolute top-full bg-white dark:bg-dark-primary w-full border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navItems
              .filter((item) => item.type === 'link' && item.href !== '/text-generator')
              .map((item) => {
                const href = getLocalizedPath(item.href, locale);
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={cn(
                      'block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
                      {
                        'text-gray-800 dark:text-white': pathname === href,
                      }
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col pt-2 pb-3 space-y-3 px-8" />
      </div>
    </div>
  );
}
