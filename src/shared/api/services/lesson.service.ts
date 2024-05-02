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

export type LessonUpdateVideoConfig = RequestConfig<{
	id: string
	video: File
}>

export type LessonDeleteConfig = RequestConfig<{
	id: string
}>

interface LessonRequest {
	courseSlug: string
	message: string
}

export const LessonService = {
	create: async ({ params, config }: LessonCreateConfig) =>
		apiWithAuth.post<LessonRequest>(`${PREFIX}`, params, config),

	update: async ({ params, config }: LessonUpdateConfig) =>
		apiWithAuth.patch<LessonRequest>(`${PREFIX}/${params?.id}`, params, config),

	updateVideo: async ({ params, config }: LessonUpdateVideoConfig) =>
		apiWithAuth.patch<LessonRequest>(
			`${PREFIX}/update-video/${params?.id}`,
			params,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				...config
			}
		),

	delete: async ({ params, config }: LessonDeleteConfig) =>
		apiWithAuth.delete<LessonRequest>(`${PREFIX}/${params?.id}`, config)
}
