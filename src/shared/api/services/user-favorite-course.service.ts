import { apiWithAuth } from '../instances'

const PREFIX = '/user-favorite-course'

export type ToggleUserFavoriteCourseCreateConfig = RequestConfig<{
	courseId: string
}>

export const UserFavoriteCourse = {
	toggle: async ({ params, config }: ToggleUserFavoriteCourseCreateConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config)
}
