import { useState } from 'react'

import { useGetAllRequestBackCallQuery } from '@/shared/api'
import { STATUSES_REQUEST } from '@/shared/constants'
import { getRuStatusRequest } from '@/shared/helpers'
import { cn } from '@/shared/lib/utils'
import {
	Button,
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui'

import { RequestBackCallItem } from './request-back-call-item'

export const RequestsBackCallList = () => {
	const { data: requestsBackCall } = useGetAllRequestBackCallQuery()
	const [selectedStatus, setSelectedStatus] = useState<StatusRequest | 'all'>(
		'all'
	)

	const handleStatusSelection = (status: StatusRequest | 'all') => {
		setSelectedStatus(status)
	}

	const filteredRequestsBackCall = requestsBackCall?.filter(request => {
		if (selectedStatus === 'all') {
			return true
		}
		return request.status === selectedStatus
	})

	if (!requestsBackCall) return <div></div>

	return (
		<div>
			<div className='flex flex-wrap gap-2'>
				<Button
					onClick={() => handleStatusSelection('all')}
					className={cn('', {
						'bg-primary/70 text-white': selectedStatus === 'all'
					})}
					variant='outline'>
					Все
				</Button>
				{STATUSES_REQUEST?.map(status => (
					<Button
						key={status}
						onClick={() => handleStatusSelection(status)}
						className={cn('', {
							'bg-primary text-white': status === selectedStatus
						})}
						variant='outline'>
						{getRuStatusRequest(status)}
					</Button>
				))}
			</div>
			<Table className='mt-10'>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Имя и номер</TableHead>
						<TableHead>Статус</TableHead>
						<TableHead>Проблема</TableHead>
						<TableHead>Комментарий</TableHead>
						<TableHead className='text-right'>Изменить</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredRequestsBackCall?.map(request => (
						<RequestBackCallItem key={request.id} request={request} />
					))}
				</TableBody>
			</Table>
		</div>
	)
}
