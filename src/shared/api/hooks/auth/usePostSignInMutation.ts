import { useMutation, useQueries, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { ROUTES } from '@/shared/constants'
import { saveAccessToken } from '@/shared/services'

import { AuthService, SignInConfig } from '../../services'

export const usePostSignInMutation = (
	settings?: MutationSettings<SignInConfig, typeof AuthService.signIn>
) => {
	const router = useRouter()
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['sign-in'],
		mutationFn: ({ params, config }) =>
			AuthService.signIn({
				params: params,
				config: { ...settings?.config, ...config }
			}),
		...settings?.options,
		// TODO логика сохранения токена
		onSuccess: response => {
			saveAccessToken(response.data.accessToken)
			queryClient.invalidateQueries({ queryKey: ['user'] })
			queryClient.refetchQueries({ queryKey: ['user'] })
			router.push(ROUTES.main)
			toast('Вы успешно вошли в систему')
		},
		onError(error) {
			toast(error?.response?.data?.message || 'Упс, что-то пошло не так')
		}
	})
}
