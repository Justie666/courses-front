import { useQuery } from '@tanstack/react-query'

import { RequestBackCallService } from '../../services/request-back-call.service'

export const useGetAllRequestBackCallQuery = (
	settings?: QuerySettings<typeof RequestBackCallService.getAll>
) =>
	useQuery({
		queryKey: ['requests'],
		queryFn: () => RequestBackCallService.getAll({ config: settings?.config }),
		...settings?.options
	})
