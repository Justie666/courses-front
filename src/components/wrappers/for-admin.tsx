import { PropsWithChildren } from 'react'

import { useUser } from '@/app/user-provider'

interface ForAdminProps extends PropsWithChildren {}

export const ForAdmin = ({ children }: ForAdminProps) => {
	const { user } = useUser()

	if (!user) return null

	if (user.role !== 'ADMIN') return null

	return children
}
