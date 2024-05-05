import { useQuery } from '@tanstack/react-query'

import { useUser } from '@/shared/store'

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

	if (query.isError) {
		return {
			...query,
			data: undefined
		}
	} else {
		return { ...query }
	}
}
