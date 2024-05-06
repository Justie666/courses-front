import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	CreateRequestInternshipConfig,
	RequestInternshipService
} from '../../services'

export const useCreateRequestInternshipMutation = (
	settings?: MutationSettings<
		CreateRequestInternshipConfig,
		typeof RequestInternshipService.create
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-request-internship'],
		mutationFn: ({ params, config }) =>
			RequestInternshipService.create({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['requestInternships'] })
			toast(response.data)
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
