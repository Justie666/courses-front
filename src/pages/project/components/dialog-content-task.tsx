import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { ButtonSubmit } from '@/components'
import { useDeleteTaskMutation } from '@/shared/api'
import { PRIORITIES } from '@/shared/constants'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import { DialogContentItemTask } from './dialog-content-item-task'
import { FormUpdateTask } from './update'

interface DialogContentTaskProps {
	task: Task
	users: User[]
}

export const DialogContentTask = ({ task, users }: DialogContentTaskProps) => {
	const priority =
		PRIORITIES.find(priority => priority.value === task.priority)?.title || ''

	const { mutate: deleteTask, isPending: isPendingDeleteTask } =
		useDeleteTaskMutation()

	const handleDeleteTask = () => {
		deleteTask({ params: { id: task.id } })
	}

	const taskItems = [
		{ title: 'Задача:', description: task.title },
		{ title: 'Описание:', description: task.content },
		{
			title: 'Дата выполнения:',
			description: task.deadline
				? format(task.deadline, 'dd MMM', { locale: ru })
				: null
		},
		{ title: 'Приоритет:', description: priority },
		{ title: 'Ответственный:', description: task.User.name }
	]

	return (
		<>
			<Tabs defaultValue='info'>
				<TabsList>
					<TabsTrigger value='info'>Информация</TabsTrigger>
					<TabsTrigger value='password'>Редактировать</TabsTrigger>
				</TabsList>
				<TabsContent value='info'>
					<div className='space-y-2'>
						{taskItems.map(
							(item, index) =>
								item.description && (
									<DialogContentItemTask
										key={index}
										title={item.title}
										description={item.description}
									/>
								)
						)}
						<ButtonSubmit
							isPending={isPendingDeleteTask}
							onClick={handleDeleteTask}
							variant='outline'
							size='sm'
							label='Удалить'
						/>
					</div>
				</TabsContent>
				<TabsContent value='password'>
					<FormUpdateTask task={task} users={users} />
				</TabsContent>
			</Tabs>
		</>
	)
}
