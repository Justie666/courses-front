import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ToggleUserFavoriteCourseConfig, UserService } from '../../services'

export const useToggleUserFavoriteCourseMutation = (
	settings?: MutationSettings<
		ToggleUserFavoriteCourseConfig,
		typeof UserService.toggleFavoriteCourse
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['toggle-favorite-course', settings?.config?.params.courseId],
		mutationFn: ({ params, config }) =>
			UserService.toggleFavoriteCourse({
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
