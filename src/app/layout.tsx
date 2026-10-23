import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ideolabz — Creative Digital Agency',
  description:
    'Ideolabz offers professional AI video ads, social media content, Meta ad campaigns, and account management services. Partner with us to grow your brand.',
  keywords: 'AI video ads, social media management, Meta ads, digital agency, Ideolabz',
  openGraph: {
    title: 'Ideolabz — Creative Digital Agency',
    description: 'Professional AI video ads, social media content, and Meta ad campaigns.',
    type: 'website',
    url: 'https://ideolabz.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
