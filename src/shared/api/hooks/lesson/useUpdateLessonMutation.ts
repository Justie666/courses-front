import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { LessonService, LessonUpdateConfig } from '../../services'

export const useUpdateLessonMutation = (
	settings?: MutationSettings<LessonUpdateConfig, typeof LessonService.update>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-lesson'],
		mutationFn: ({ params, config }) =>
			LessonService.update({
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
