import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { DirectionDeleteConfig, DirectionService } from '../../services'

export const useDeleteDirectionMutation = (
	settings?: MutationSettings<
		DirectionDeleteConfig,
		typeof DirectionService.delete
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-direction'],
		mutationFn: ({ params, config }) =>
			DirectionService.delete({
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
