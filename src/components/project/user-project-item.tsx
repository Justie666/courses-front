import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui'

interface UserProjectItemProps {
	user: UserProject
}

export const UserProjectItem = ({ user }: UserProjectItemProps) => {
	return (
		<div className='flex gap-2 items-center'>
			{/* TODO вынести аватар в отдельный компонент */}
			<Avatar className='size-10'>
				<AvatarImage src='' />
				<AvatarFallback>{user.User.name.substring(0, 2)}</AvatarFallback>
			</Avatar>
			<div className='leading-4'>
				<span className='font-medium'>{user.User.name}</span>
				<br />
				{user.Direction.title}
			</div>
		</div>
	)
}
