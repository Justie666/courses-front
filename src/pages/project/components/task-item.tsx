import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui'

import { DialogContentTask } from './dialog-content-task'
import { TaskInfo } from './task-info'

interface TaskItemProps {
	task: Task
	users: User[]
}

export const TaskItem = ({ task, users }: TaskItemProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='cursor-pointer'>
					<TaskInfo task={task} />
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogContentTask task={task} users={users} />
			</DialogContent>
		</Dialog>
	)
}
