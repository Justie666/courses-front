import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormCreateTask } from './form-create-task'

interface DialogCreateTaskProps {
	className?: string
	status: StatusTask
	projectId: string
	directionId: string
	users: User[]
}

export const DialogCreateTask = ({
	className,
	status,
	projectId,
	directionId,
	users
}: DialogCreateTaskProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новую задачу</DialogTitle>
				</DialogHeader>
				<FormCreateTask
					status={status}
					projectId={projectId}
					directionId={directionId}
					users={users}
				/>
			</DialogContent>
		</Dialog>
	)
}
