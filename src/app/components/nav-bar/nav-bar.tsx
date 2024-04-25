import Image from 'next/image'
import Link from 'next/link'

import { ForGuest, ForUser, ToggleTheme } from '@/components'
import { MenuBurger } from '@/components/menu-burger'
import { ROUTES } from '@/shared/constants'
import { Button } from '@/shared/ui'

import { LinksNav } from './links-nav'
import { UserNav } from './user-nav'

export const NavBar = () => {
	return (
		// <nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/70 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'>
		<nav className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex items-center justify-between'>
				<Link href={ROUTES.main}>
					<Image
						src='/img/logo/dark-logo.png'
						alt='logo'
						className='block dark:hidden'
						width={64}
						height={28}
					/>
					<Image
						src='/img/logo/white-logo.png'
						alt='logo'
						className='hidden dark:block'
						width={64}
						height={28}
					/>
				</Link>
				<LinksNav />
				<div className='flex items-center gap-2'>
					<ToggleTheme />
					<MenuBurger />
					<ForGuest>
						<Button asChild className='hidden sm:block' variant='ghost'>
							<Link href={ROUTES['sign-in']}>Авторизация</Link>
						</Button>
					</ForGuest>
					<ForUser>
						<UserNav />
					</ForUser>
				</div>
			</div>
		</nav>
	)
}
