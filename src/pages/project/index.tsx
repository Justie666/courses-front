import { useParams } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { useGetByIdProjectsQuery } from '@/shared/api'
import { ScrollArea, ScrollBar } from '@/shared/ui'

import { TasksLine } from './components'

const statuses: ('Нет статус' | 'В процессе' | 'Тестируется' | 'Готово')[] = [
	'Нет статус',
	'В процессе',
	'Тестируется',
	'Готово'
]

export const ProjectPage = () => {
	const { projectId } = useParams()
	const { user } = useUser()
	const { data: project } = useGetByIdProjectsQuery({
		config: { params: { id: projectId } }
	})

	if (!user) return null
	if (!project) return null

	const userProject = project?.userProject.find(
		userProject => userProject.userId === user.id
	)

	const directionId = userProject ? userProject.directionId : null

	const users = project.userProject
		.filter(user => user.directionId === directionId)
		.map(user => user.User)

	if (!directionId) return null

	return (
		<ScrollArea>
			<div className='grid grid-cols-4 gap-2 min-w-[900px]'>
				{statuses.map(status => (
					<TasksLine
						key={status}
						status={status}
						directionId={directionId}
						projectId={project.id}
						tasks={project.Task}
						users={users}
					/>
				))}
			</div>
			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	)
}
