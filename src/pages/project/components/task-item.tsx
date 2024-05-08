import { Clock10 } from 'lucide-react'

import { AvatarUser } from '@/components'

interface TaskItemProps {
	task: Task
}

export const TaskItem = ({ task }: TaskItemProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='rounded-xl p-3 border bg-muted/50'>
				<div className='text-sm'>{task.Direction.title}</div>
				<div className='text-medium'>{task.title}</div>
				<div className='mt-3 flex gap-1 items-center'>
					<Clock10 className='size-4' />
					01 июн
				</div>
				<div className='flex gap-2 items-center'>
					<AvatarUser user={task.User} className='size-3' />
					<span>{task.User.name}</span>
				</div>
			</div>
		</div>
	)
}
