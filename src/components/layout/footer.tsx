'use client';
import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from '@/lib/locale';
import { getLocalizedPath } from '@/lib/locale';
import { copy } from '@/content/copy';

export default function Footer() {
  const locale = useLocale();
  const t = copy[locale].footer;
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="200"
                result="effect1_foregroundBlur_11105_867"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4">
              <div>
                <Link href={getLocalizedPath('/', locale)} className="block mb-6">
                  <Image
                    src="/images/logo-white.svg"
                    alt="logo"
                    width={128}
                    height={32}
                  />
                </Link>
                <p className="block text-sm text-gray-400 mb-9">
                  {t.tagline}
                </p>
                <div className="flex">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white/80 size-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M5.5 3.41943C3.84315 3.41943 2.5 4.76258 2.5 6.41943V10.4194C2.5 12.0763 3.84315 13.4194 5.5 13.4194H11.5C13.1569 13.4194 14.5 12.0763 14.5 10.4194V6.41943C14.5 4.76258 13.1569 3.41943 11.5 3.41943H5.5Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8333 8.41943C10.8333 9.52399 9.9379 10.4194 8.83333 10.4194C7.72876 10.4194 6.83333 9.52399 6.83333 8.41943C6.83333 7.31486 7.72876 6.41943 8.83333 6.41943C9.9379 6.41943 10.8333 7.31486 10.8333 8.41943Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6667 5.33594H11.675"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/PimjoHQ"
                    target="_blank"
                    className="text-gray-400 hover:text-white/80 size-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M12.2176 2.18848H14.4666L9.55323 7.80414L15.3334 15.4458H10.8076L7.26277 10.8112L3.20671 15.4458H0.956369L6.2117 9.43921L0.666748 2.18848H5.30749L8.51168 6.4247L12.2176 2.18848ZM11.4283 14.0997H12.6745L4.63034 3.4639H3.29306L11.4283 14.0997Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    className="text-gray-400 hover:text-white/80 size-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M10.6667 4.75277C11.1687 5.15261 11.7543 5.45118 12.4 5.61943V7.2861C11.8081 7.22958 11.2273 7.06229 10.6933 6.79399V10.4528C10.6933 11.9546 9.47184 13.1761 7.97002 13.1761C6.46819 13.1761 5.24669 11.9546 5.24669 10.4528C5.24669 8.95102 6.46819 7.72952 7.97002 7.72952C8.19254 7.72952 8.40941 7.75619 8.61739 7.80685V9.32962C8.44336 9.26952 8.26145 9.2361 8.07669 9.2361C7.46377 9.2361 6.96669 9.73318 6.96669 10.3461C6.96669 10.959 7.46377 11.4561 8.07669 11.4561C8.68961 11.4561 9.18669 10.959 9.18669 10.3461V3.0861H10.6667V4.75277Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/PimjoHQ"
                    target="_blank"
                    className="text-gray-400 hover:text-white/80 size-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_11105_895)">
                        <path
                          d="M10.5 11.0444H12.375L13.125 8.04443H10.5V6.54443C10.5 5.7724 10.5 5.04443 12 5.04443H13.125V2.52451C12.8807 2.49207 11.9573 2.41943 10.9822 2.41943C8.9463 2.41943 7.5 3.66208 7.5 5.94422V8.04443H5.25V11.0444H7.5V17.4194H10.5V11.0444Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11105_895">
                          <rect
                            width="18"
                            height="18"
                            fill="currentColor"
                            transform="translate(0 0.919434)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-9 xl:col-span-8">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <span className="block mb-6 text-sm text-gray-400">
                    Services
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Status
                    </Link>
                    <Link
                      href={getLocalizedPath('/pricing', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Pricing
                    </Link>
                    <Link
                      href={getLocalizedPath('/pricing#faq', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      FAQ
                    </Link>
                    <Link
                      href={getLocalizedPath('/contact', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Help Docs
                    </Link>
                    <Link
                      href={getLocalizedPath('/privacy', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-6 text-sm text-gray-400">
                    Features
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      HTML File Upload
                    </Link>
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      HTML website hosting
                    </Link>
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Free Image Hosting
                    </Link>
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Upload PDF Online
                    </Link>
                    <Link
                      href={getLocalizedPath('/', locale)}
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Free Zip file hosting
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">
              &copy; {getCurrentYear()} Gestoh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
