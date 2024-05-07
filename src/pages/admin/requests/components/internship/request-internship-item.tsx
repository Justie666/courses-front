import { getRuStatusRequest } from '@/shared/helpers'
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/shared/ui'

interface RequestInternshipItemProps {
	request: RequestInternship
}
export const RequestInternshipItem = ({
	request
}: RequestInternshipItemProps) => {
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
					Статус: {getRuStatusRequest(request.status).toLocaleLowerCase()}
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
				<hr />
				<div className='flex gap-2 justify-end'>
					<Button size='sm' variant='outline'>
						Отклонить
					</Button>
					<Button size='sm' variant='outline'>
						Принять
					</Button>
				</div>
			</div>
		</div>
	)
}
