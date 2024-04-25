import { api, apiWithAuth } from '../instances'

const PREFIX = '/course'

export type GetAllConfig = RequestConfig<{}>
export type CourseCreateConfig = RequestConfig<{ title: string }>
export type CourseUpdateConfig = RequestConfig<{ id: string; title: string }>
export type CourseDeleteConfig = RequestConfig<{ id: string }>

export const CourseService = {
	getAll: async ({ config }: GetAllConfig) =>
		api.get<Course[]>(`${PREFIX}`, config).then(res => res.data),

	create: async ({ params, config }: CourseCreateConfig) =>
		apiWithAuth.post<Course>(`${PREFIX}`, params, config),

	update: async ({ params, config }: CourseUpdateConfig) =>
		apiWithAuth.patch<Course>(`${PREFIX}/${params?.id}`, params, config),

	delete: async ({ params, config }: CourseDeleteConfig) =>
		apiWithAuth.delete<Course>(`${PREFIX}/${params?.id}`, config)
}
