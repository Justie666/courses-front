import { useQuery } from '@tanstack/react-query'

import { ProjectService } from '../../services'

export const useGetAllProjectsQuery = (
	settings?: QuerySettings<typeof ProjectService.getAll>
) =>
	useQuery({
		queryKey: ['projects'],
		queryFn: () => ProjectService.getAll({ config: settings?.config }),
		...settings?.options
	})
