import { DialogCreateTask } from './create'
import { TaskItem } from './task-item'

interface TasksLineProps {
	status: 'Нет статус' | 'В процессе' | 'Тестируется' | 'Готово'
	projectId: string
	directionId: string
	tasks?: Task[]
	users: User[]
}

const statusMapping: Record<string, StatusTask> = {
	'Нет статус': 'NO_STATUS',
	'В процессе': 'IN_PROGRESS',
	Тестируется: 'TESTING',
	Готово: 'DONE'
}

export const TasksLine = ({
	status,
	directionId,
	projectId,
	tasks,
	users
}: TasksLineProps) => {
	const statusForCreate = statusMapping[status]

	const filterTasks = tasks?.filter(task => {
		console.log('Статус столбца ' + status)
		console.log('Статус такси ' + task.status)
		console.log('Статус таксивввв ' + statusForCreate)

		return task.status === statusForCreate
	})

	return (
		<div className='rounded-xl p-3 border bg-muted/50'>
			<div className='font-bold text-xl'>{status}</div>
			<hr className='my-3' />
			<div className='flex flex-col gap-2'>
				{filterTasks?.map(task => <TaskItem key={task.id} task={task} />)}
				<DialogCreateTask
					status={statusForCreate}
					directionId={directionId}
					projectId={projectId}
					users={users}
				/>
			</div>
		</div>
	)
}
