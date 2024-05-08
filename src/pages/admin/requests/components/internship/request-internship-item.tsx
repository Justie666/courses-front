import { ButtonSubmit } from '@/components'
import { useUpdateRequestInternshipMutation } from '@/shared/api'
import { getRuStatusRequest } from '@/shared/helpers'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui'

import { DialogAcceptRequestInternship } from './accept'

interface RequestInternshipItemProps {
	request: RequestInternship
}

export const RequestInternshipItem = ({
	request
}: RequestInternshipItemProps) => {
	const { mutate: updateRequest, isPending: isPendingUpdateRequest } =
		useUpdateRequestInternshipMutation()

	const handleReject = (status: StatusRequest) => {
		updateRequest({ params: { id: request.id, status } })
	}

	const projectName = request?.userProject?.[0]?.Project?.title

	return (
		<div className='text-md rounded-2xl border px-3 py-4 bg-muted/50'>
			<div className='flex gap-2 items-center'>
				<Avatar className='size-10'>
					<AvatarImage src='' />
					<AvatarFallback>{request.User?.name.substring(0, 2)}</AvatarFallback>
				</Avatar>
				<div>
					{request.User.name} <br />
					{request.User.email}
				</div>
			</div>
			<hr className='my-3' />
			<div className='space-y-4'>
				<div className='font-medium text-lg'>
					Статус: {getRuStatusRequest(request.status).toLocaleLowerCase()}{' '}
					{projectName && <>({projectName})</>}
				</div>
				<hr />
				<div className='font-medium text-lg'>
					Направление: {request.Direction.title}
				</div>
				<hr />
				<div>
					<p className='font-medium text-lg'>Обо мне:</p>
					<p>{request.aboutMe}</p>
				</div>
				<hr />
				<div>
					<p className='font-medium text-lg'>Навыки:</p>
					<p>{request.skills}</p>
				</div>
				<hr />
				<div>
					<p className='font-medium text-lg'>Проекты:</p>
					<p>{request.projects}</p>
				</div>
				{request.status === 'PENDING' && (
					<>
						<hr />
						<div className='flex gap-2 justify-end'>
							<ButtonSubmit
								label='Отклонить'
								size='sm'
								variant='outline'
								className='m-0'
								onClick={() => handleReject('REJECT')}
								isPending={isPendingUpdateRequest}
							/>
							<DialogAcceptRequestInternship requestId={request.id} />
						</div>
					</>
				)}
			</div>
		</div>
	)
}
