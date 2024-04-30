import { useQuery } from '@tanstack/react-query'

import { CourseGetBySlugConfig, CourseService } from '../../services'

export const useGetBySlugCourseQuery = (
	settings?: QuerySettings<typeof CourseService.getBySlug>
) =>
	useQuery({
		queryKey: ['course', settings?.config?.params.slug],
		queryFn: () => CourseService.getBySlug({ config: settings?.config }),
		...settings?.options
	})
