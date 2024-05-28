import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

import { ThemeProvider, useTheme } from './theme-provider'
import { UserProvider } from './user-provider'

interface ProvidersProps extends PropsWithChildren {}

export const Providers = ({ children }: ProvidersProps) => {
	const { theme } = useTheme()

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 0
			}
		}
	})

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<UserProvider>{children}</UserProvider>
			</ThemeProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			<Toaster theme={theme} />
		</QueryClientProvider>
	)
}
