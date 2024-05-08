import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CreateTaskConfig, TaskService } from '../../services'

export const useCreateTaskMutation = (
	settings?: MutationSettings<CreateTaskConfig, typeof TaskService.create>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-task'],
		mutationFn: ({ params, config }) =>
			TaskService.create({
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
