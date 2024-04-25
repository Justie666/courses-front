import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	CourseService,
	CourseUpdateConfig
} from '../../services/course.service'

export const useUpdateCourseMutation = (
	settings?: MutationSettings<CourseUpdateConfig, typeof CourseService.update>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-category'],
		mutationFn: ({ params, config }) =>
			CourseService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast('Курс был изменен')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
