import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import { RequestsBackCallList } from './components'
import { RequestsInternshipList } from './components'

export const AdminRequestsPage = () => {
	return (
		<Tabs defaultValue='backCalls'>
			<TabsList className='mb-10 w-full'>
				<TabsTrigger className='w-full' value='backCalls'>
					Обратные звонки
				</TabsTrigger>
				<TabsTrigger className='w-full' value='internships'>
					Стажировка
				</TabsTrigger>
			</TabsList>
			<TabsContent value='backCalls'>
				<RequestsBackCallList />
			</TabsContent>
			<TabsContent value='internships'>
				<RequestsInternshipList />
			</TabsContent>
		</Tabs>
	)
}
