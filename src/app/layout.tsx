import type {Metadata} from 'next';
import {Sen} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {ThemeProvider} from '@/components/theme-provider';

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
    <html lang="en" className={`${sen.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
