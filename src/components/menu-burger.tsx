import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { NAV_LINKS, ROUTES } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shared/ui'

import { ForGuest } from './wrappers'

export const MenuBurger = () => {
	const { pathname } = useLocation()

	return (
		<Sheet>
			<SheetTrigger className='block sm:hidden'>
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					{NAV_LINKS.map(link => (
						<Link
							key={link.href}
							to={link.href}
							className={cn(
								'text-sm font-medium transition-colors hover:text-primary',
								{ 'text-muted-foreground': pathname !== link.href }
							)}>
							{link.label}
						</Link>
					))}
					<ForGuest>
						<Link
							to={ROUTES['sign-in']}
							className={cn(
								'text-sm font-medium transition-colors hover:text-primary',
								{ 'text-muted-foreground': pathname !== ROUTES['sign-in'] }
							)}>
							Авторизация
						</Link>
					</ForGuest>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
