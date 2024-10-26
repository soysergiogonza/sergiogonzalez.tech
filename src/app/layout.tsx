import type { Metadata } from 'next';
import './globals.css';
import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';
import { Inter } from '@/utils/utils';
import type { ReactNode } from 'react';
import { Provider } from '@/store/Provider';

export const metadata: Metadata = {
  title: 'Sergio González Sánchez',
  description: 'Frontend Developer',
  icons: {
    icon: 'assets/icons/favicon.svg',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className={Inter.className} suppressHydrationWarning={true}>
        <Provider>
          <Aside />
          <main className="content">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
