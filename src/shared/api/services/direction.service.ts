import { api, apiWithAuth } from '../instances'

const PREFIX = '/direction'

export type GetAllConfigDirections = RequestConfig
export type DirectionCreateConfig = RequestConfig<{ title: string }>
export type DirectionUpdateConfig = RequestConfig<{
	id: string
	title: string
}>
export type DirectionDeleteConfig = RequestConfig<{ id: string }>

export const DirectionService = {
	getAll: async ({ config }: GetAllConfigDirections) =>
		api.get<Direction[]>(`${PREFIX}`, config).then(res => res.data),

	create: async ({ params, config }: DirectionCreateConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: DirectionUpdateConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config),

	delete: async ({ params, config }: DirectionDeleteConfig) =>
		apiWithAuth.delete<string>(`${PREFIX}/${params?.id}`, config)
}
