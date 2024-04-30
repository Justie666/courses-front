import { apiWithAuth } from '../instances'

const PREFIX = '/lesson'

export type LessonCreateConfig = RequestConfig<{
	title: string
	courseId: string
}>

export type LessonUpdateConfig = RequestConfig<{
	id: string
	title: string
	courseId: string
}>

export type LessonDeleteConfig = RequestConfig<{
	id: string
}>

export const LessonService = {
	create: async ({ params, config }: LessonCreateConfig) =>
		apiWithAuth.post<{ courseSlug: string; message: string }>(
			`${PREFIX}`,
			params,
			config
		),

	update: async ({ params, config }: LessonUpdateConfig) =>
		apiWithAuth.patch<{ courseSlug: string; message: string }>(
			`${PREFIX}/${params?.id}`,
			params,
			config
		),

	delete: async ({ params, config }: LessonDeleteConfig) =>
		apiWithAuth.delete<{ courseSlug: string; message: string }>(
			`${PREFIX}/${params?.id}`,
			config
		)
}
