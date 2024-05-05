import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui'

import { RequestBackCallList } from './components'

export const AdminRequestsPage = () => {
	return (
		<Tabs defaultValue='backCalls'>
			<TabsList className='mb-10 w-full'>
				<TabsTrigger className='w-full' value='backCalls'>
					Обратные звонки
				</TabsTrigger>
				<TabsTrigger className='w-full' value='d'>
					Стажировка
				</TabsTrigger>
			</TabsList>
			<TabsContent value='backCalls'>
				<RequestBackCallList />
			</TabsContent>
			<TabsContent value='d'></TabsContent>
		</Tabs>
	)
}
