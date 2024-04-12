import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { CategoryCreateConfig, CategoryService } from '../../services'

export const useCreateCategoryMutation = (
	settings?: MutationSettings<
		CategoryCreateConfig,
		typeof CategoryService.create
	>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-category'],
		mutationFn: ({ params, config }) =>
			CategoryService.create({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
			queryClient.refetchQueries({ queryKey: ['categories'] })
			toast('Категория была добавлена')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
