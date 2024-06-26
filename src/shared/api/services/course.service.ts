import { api, apiWithAuth } from '../instances'

const PREFIX = '/course'

export type CourseGetAllConfig = RequestConfig
export type CourseGetBySlugConfig = RequestConfig<{
	slug: string
}>
export type CourseCreateConfig = RequestConfig<{ title: string }>
export type CourseUpdateConfig = RequestConfig<{ id: string; title: string }>
export type CourseUpdateImageConfig = RequestConfig<{
	id: string
	image: File
}>
export type CourseDeleteConfig = RequestConfig<{ id: string }>

export const CourseService = {
	getAll: async ({ config }: CourseGetAllConfig) =>
		api.get<Course[]>(`${PREFIX}`, config).then(res => res.data),

	getBySlug: async ({ config }: CourseGetBySlugConfig) =>
		api.get<Course>(`${PREFIX}/one`, config).then(res => res.data),

	create: async ({ params, config }: CourseCreateConfig) =>
		apiWithAuth.post<Course>(`${PREFIX}`, params, config),

	update: async ({ params, config }: CourseUpdateConfig) =>
		apiWithAuth.patch<Course>(`${PREFIX}/${params?.id}`, params, config),

	updateImage: async ({ params, config }: CourseUpdateImageConfig) =>
		apiWithAuth.patch<string>(
			`${PREFIX}/update-image/${params?.id}`,
			params,
			config
		),

	delete: async ({ params, config }: CourseDeleteConfig) =>
		apiWithAuth.delete<Course>(`${PREFIX}/${params?.id}`, config)
}
