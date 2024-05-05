'use client'
import { useGetAllRequestBackCallQuery } from '@/shared/api'
import { getRuStatusRequestBackCall } from '@/shared/helpers'
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui'

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
						<TableHead className='text-right'>Действия</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{requestsBackCall.map(request => (
						<TableRow key={request.id}>
							<TableCell className='font-medium'>{request.phone}</TableCell>
							<TableCell>
								{getRuStatusRequestBackCall(request.status)}
							</TableCell>
							<TableCell>{request.problem}</TableCell>
							<TableCell>{request.comment || 'Нет'}</TableCell>
							<TableCell className='text-right'>
								<div className='flex flex-col items-end gap-2'>
									<Button variant='outline' size='sm'>
										Подтвердить
									</Button>
									<Button variant='outline' size='sm'>
										Отменить
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
