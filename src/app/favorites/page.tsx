'use client'

import { CoursesList } from '@/components'
import { useGetCurrentUserQuery } from '@/shared/api'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

const FavoritesPage = () => {
	const { data: user } = useGetCurrentUserQuery()
	return (
		<div>
			<Tabs defaultValue='courses'>
				<TabsList className='w-full'>
					<TabsTrigger className='w-full' value='courses'>
						Курсы
					</TabsTrigger>
					<TabsTrigger className='w-full' value='account'>
						Стажировки
					</TabsTrigger>
				</TabsList>
				<TabsContent value='courses'>
					{/* <CoursesList courses={user?.userFavoriteCourse} /> */}
				</TabsContent>
				<TabsContent value='password'>Change your password here.</TabsContent>
			</Tabs>
		</div>
	)
}

export default FavoritesPage
