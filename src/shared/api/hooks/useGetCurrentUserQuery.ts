import { useQuery } from '@tanstack/react-query'

import { UserService } from '../services'

export const useGetCurrentUserQuery = (
	settings?: QuerySettings<typeof UserService.currentUser>
) =>
	useQuery({
		queryKey: ['user'],
		queryFn: () => UserService.currentUser({ config: settings?.config }),
		...settings?.options
	})
