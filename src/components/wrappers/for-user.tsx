import { PropsWithChildren } from 'react'

import { useUser } from '@/app/user-provider'

export const ForUser = ({ children }: PropsWithChildren) => {
	const { user } = useUser()

	if (!user) return null

	return children
}
