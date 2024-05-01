'use client'

import Link from 'next/link'

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
	console.log(user)
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
					<Link href={ROUTES.profile}>Мой аккаунт</Link>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<Link href={ROUTES.favorites}>Избранное</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href={ROUTES.applications}>Мои заявки</Link>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<Link href={ROUTES.admin}>Админка</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href={ROUTES['admin-requests']}>Заявки</Link>
				</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem onClick={handleClickLogout}>Выход</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
