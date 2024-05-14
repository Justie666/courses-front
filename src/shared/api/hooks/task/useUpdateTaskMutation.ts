import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TaskService, UpdateTaskConfig } from '../../services'

export const useUpdateTaskMutation = (
	settings?: MutationSettings<UpdateTaskConfig, typeof TaskService.update>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-task'],
		mutationFn: ({ params, config }) =>
			TaskService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({
				queryKey: ['project', settings?.config?.params.projectId]
			})
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
