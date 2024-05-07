import { useState } from 'react'

import { useGetAllRequestInternshipQuery } from '@/shared/api'
import { STATUSES_REQUEST } from '@/shared/constants'
import { getRuStatusRequest } from '@/shared/helpers'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'

import { RequestInternshipItem } from './request-internship-item'

export const RequestsInternshipList = () => {
	const { data: requestsInternship } = useGetAllRequestInternshipQuery()
	const [selectedStatus, setSelectedStatus] = useState<StatusRequest | 'all'>(
		'all'
	)

	const handleStatusSelection = (status: StatusRequest | 'all') => {
		setSelectedStatus(status)
	}

	const filteredRequestsInternship = requestsInternship?.filter(request => {
		if (selectedStatus === 'all') {
			return true
		}
		return request.status === selectedStatus
	})

	if (!requestsInternship) return <div></div>

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
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
				{filteredRequestsInternship?.map(request => (
					<RequestInternshipItem key={request.id} request={request} />
				))}
			</div>
		</div>
	)
}
