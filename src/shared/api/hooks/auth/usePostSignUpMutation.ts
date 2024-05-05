import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { ROUTES } from '@/shared/constants'
import { saveAccessToken } from '@/shared/services'

import { AuthService, SignUnConfig } from '../../services'

export const usePostSignUpMutation = (
	settings?: MutationSettings<SignUnConfig, typeof AuthService.signUp>
) => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['sign-up'],
		mutationFn: ({ params, config }) =>
			AuthService.signUp({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		onSuccess: response => {
			saveAccessToken(response.data.accessToken)
			queryClient.invalidateQueries({ queryKey: ['user'] })
			navigate(ROUTES.main)
			toast('Вы зарегистрировались и вошли в аккаунт')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
