import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	RequestBackCallService,
	UpdateRequestBackCallConfig
} from '../../services'

export const useUpdateRequestBackCallMutation = (
	settings?: MutationSettings<
		UpdateRequestBackCallConfig,
		typeof RequestBackCallService.update
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-request-back-call'],
		mutationFn: ({ params, config }) =>
			RequestBackCallService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['requestBackCalls'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
