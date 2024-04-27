import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	RequestBackCallService,
	UpdateRequestBackCallConfig
} from '../../services/request-back-call.service'

export const useUpdateRequestBackCallMutation = (
	settings?: MutationSettings<
		UpdateRequestBackCallConfig,
		typeof RequestBackCallService.update
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-request'],
		mutationFn: ({ params, config }) =>
			RequestBackCallService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['requests'] })
			toast('Заявка была изменена')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
