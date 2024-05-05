import { PropsWithChildren } from 'react'

import { useGetCurrentUserQuery } from '@/shared/api'

export const ForGuest = ({ children }: PropsWithChildren) => {
	const { data: user, isError } = useGetCurrentUserQuery()
	if (user && !isError) return null

	return children
}
