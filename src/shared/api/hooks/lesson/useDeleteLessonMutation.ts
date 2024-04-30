import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { LessonDeleteConfig, LessonService } from '../../services'

export const useDeleteLessonMutation = (
	settings?: MutationSettings<LessonDeleteConfig, typeof LessonService.delete>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-lesson'],
		mutationFn: ({ params, config }) =>
			LessonService.delete({
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
