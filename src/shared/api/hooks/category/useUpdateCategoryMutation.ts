import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import {
	CategoryCreateConfig,
	CategoryService,
	CategoryUpdateConfig
} from '../../services'

export const useUpdateCategoryMutation = (
	settings?: MutationSettings<
		CategoryUpdateConfig,
		typeof CategoryService.update
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-category'],
		mutationFn: ({ params, config }) =>
			CategoryService.update({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast('Категория была изменена')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
