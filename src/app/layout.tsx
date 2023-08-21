import {ReactNode} from 'react';
import type {Metadata} from 'next';

import './globals.css';
import {Inter} from 'next/font/google';
import {Header} from '~/components/Layout/Header';
import {Footer} from '~/components/Layout/Footer';


const inter = Inter({subsets: ['latin']});

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
		<html lang="en">
		<body className={inter.className}>
		<Header/>
		<main className="container mx-auto grid grid-cols-2 gap-4 place-content-start h-48">
			{/*{children}*/}
			This side is in building
		</main>
		{/*<Footer/>*/}
		</body>
		</html>
	);
}
