import { useQuery } from '@tanstack/react-query'

import { DirectionService } from '../../services'

export const useGetAllDirectionsQuery = (
	settings?: QuerySettings<typeof DirectionService.getAll>
) =>
	useQuery({
		queryKey: ['directions'],
		queryFn: () => DirectionService.getAll({ config: settings?.config }),
		...settings?.options
	})
