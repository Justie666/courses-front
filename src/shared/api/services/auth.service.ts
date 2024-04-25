import { saveAccessToken } from '@/shared/services'

import { api, apiWithAuth } from '../instances'

const PREFIX = '/auth'

export type SignInConfig = RequestConfig<{
	email: string
	password: string
}>

export type SignUnConfig = RequestConfig<{
	email: string
	name: string
	password: string
}>

export type LogoutConfig = RequestConfig<{}>

export type AccessTokenConfig = RequestConfig<{}>

export const AuthService = {
	signIn: async ({ params, config }: SignInConfig) =>
		api.post<UserResponse>(`${PREFIX}/sign-in`, params, config),

	signUp: async ({ params, config }: SignUnConfig) =>
		api.post<UserResponse>(`${PREFIX}/sign-up`, params, config),

	logout: async ({ params, config }: LogoutConfig) =>
		apiWithAuth.post<UserResponse>(`${PREFIX}/logout`, params, config),

	accessToken: async ({ params, config }: AccessTokenConfig) => {
		const response = await api.post<UserResponse>(
			`${PREFIX}/access-token`,
			params,
			config
		)

		if (response.data.accessToken) saveAccessToken(response.data.accessToken)

		return response
	}
}
