'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shared/ui'

export const MenuBurger = () => {
	const pathname = usePathname()

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
							href={link.href}
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
