import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CategoryDeleteConfig, CategoryService } from '../../services'

export const useDeleteCategoryMutation = (
	settings?: MutationSettings<
		CategoryDeleteConfig,
		typeof CategoryService.delete
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['delete-category'],
		mutationFn: ({ params, config }) =>
			CategoryService.delete({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
			queryClient.invalidateQueries({ queryKey: ['courses'] })
			toast('Категория была удалена')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
