import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { DirectionCreateConfig, DirectionService } from '../../services'

export const useCreateDirectionMutation = (
	settings?: MutationSettings<
		DirectionCreateConfig,
		typeof DirectionService.create
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-direction'],
		mutationFn: ({ params, config }) =>
			DirectionService.create({
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
