import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { DeleteTaskConfig, TaskService } from '../../services'

export const useDeleteTaskMutation = (
	settings?: MutationSettings<DeleteTaskConfig, typeof TaskService.delete>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-task'],
		mutationFn: ({ params, config }) =>
			TaskService.delete({
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
