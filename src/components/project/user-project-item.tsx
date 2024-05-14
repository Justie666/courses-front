import { AvatarUser } from '../avatar-user'

interface UserProjectItemProps {
	user: UserProject
}

export const UserProjectItem = ({ user }: UserProjectItemProps) => {
	return (
		<div className='flex gap-2 items-center'>
			<AvatarUser user={user.User} />
			<div className='leading-4'>
				<span className='font-medium'>{user.User.name}</span>
				<br />
				{user.Direction.title}
			</div>
		</div>
	)
}
