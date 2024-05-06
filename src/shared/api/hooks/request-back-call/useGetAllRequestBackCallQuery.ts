import { useQuery } from '@tanstack/react-query'

import { RequestBackCallService } from '../../services'

export const useGetAllRequestBackCallQuery = (
	settings?: QuerySettings<typeof RequestBackCallService.getAll>
) =>
	useQuery({
		queryKey: ['requestBackCalls'],
		queryFn: () => RequestBackCallService.getAll({ config: settings?.config }),
		...settings?.options
	})
