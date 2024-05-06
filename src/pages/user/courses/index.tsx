import { useUser } from '@/app/user-provider'
import { CoursesList } from '@/components'
import { useGetAllCourseQuery } from '@/shared/api'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

export const UserCoursesPage = () => {
	const { user } = useUser()
	const { data: courses, isPending: isCoursesPending } = useGetAllCourseQuery()

	const favoritesCourses = courses?.filter(course =>
		user?.userFavoriteCourse?.some(
			favoriteCourse => favoriteCourse.courseId === course.id
		)
	)

	const purchasedCourses = courses?.filter(course =>
		user?.userPurchasedCourse?.some(
			purchasedCourse => purchasedCourse.courseId === course.id
		)
	)

	return (
		<Tabs defaultValue='favorites'>
			<TabsList className='w-full'>
				<TabsTrigger className='w-full' value='favorites'>
					Избранные
				</TabsTrigger>
				<TabsTrigger className='w-full' value='purchased'>
					Мои курсы
				</TabsTrigger>
			</TabsList>
			<TabsContent value='favorites'>
				<CoursesList
					courses={favoritesCourses}
					isPending={isCoursesPending}
					className='mt-3'
				/>
			</TabsContent>
			<TabsContent value='purchased'>
				<CoursesList
					courses={purchasedCourses}
					isPending={isCoursesPending}
					className='mt-3'
				/>
			</TabsContent>
		</Tabs>
	)
}
