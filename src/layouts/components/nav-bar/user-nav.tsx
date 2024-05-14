import { Link } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { AvatarUser, ForAdmin } from '@/components'
import { usePostLogoutMutation } from '@/shared/api'
import { ROUTES } from '@/shared/constants'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/shared/ui'

export const UserNav = () => {
	const { user } = useUser()
	const { mutate } = usePostLogoutMutation()

	const handleClickLogout = () => {
		mutate({})
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<AvatarUser user={user} />
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
					<Link to={ROUTES['user-internship']}>Стажировка</Link>
				</DropdownMenuItem>

				<ForAdmin>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link to={ROUTES.admin}>Админка</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link to={ROUTES['admin-internship']}>Стажировка</Link>
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
