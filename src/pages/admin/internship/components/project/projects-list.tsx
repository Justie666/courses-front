import { useState } from 'react'

import { useGetAllProjectsQuery } from '@/shared/api'
import { Input } from '@/shared/ui'

import { ProjectItem } from './project-item'

export const ProjectsList = () => {
	const [search, setSearch] = useState('')
	const { data: projects } = useGetAllProjectsQuery()

	if (!projects) return null

	const filteredProjects = projects.filter(project =>
		project.title.toLowerCase().trim().includes(search.toLowerCase().trim())
	)

	return (
		<div className='mt-4'>
			<Input
				placeholder='Поиск по названию'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
				{filteredProjects.map(project => (
					<ProjectItem key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}
