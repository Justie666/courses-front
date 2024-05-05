import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	CreateRequestBackCallConfig,
	RequestBackCallService
} from '../../services'

export const useCreateRequestBackCallMutation = (
	settings?: MutationSettings<
		CreateRequestBackCallConfig,
		typeof RequestBackCallService.create
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-request'],
		mutationFn: ({ params, config }) =>
			RequestBackCallService.create({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['requests'] })
			toast('Заявка была отправлена')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
