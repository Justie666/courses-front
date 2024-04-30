import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { LessonCreateConfig, LessonService } from '../../services'

export const useCreateLessonMutation = (
	settings?: MutationSettings<LessonCreateConfig, typeof LessonService.create>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-lesson'],
		mutationFn: ({ params, config }) =>
			LessonService.create({
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
