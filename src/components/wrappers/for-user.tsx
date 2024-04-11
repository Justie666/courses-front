'use client'

import { PropsWithChildren } from 'react'

import { useGetCurrentUserQuery } from '@/shared/api'

export const ForUser = ({ children }: PropsWithChildren) => {
	const { data: user, isError } = useGetCurrentUserQuery()
	if (!user || isError) return null

	return children
}
