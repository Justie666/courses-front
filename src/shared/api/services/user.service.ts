import { apiWithAuth } from '../instances'

const PREFIX = '/user'

export type CurrentUserConfig = RequestConfig | void

export type ToggleUserFavoriteCourseConfig = RequestConfig<{
	courseId: string
}>

export type BuyCourseConfig = RequestConfig<{
	courseId: string
}>

export const UserService = {
	currentUser: async (requestConfig: CurrentUserConfig) =>
		apiWithAuth
			.get<User>(`${PREFIX}/current-user`, requestConfig?.config)
			.then(res => res.data),

	toggleFavoriteCourse: async ({
		params,
		config
	}: ToggleUserFavoriteCourseConfig) =>
		apiWithAuth.post<string>(
			`${PREFIX}/toggle-favorite-course`,
			params,
			config
		),

	buyCourse: async ({ params, config }: BuyCourseConfig) =>
		apiWithAuth.post<string>(`${PREFIX}/buy-course`, params, config)
}
