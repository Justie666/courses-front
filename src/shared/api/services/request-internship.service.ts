import { apiWithAuth } from '../instances'

const PREFIX = '/request-internship'

export type GetAllRequestInternshipConfig = RequestConfig

export type CreateRequestInternshipConfig = RequestConfig<{
	phone: string
	skills: string
	aboutMe: string
	projects: string
	directionId: string
}>

export type UpdateRequestInternshipConfig = RequestConfig<{
	id: string
	status: StatusRequest
	projectId?: string
}>

export const RequestInternshipService = {
	getAll: async ({ config }: GetAllRequestInternshipConfig) =>
		apiWithAuth
			.get<RequestInternship[]>(`${PREFIX}`, config)
			.then(res => res.data),

	create: async ({ params, config }: CreateRequestInternshipConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: UpdateRequestInternshipConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config)
}
