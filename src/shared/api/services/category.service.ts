import { api, apiWithAuth } from '../instances'

const PREFIX = '/category'

export type GetAllConfig = RequestConfig<{}>
export type CategoryCreateConfig = RequestConfig<{ title: string }>
export type CategoryUpdateConfig = RequestConfig<{ id: string; title: string }>
export type CategoryDeleteConfig = RequestConfig<{ id: string }>

export const CategoryService = {
	getAll: async ({ config }: GetAllConfig) =>
		api.get<Category[]>(`${PREFIX}`, config).then(res => res.data),

	create: async ({ params, config }: CategoryCreateConfig) =>
		apiWithAuth.post<Category>(`${PREFIX}`, params, config),

	update: async ({ params, config }: CategoryUpdateConfig) =>
		apiWithAuth.patch<Category>(`${PREFIX}/${params?.id}`, params, config),

	delete: async ({ params, config }: CategoryDeleteConfig) =>
		apiWithAuth.delete<Category>(`${PREFIX}/${params?.id}`, config)
}
