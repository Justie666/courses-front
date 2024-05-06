import { useQuery } from '@tanstack/react-query'

import { RequestInternshipService } from '../../services'

export const useGetAllRequestInternshipQuery = (
	settings?: QuerySettings<typeof RequestInternshipService.getAll>
) =>
	useQuery({
		queryKey: ['requestInternships'],
		queryFn: () =>
			RequestInternshipService.getAll({ config: settings?.config }),
		...settings?.options
	})
