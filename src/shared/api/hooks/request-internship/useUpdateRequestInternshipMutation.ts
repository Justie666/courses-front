import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	RequestInternshipService,
	UpdateRequestInternshipConfig
} from '../../services'

export const useUpdateRequestInternshipMutation = (
	settings?: MutationSettings<
		UpdateRequestInternshipConfig,
		typeof RequestInternshipService.update
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['update-request-internship'],
		mutationFn: ({ params, config }) =>
			RequestInternshipService.update({
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
