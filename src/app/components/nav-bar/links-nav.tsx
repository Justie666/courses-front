'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

interface LinksNavProps {
	className?: string
}

export const LinksNav = ({ className }: LinksNavProps) => {
	const pathname = usePathname()

	return (
		<div className={cn('hidden space-x-2 sm:block', className)}>
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
		</div>
	)
}
