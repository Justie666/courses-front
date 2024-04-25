import Link from 'next/link'

import { NAV_LINKS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { Button, buttonVariants } from '@/shared/ui'

interface LinksNavProps {
	className?: string
}

export const LinksNav = ({ className }: LinksNavProps) => {
	return (
		<div className={cn('hidden space-x-2 sm:block', className)}>
			{NAV_LINKS.map(link => (
				<Button variant='ghost' asChild key={link.href}>
					<Link
						href={link.href}
						className={cn(
							'text-sm font-medium transition-colors hover:text-primary'
						)}>
						{link.label}
					</Link>
				</Button>
			))}
		</div>
	)
}
