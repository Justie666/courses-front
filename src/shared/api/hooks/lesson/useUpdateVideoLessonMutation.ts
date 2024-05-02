import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { LessonService, LessonUpdateVideoConfig } from '../../services'

export const useUpdateVideoLessonMutation = (
	settings?: MutationSettings<
		LessonUpdateVideoConfig,
		typeof LessonService.updateVideo
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-lesson-video'],
		mutationFn: ({ params, config }) =>
			LessonService.updateVideo({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['course', response.data.courseSlug]
			})
			toast(response.data.message)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
