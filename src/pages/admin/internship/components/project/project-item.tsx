import { UsersProjectList } from '@/components'
import { getRuStatusProject } from '@/shared/helpers'

import { DeleteProject } from './delete'
import { DialogUpdateProject } from './update'

interface ProjectItemProps {
	project: Project
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
	return (
		<div className='text-md rounded-2xl border px-3 py-2 bg-muted/50'>
			<div className='flex items-center justify-between gap-2 font-medium'>
				{project.title}
				<div className='flex gap-2'>
					<DialogUpdateProject project={project} />
					<DeleteProject projectId={project.id} />
				</div>
			</div>
			<p>Статус: {getRuStatusProject(project.status)}</p>
			<div>Список участников:</div>
			<div className='mt-4'>
				{project.userProject && (
					<UsersProjectList users={project.userProject} />
				)}
			</div>
		</div>
	)
}
