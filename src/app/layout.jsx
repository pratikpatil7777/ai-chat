import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/components/layout/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: 'Aperture Data Fabric',
  description: 'Enterprise AI data platform with governance-first workflows.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-[rgb(var(--color-bg-primary))]`}> 
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
