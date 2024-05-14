import { apiWithAuth } from '../instances'

const PREFIX = '/task'

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
	title: string
	status: StatusTask
	content: string
	deadline?: Date
	priority?: Priority
	userId?: string
}>

export type DeleteTaskConfig = RequestConfig<{
	id: string
}>

export const TaskService = {
	create: async ({ params, config }: CreateTaskConfig) =>
		apiWithAuth.post<string>(`${PREFIX}`, params, config),

	update: async ({ params, config }: UpdateTaskConfig) =>
		apiWithAuth.patch<string>(`${PREFIX}/${params?.id}`, params, config),

	delete: async ({ params, config }: DeleteTaskConfig) =>
		apiWithAuth.delete<string>(`${PREFIX}/${params?.id}`, config)
}
