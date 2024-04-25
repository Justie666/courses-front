import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	CourseCreateConfig,
	CourseService
} from '../../services/course.service'

export const useCreateCourseMutation = (
	settings?: MutationSettings<CourseCreateConfig, typeof CourseService.create>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-course'],
		mutationFn: ({ params, config }) =>
			CourseService.create({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast('Курс был добавлен')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
