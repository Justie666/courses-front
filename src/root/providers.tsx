'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren, useState } from 'react'

import { Toaster } from '@/shared/ui'

export const Providers = ({ children }: PropsWithChildren) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						retry: 0
					}
				}
			})
	)
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange>
			<QueryClientProvider client={queryClient}>
				{children}
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				<Toaster />
			</QueryClientProvider>
		</ThemeProvider>
	)
}
