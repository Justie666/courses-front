import { CoursesList } from '@/components'
import { useGetAllCourseQuery } from '@/shared/api'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import {
	CategoriesList,
	DialogCreateCategory,
	DialogCreateCourse
} from './components'

export const AdminCoursesPage = () => {
	const { data: courses, isPending: isCoursesPending } = useGetAllCourseQuery()

	return (
		<Tabs defaultValue='courses'>
			<TabsList className='w-full'>
				<TabsTrigger className='w-full' value='categories'>
					Категории
				</TabsTrigger>
				<TabsTrigger className='w-full' value='courses'>
					Курсы
				</TabsTrigger>
			</TabsList>
			<TabsContent value='categories'>
				<DialogCreateCategory />
				<CategoriesList />
			</TabsContent>
			<TabsContent value='courses'>
				<DialogCreateCourse />
				<CoursesList
					courses={courses}
					isPending={isCoursesPending}
					className='mt-3'
				/>
			</TabsContent>
		</Tabs>
	)
}
