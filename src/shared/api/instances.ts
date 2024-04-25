import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'

import { getAccessToken, removeAccessToken } from '@/shared/services'

import { env } from '../constants'
import { errorCatch } from './error'
import { AuthService } from './services'

const options: CreateAxiosDefaults = {
	baseURL: env.API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const api = axios.create(options)
const apiWithAuth = axios.create(options)

apiWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

apiWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				// TODO
				await AuthService.accessToken({})
				return apiWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeAccessToken()
			}
		}
		throw error
	}
)

export { api, apiWithAuth }
