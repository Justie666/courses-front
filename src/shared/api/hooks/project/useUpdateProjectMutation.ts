import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ProjectService, ProjectUpdateConfig } from '../../services'

export const useUpdateProjectMutation = (
	settings?: MutationSettings<ProjectUpdateConfig, typeof ProjectService.update>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-project'],
		mutationFn: ({ params, config }) =>
			ProjectService.update({
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
