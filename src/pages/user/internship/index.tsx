import { Link } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { ROUTES } from '@/shared/constants'

export const UserInternshipPage = () => {
	const { user } = useUser()

	const projects = user?.userProject

	if (!projects) return null
	return (
		<div>
			<div className='text-3xl md:text-4xl lg:text-6xl mb-10'>
				Ваши проекты:
			</div>
			<div className='flex gap-2 flex-wrap'>
				{projects.map(project => (
					<Link
						key={project.id}
						className='rounded border py-2 px-4 bg-muted/10'
						to={`${ROUTES['project']}/${project.projectId}`}>
						<div>{project?.Direction.title}</div>
						<div>{project?.Project?.title}</div>
					</Link>
				))}
			</div>
		</div>
	)
}
