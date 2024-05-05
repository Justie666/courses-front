import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import { DialogCreateProject, ProjectsList } from './components'
import { DialogCreateDirection, DirectionList } from './components/direction'

export const AdminInternshipPage = () => {
	return (
		<Tabs defaultValue='projects'>
			<TabsList className='w-full'>
				<TabsTrigger className='w-full' value='projects'>
					Проекты
				</TabsTrigger>
				<TabsTrigger className='w-full' value='directions'>
					Направления
				</TabsTrigger>
			</TabsList>
			<TabsContent value='projects'>
				<DialogCreateProject />
				<ProjectsList />
			</TabsContent>
			<TabsContent value='directions'>
				<DialogCreateDirection />
				<DirectionList />
			</TabsContent>
		</Tabs>
	)
}
