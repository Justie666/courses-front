import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { ScrollToTop } from '@/components'
import { Footer, NavBar } from '@/layouts/components'
import { useGetCurrentUserQuery } from '@/shared/api'

export const MainLayout = () => {
	const { setUser } = useUser()

	const { data: user, isLoading } = useGetCurrentUserQuery()

	useEffect(() => {
		if (!isLoading && user) {
			setUser(user)
		}
	}, [user, isLoading, setUser])

	return (
		<>
			<div className='flex min-h-screen flex-col justify-between gap-[20px] sm:gap-[40px]'>
				<NavBar />
				<main className='container flex-grow'>
					<Outlet />
				</main>
				<Footer />
			</div>
			<div className='shadow' />
			<ScrollToTop />
		</>
	)
}
