import { api, apiWithAuth } from '../instances'

const PREFIX = '/request-back-call'

export type GetAllRequestBackCallConfig = RequestConfig

export type CreateRequestBackCallConfig = RequestConfig<{
	phone: string
	problem: string
	name: string
}>

export type UpdateRequestBackCallConfig = RequestConfig<{
	id: string
	comment: string
	status: string
}>

export const RequestBackCallService = {
	getAll: async ({ config }: GetAllRequestBackCallConfig) =>
		apiWithAuth
			.get<RequestBackCall[]>(`${PREFIX}`, config)
			.then(res => res.data),

	create: async ({ params, config }: CreateRequestBackCallConfig) =>
		api.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: UpdateRequestBackCallConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config)
}
