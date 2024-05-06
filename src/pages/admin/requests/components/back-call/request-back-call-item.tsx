import { getRuStatusRequestBackCall } from '@/shared/helpers'
import { TableCell, TableRow } from '@/shared/ui'

import { DialogUpdateRequestBackCall } from './update'

interface RequestBackCallItemProps {
	request: RequestBackCall
}

export const RequestBackCallItem = ({ request }: RequestBackCallItemProps) => {
	return (
		<TableRow key={request.id}>
			<TableCell className='font-medium'>{request.phone}</TableCell>
			<TableCell>{getRuStatusRequestBackCall(request.status)}</TableCell>
			<TableCell>{request.problem}</TableCell>
			<TableCell>{request.comment || 'Нет'}</TableCell>
			<TableCell className='text-right'>
				<div className='flex flex-col items-end gap-2'>
					<DialogUpdateRequestBackCall request={request} />
				</div>
			</TableCell>
		</TableRow>
	)
}
