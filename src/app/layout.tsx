import '@/root/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ScrollToTop } from '@/components'

import { Providers } from '../root/providers'
import { Footer, NavBar } from './components'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={`${font.className}`}>
				<Providers>
					<div className='flex min-h-screen flex-col justify-between gap-[20px] sm:gap-[40px]'>
						<NavBar />
						<main className='container flex-grow'>{children}</main>
						<Footer />
					</div>
					<div className='shadow' />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	)
}
