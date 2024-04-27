import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { ROUTES } from '@/shared/constants'
import { saveAccessToken } from '@/shared/services'

import { AuthService, SignUnConfig } from '../../services'

export const usePostSignUpMutation = (
	settings?: MutationSettings<SignUnConfig, typeof AuthService.signUp>
) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['sign-up'],
		mutationFn: ({ params, config }) =>
			AuthService.signUp({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		// TODO логика сохранения токена
		onSuccess: response => {
			saveAccessToken(response.data.accessToken)
			router.push(ROUTES.main)
			queryClient.invalidateQueries({ queryKey: ['user'] })
			queryClient.refetchQueries({ queryKey: ['user'] })
			toast('Вы зарегистрировались и вошли в аккаунт')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
