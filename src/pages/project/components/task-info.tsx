import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Clock10 } from 'lucide-react'

import { AvatarUser } from '@/components'

interface TaskInfoProps {
	task: Task
}

export const TaskInfo = ({ task }: TaskInfoProps) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='rounded-xl p-3 border bg-muted/50'>
				<div className='text-sm'>{task.Direction.title}</div>
				<div className='text-medium'>{task.title}</div>
				<hr className='my-1' />
				<div className='flex justify-between'>
					<div>
						{task.deadline && (
							<div className='flex gap-1 items-center'>
								<Clock10 className='size-4' />
								{format(task.deadline, 'dd MMM', { locale: ru })}
							</div>
						)}
						<div className='flex gap-2 items-center'>
							<AvatarUser user={task.User} className='size-3' />
							<span>{task.User.name}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
