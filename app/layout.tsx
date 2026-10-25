import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTAs } from '@/components/layout/StickyCTAs';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/seo/schema';
import { SITE_URL, company } from '@/lib/data/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'UAE Quick | Same-Day Home Maintenance Services in Dubai',
    template: '%s | UAE Quick',
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  formatDetection: { telephone: true, email: true, address: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: company.name,
    url: `${SITE_URL}/`,
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#164B8D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" className={inter.variable}>
      <body>
        {/* Site-wide entity graph: Organization + WebSite + LocalBusiness */}
        <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTAs />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
