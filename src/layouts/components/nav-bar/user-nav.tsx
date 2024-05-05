import { Link } from 'react-router-dom'

import { ForAdmin } from '@/components'
import { useGetCurrentUserQuery, usePostLogoutMutation } from '@/shared/api'
import { ROUTES } from '@/shared/constants'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui'

export const UserNav = () => {
	const { data: user } = useGetCurrentUserQuery()
	const { mutate } = usePostLogoutMutation()

	const handleClickLogout = () => {
		mutate({})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className='size-10'>
					<AvatarImage src='' />
					<AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>
					<Link to={ROUTES.profile}>Мой аккаунт</Link>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<Link to={ROUTES['user-courses']}>Мои курсы</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to={ROUTES['user-applications']}>Мои заявки</Link>
				</DropdownMenuItem>

				<ForAdmin>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link to={ROUTES.admin}>Админка</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link to={ROUTES['admin-requests']}>Заявки</Link>
					</DropdownMenuItem>
				</ForAdmin>

				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={handleClickLogout}>Выход</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
