import { Outlet } from 'react-router-dom'

import { ScrollToTop } from '@/components'
import { Footer,NavBar } from '@/layouts/components'

export const MainLayout = () => {
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
