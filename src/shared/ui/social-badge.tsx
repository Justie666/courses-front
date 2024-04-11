import Link from 'next/link'

import { cn } from '../lib/utils'

interface SocialBadgeProps {
	social?: string
	href: string
	icon: React.ReactNode
	className?: string
}

export const SocialBadge = ({
	social,
	href,
	icon,
	className
}: SocialBadgeProps) => {
	return (
		<Link
			target='_blank'
			href={href}
			className={cn(
				'flex items-center justify-center rounded-lg border border-slate-100 px-2 py-1 transition hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800',
				className
			)}>
			<div className='p-1.5'>{icon}</div>
			{social && <p className='font-medium'>{social}</p>}
		</Link>
	)
}
