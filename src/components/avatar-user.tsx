import { cn } from '@/shared/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui'

interface AvatarUserProps {
	user: User | null
	className?: string
}

export const AvatarUser = ({ user, className }: AvatarUserProps) => {
	if (!user) return null

	return (
		<Avatar className={cn('size-10', className)}>
			<AvatarImage src='' />
			<AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
		</Avatar>
	)
}
