import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

const FavoritesPage = () => {
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
