import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CourseService, CourseUpdateImageConfig } from '../../services'

export const useUpdateImageCourseMutation = (
	settings?: MutationSettings<
		CourseUpdateImageConfig,
		typeof CourseService.updateImage
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-course-image'],
		mutationFn: ({ params, config }) =>
			CourseService.updateImage({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
