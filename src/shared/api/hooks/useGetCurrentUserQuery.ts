import { useQuery } from '@tanstack/react-query'

import { useUser } from '@/app/user-provider'

import { UserService } from '../services'

export const useGetCurrentUserQuery = (
	settings?: QuerySettings<typeof UserService.currentUser>
) => {
	const { setUser } = useUser()
	const query = useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.currentUser({ config: settings?.config }),
		...settings?.options
	})

	if (query.data) {
		setUser(query.data)
		localStorage.setItem('user', JSON.stringify(query.data))
	}

	if (query.isError) {
		setUser(null)
		return {
			...query,
			data: undefined
		}
	} else {
		return { ...query }
	}
}
