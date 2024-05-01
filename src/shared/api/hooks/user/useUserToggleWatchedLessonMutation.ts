import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ToggleWatchedLessonConfig, UserService } from '../../services'

export const useUserToggleWatchedLessonMutation = (
	settings?: MutationSettings<
		ToggleWatchedLessonConfig,
		typeof UserService.toggleWatchedLesson
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['toggle-watched-lesson', settings?.config?.params.lessonId],
		mutationFn: ({ params, config }) =>
			UserService.toggleWatchedLesson({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['user']
			})
			toast(response.data.message)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
