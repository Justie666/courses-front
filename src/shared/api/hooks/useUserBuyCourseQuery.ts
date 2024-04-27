import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { BuyCourseConfig, UserService } from '../services'

export const useUserBuyCourseQuery = (
	settings?: MutationSettings<BuyCourseConfig, typeof UserService.buyCourse>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['buy-course', settings?.config?.params.courseId],
		mutationFn: ({ params, config }) =>
			UserService.buyCourse({
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
