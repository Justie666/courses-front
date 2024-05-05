import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { useUser } from '@/app/user-provider'
import { removeAccessToken } from '@/shared/services'

import { AuthService, LogoutConfig } from '../../services'

export const usePostLogoutMutation = (
	settings?: MutationSettings<LogoutConfig, typeof AuthService.logout>
) => {
	const { setUser } = useUser()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['logout'],
		mutationFn: ({ params, config }) =>
			AuthService.logout({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: () => {
			setUser(null)
			localStorage.removeItem('user')
			removeAccessToken()
			toast('Вы вышли из аккаунта')
			queryClient.invalidateQueries({ queryKey: ['user'] })
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
