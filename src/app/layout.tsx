import type {Metadata} from 'next';
import {Sen} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Portfolio-NextJS',
  description: 'A portfolio website built with Next.js',
};

const sen = Sen({
  subsets: ['latin'],
  variable: '--font-sen',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sen.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
