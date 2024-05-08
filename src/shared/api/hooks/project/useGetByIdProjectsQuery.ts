import { useQuery } from '@tanstack/react-query'

import { ProjectService } from '../../services'

export const useGetByIdProjectsQuery = (
	settings?: QuerySettings<typeof ProjectService.getById>
) =>
	useQuery({
		queryKey: ['project'],
		queryFn: () => ProjectService.getById({ config: settings?.config }),
		...settings?.options
	})
