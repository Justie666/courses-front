import { UserProjectItem } from './user-project-item'

interface UsersProjectItemProps {
	users: UserProject[]
}

export const UsersProjectList = ({ users }: UsersProjectItemProps) => {
	return (
		<div className='flex flex-col gap-2'>
			{users.map(user => (
				<UserProjectItem key={user.id} user={user} />
			))}
		</div>
	)
}
