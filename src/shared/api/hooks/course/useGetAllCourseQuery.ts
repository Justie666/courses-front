import { useQuery } from '@tanstack/react-query'

import { CourseService } from '../../services'

export const useGetAllCourseQuery = (
	settings?: QuerySettings<typeof CourseService.getAll>
) =>
	useQuery({
		queryKey: ['courses'],
		queryFn: () => CourseService.getAll({ config: settings?.config }),
		...settings?.options
	})
