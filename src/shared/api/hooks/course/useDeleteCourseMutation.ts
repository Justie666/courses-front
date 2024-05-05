import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CourseDeleteConfig, CourseService } from '../../services'

export const useDeleteCourseMutation = (
	settings?: MutationSettings<CourseDeleteConfig, typeof CourseService.delete>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-course'],
		mutationFn: ({ params, config }) =>
			CourseService.delete({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast('Курс был удален')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
