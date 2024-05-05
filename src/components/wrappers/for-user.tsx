'use client'

import { useLocalStorage } from '@uidotdev/usehooks'
import { PropsWithChildren } from 'react'

export const ForUser = ({ children }: PropsWithChildren) => {
	// const { data: user, isError } = useGetCurrentUserQuery()
	// if (!user || isError) return null
	// if (!user || isError) return null

	// const user = JSON.parse(localStorage.getItem('user'))

	const [user] = useLocalStorage('user', null)

	if (!user) return null

	return children
}
