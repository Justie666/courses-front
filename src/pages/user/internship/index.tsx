import { Link } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { ROUTES } from '@/shared/constants'

export const UserInternshipPage = () => {
	const { user } = useUser()

	const projects = user?.userProject

	if (!projects) return null

	return (
		<div>
			{projects.map(project => (
				<div key={project.id}>
					<div>{project?.Project?.title}</div>
					<Link to={`${ROUTES['project']}/${project.projectId}`}>
						Подробнее
					</Link>
				</div>
			))}
		</div>
	)
}
