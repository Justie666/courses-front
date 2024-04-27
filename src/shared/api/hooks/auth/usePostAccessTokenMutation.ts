import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { removeAccessToken, saveAccessToken } from '@/shared/services'

import { AccessTokenConfig, AuthService } from '../../services'

export const usePostAccessTokenMutation = (
	settings?: MutationSettings<AccessTokenConfig, typeof AuthService.accessToken>
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['logout'],
		mutationFn: ({ params, config }) =>
			AuthService.accessToken({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			saveAccessToken(response.data.accessToken)
			queryClient.invalidateQueries({ queryKey: ['user'] })
			toast('Вы вышли из аккаунта')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
