import { PropsWithChildren } from 'react'

import { useUser } from '@/app/user-provider'

export const ForUser = ({ children }: PropsWithChildren) => {
	// const { data: user, isError } = useGetCurrentUserQuery()
	// if (!user || isError) return null

	const { user } = useUser()
	console.log(user)

	if (!user) return null

	return children
}
