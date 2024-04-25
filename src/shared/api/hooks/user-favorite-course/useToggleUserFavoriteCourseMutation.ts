import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	ToggleUserFavoriteCourseCreateConfig,
	UserFavoriteCourse
} from '../../services'

export const useToggleUserFavoriteCourseMutation = (
	settings?: MutationSettings<
		ToggleUserFavoriteCourseCreateConfig,
		typeof UserFavoriteCourse.toggle
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['toggle-course', settings?.config?.params.courseId],
		mutationFn: ({ params, config }) =>
			UserFavoriteCourse.toggle({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['user'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
