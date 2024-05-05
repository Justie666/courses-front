import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ProjectDeleteConfig, ProjectService } from '../../services'

export const useDeleteProjectMutation = (
	settings?: MutationSettings<ProjectDeleteConfig, typeof ProjectService.delete>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-project'],
		mutationFn: ({ params, config }) =>
			ProjectService.delete({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
