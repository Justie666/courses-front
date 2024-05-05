import { api, apiWithAuth } from '../instances'

const PREFIX = '/project'

export type GetAllConfigProjects = RequestConfig
export type ProjectCreateConfig = RequestConfig<{ title: string }>
export type ProjectUpdateConfig = RequestConfig<{
	id: string
	title: string
	status: StatusProject
}>
export type ProjectDeleteConfig = RequestConfig<{ id: string }>

export const ProjectService = {
	getAll: async ({ config }: GetAllConfigProjects) =>
		api.get<Project[]>(`${PREFIX}`, config).then(res => res.data),

	create: async ({ params, config }: ProjectCreateConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: ProjectUpdateConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config),

	delete: async ({ params, config }: ProjectDeleteConfig) =>
		apiWithAuth.delete<string>(`${PREFIX}/${params?.id}`, config)
}
