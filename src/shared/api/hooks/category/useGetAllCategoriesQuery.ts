import { useQuery } from '@tanstack/react-query'

import { CategoryService } from '../../services'

export const useGetAllCategoriesQuery = (
	settings?: QuerySettings<typeof CategoryService.getAll>
) =>
	useQuery({
		queryKey: ['categories'],
		queryFn: () => CategoryService.getAll({ config: settings?.config }),
		...settings?.options
	})
