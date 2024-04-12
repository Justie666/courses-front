import { CoursesList } from '@/components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import {
	CategoriesList,
	DialogCreateCategory,
	DialogCreateCourse
} from './components'

const AdminPage = () => {
	return (
		<div>
			<Tabs defaultValue='categories'>
				<TabsList className='w-full'>
					<TabsTrigger className='w-full' value='categories'>
						Категории
					</TabsTrigger>
					<TabsTrigger className='w-full' value='courses'>
						Курсы
					</TabsTrigger>
					<TabsTrigger className='w-full' value='account'>
						Стажировки
					</TabsTrigger>
				</TabsList>
				<TabsContent value='categories'>
					<DialogCreateCategory />
					<CategoriesList />
				</TabsContent>
				<TabsContent value='courses'>
					{/* <DialogCreateCourse /> */}
					<CoursesList className='mt-3' />
				</TabsContent>
				<TabsContent value='password'>Change your password here.</TabsContent>
			</Tabs>
		</div>
	)
}

export default AdminPage
