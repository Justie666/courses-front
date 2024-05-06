import { apiWithAuth } from '../instances'

const PREFIX = '/request-back-call'

export type GetAllRequestInternshipConfig = RequestConfig

export type CreateRequestInternshipConfig = RequestConfig<
	Omit<
		RequestInternship,
		'id' | 'createdAt' | 'updatedAt' | 'status' | 'userId'
	>
>

export type UpdateRequestInternshipConfig = RequestConfig<
	Pick<RequestInternship, 'id' | 'status'>
>

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
