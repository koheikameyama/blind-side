import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { TRPCProvider } from '@/lib/trpc/Provider';
import { Navigation } from '@/components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blind Side - 見ないから、勝てる。',
  description: '感情に左右されない投資を実現するBlind Mode投資ツール',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={inter.className}>
          <TRPCProvider>
            <Navigation />
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
