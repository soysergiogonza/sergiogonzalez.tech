import {ReactNode} from 'react';
import type {Metadata} from 'next';

import './globals.css';
import {Inter} from 'next/font/google';
import {Header} from '~/components/Layout/Header';
import {NextFont} from 'next/dist/compiled/@next/font';

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Sergio González Sánchez',
  description: 'Frontend Developer',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
    <body className={inter.className}>
    <Header />
    <main className='container mx-auto grid gap-8'>
      {children}
    </main>
    </body>
    </html>
  );
}
