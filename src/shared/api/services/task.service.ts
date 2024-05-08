import { apiWithAuth } from '../instances'

const PREFIX = '/task'

export type GetAllTaskConfig = RequestConfig

export type CreateTaskConfig = RequestConfig<{
	title: string
	status: StatusTask
	content: string
	deadline?: Date
	priority?: Priority
	projectId: string
	directionId: string
	userId?: string
}>

export type UpdateTaskConfig = RequestConfig<{
	id: string
	comment: string
	status: string
}>

export const TaskService = {
	getAll: async ({ config }: GetAllTaskConfig) =>
		apiWithAuth.get<Task[]>(`${PREFIX}`, config).then(res => res.data),

	create: async ({ params, config }: CreateTaskConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: UpdateTaskConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config)
}
