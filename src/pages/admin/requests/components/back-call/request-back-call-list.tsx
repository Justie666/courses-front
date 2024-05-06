import { useGetAllRequestBackCallQuery } from '@/shared/api'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/ui'

import { RequestBackCallItem } from './request-back-call-item'

export const RequestBackCallList = () => {
	const { data: requestsBackCall } = useGetAllRequestBackCallQuery()

	if (!requestsBackCall) return <div></div>

	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Номер</TableHead>
						<TableHead>Статус</TableHead>
						<TableHead>Проблема</TableHead>
						<TableHead>Комментарий</TableHead>
						<TableHead className='text-right'>Изменить</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{requestsBackCall.map(request => (
						<RequestBackCallItem key={request.id} request={request} />
					))}
				</TableBody>
			</Table>
		</div>
	)
}
