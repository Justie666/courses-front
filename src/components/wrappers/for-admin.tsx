'use client'

import { PropsWithChildren } from 'react'

import { useGetCurrentUserQuery } from '@/shared/api'

interface ForAdminProps extends PropsWithChildren {}

export const ForAdmin = ({ children }: ForAdminProps) => {
	const { data: user } = useGetCurrentUserQuery()

	if (!user) return null

	if (user.role !== 'ADMIN') return null

	return children
}
