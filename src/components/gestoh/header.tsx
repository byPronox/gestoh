'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GestohHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              GestoH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('beneficios')}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                scrolled ? 'text-navy-700' : 'text-white/90'
              }`}
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                scrolled ? 'text-navy-700' : 'text-white/90'
              }`}
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                scrolled ? 'text-navy-700' : 'text-white/90'
              }`}
            >
              Precios
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="gestoh-gradient-btn px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Solicitar Demo Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
          >
            <svg
              className={`w-6 h-6 transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left py-2 text-navy-700 font-medium"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left py-2 text-navy-700 font-medium"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="block w-full text-left py-2 text-navy-700 font-medium"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="gestoh-gradient-btn w-full py-3 rounded-full text-sm font-semibold mt-4"
            >
              Solicitar Demo Gratis
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
