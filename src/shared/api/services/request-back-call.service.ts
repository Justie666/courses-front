import { apiWithAuth } from '../instances'

const PREFIX = '/request-back-call'

export type GetAllRequestBackCallConfig = RequestConfig

export type CreateRequestBackCallConfig = RequestConfig<{
	phone: string
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
		apiWithAuth.post<RequestBackCall>(`${PREFIX}`, params, config),

	update: async ({ params, config }: UpdateRequestBackCallConfig) =>
		apiWithAuth.patch<RequestBackCall>(
			`${PREFIX}/${params?.id}`,
			params,
			config
		)
}
