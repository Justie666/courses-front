'use client'

import Link from 'next/link'

import { ForGuest, ForUser, ToggleTheme } from '@/components'
import { MenuBurger } from '@/components/menu-burger'
import { useGetCurrentUserQuery, usePostLogoutMutation } from '@/shared/api'
import { ROUTES } from '@/shared/constants'
import { Button } from '@/shared/ui'

export const NavBar = () => {
	// TODO local storage ????
	const { data: user } = useGetCurrentUserQuery()
	const { mutate } = usePostLogoutMutation()

	const handleClickLogout = () => {
		mutate({})
	}

	console.log(user)

	return (
		<nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/70 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'>
			<div className='container flex items-center justify-between'>
				<Link href={ROUTES.main}>
					Logo
					{/* <Image src='/img/logo.png' alt='logo' width={100} height={100} /> */}
				</Link>
				<div className='flex items-center gap-2'>
					<ToggleTheme />
					<MenuBurger />
					<ForGuest>
						<Button asChild className='hidden sm:block' variant='ghost'>
							<Link href={ROUTES['sign-in']}>Авторизация</Link>
						</Button>
					</ForGuest>
					<ForUser>
						<Button
							onClick={handleClickLogout}
							className='hidden sm:block'
							variant='ghost'>
							Выход
						</Button>
					</ForUser>
				</div>
			</div>
		</nav>
	)
}
