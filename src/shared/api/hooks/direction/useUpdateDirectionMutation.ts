import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { DirectionService, DirectionUpdateConfig } from '../../services'

export const useUpdateDirectionMutation = (
	settings?: MutationSettings<
		DirectionUpdateConfig,
		typeof DirectionService.update
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-direction'],
		mutationFn: ({ params, config }) =>
			DirectionService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['directions'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
