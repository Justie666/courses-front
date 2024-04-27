import { getRuStatusRequestBackCall } from '@/shared/helpers'

interface RequestBackCallItemProps {
	request: RequestBackCall
}

export const RequestBackCallItem = ({ request }: RequestBackCallItemProps) => {
	console.log(request.status)
	return (
		<div>
			{request.phone}
			{request.user.name}
			{request.user.email}
			<div>{getRuStatusRequestBackCall(request.status)}</div>
			{request.comment}
			<hr />
		</div>
	)
}
