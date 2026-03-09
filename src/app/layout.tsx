import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'GestoH - Digitaliza tu Restaurante en Quito',
    template: '%s | GestoH',
  },
  description:
    'Sistema de tablets para meseros y pantallas de cocina para restaurantes en Quito. Acelera el servicio, elimina errores y aumenta ganancias. Desde $12/mes.',
  keywords: ['restaurante', 'quito', 'ecuador', 'pos', 'tablet', 'meseros', 'cocina', 'facturacion electronica', 'sri'],
  openGraph: {
    title: 'GestoH - Digitaliza tu Restaurante en Quito',
    description: 'Sistema de tablets para meseros y pantallas de cocina. Acelera el servicio, elimina errores.',
    locale: 'es_EC',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`bg-white min-h-screen flex flex-col ${inter.className} antialiased`}
      >
        <ToasterProvider />
        <div className="isolate flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
