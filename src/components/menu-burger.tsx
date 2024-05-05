import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { NAV_LINKS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shared/ui'

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
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}
