import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { useGetByIdProjectsQuery } from '@/shared/api'
import { PRIORITIES } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import {
	Button,
	ScrollArea,
	ScrollBar,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui'

import { TasksLine } from './components'

const statuses: ('Нет статус' | 'В процессе' | 'Тестируется' | 'Готово')[] = [
	'Нет статус',
	'В процессе',
	'Тестируется',
	'Готово'
]

export const ProjectPage = () => {
	const [selectedDirection, setSelectedDirection] = useState('all')
	const [selectedPriority, setSelectedPriority] = useState('all')

	const { projectId } = useParams()
	const { user } = useUser()
	const { data: project } = useGetByIdProjectsQuery({
		config: { params: { id: projectId } }
	})

	const handleDirectionSelection = (categoryId: string) => {
		setSelectedDirection(categoryId)
	}

	const handleSelectPriority = (priority: Priority) => {
		setSelectedPriority(priority)
	}

	const filteredTasks = project?.Task?.filter(task => {
		// if (selectedDirection === 'all' && selectedPriority === 'all') return true

		// return task.directionId === selectedDirection
		const isDirectionFiltered =
			selectedDirection === 'all' || task.directionId === selectedDirection

		const isPriorityFiltered =
			selectedPriority === 'all' || task.priority === selectedPriority

		return isDirectionFiltered && isPriorityFiltered
	})

	if (!user || !project) return null

	const userProject = project?.userProject.find(
		userProject => userProject.userId === user.id
	)

	const directionId = userProject ? userProject.directionId : null

	const users = project.userProject
		.filter(user => user.directionId === directionId)
		.map(user => user.User)

	if (!directionId) return null

	const uniqueDirections: Direction[] = Array.from(
		project.userProject
			.reduce((map, obj) => map.set(obj.Direction.id, obj.Direction), new Map())
			.values()
	)

	return (
		<>
			<h1 className='bg-gradient-to-r from-primary/80 to-primary/90 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl lg:text-6xl'>
				{project.title}
			</h1>
			<div className='mt-3 text-lg tracking-tighter'>
				Ваша роль: {userProject?.Direction.title}
			</div>

			<div className='flex flex-wrap gap-2 mt-4'>
				<Button
					onClick={() => handleDirectionSelection('all')}
					className={cn('', {
						'bg-primary/70 text-white': selectedDirection === 'all'
					})}
					variant='outline'>
					Все
				</Button>
				{uniqueDirections?.map(direction => (
					<Button
						key={direction.id}
						onClick={() => handleDirectionSelection(direction.id)}
						className={cn('', {
							'bg-primary text-white': selectedDirection === direction.id
						})}
						variant='outline'>
						{direction.title}
					</Button>
				))}
			</div>

			<Select value={selectedPriority} onValueChange={handleSelectPriority}>
				<SelectTrigger className='w-[180px] mt-3'>
					<SelectValue placeholder='Приоритет' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='all'>Все приоритеты</SelectItem>
					{PRIORITIES.map(priority => (
						<SelectItem value={priority.value} key={priority.value}>
							{priority.title}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<ScrollArea className='mt-4'>
				<div className='grid grid-cols-4 gap-2 min-w-[900px]'>
					{statuses.map(status => (
						<TasksLine
							key={status}
							status={status}
							directionId={directionId}
							projectId={project.id}
							tasks={filteredTasks}
							users={users}
						/>
					))}
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</>
	)
}
