import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { ProjectCreateConfig, ProjectService } from '../../services'

export const useCreateProjectMutation = (
	settings?: MutationSettings<ProjectCreateConfig, typeof ProjectService.create>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-project'],
		mutationFn: ({ params, config }) =>
			ProjectService.create({
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
