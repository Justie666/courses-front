import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormUpdateRequestBackCall } from './form-update-request-back-call'

interface DialogUpdateRequestBackCallProps {
	className?: string
	request: RequestBackCall
}

export const DialogUpdateRequestBackCall = ({
	className,
	request
}: DialogUpdateRequestBackCallProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('', className)}>
				<Button variant='outline' size='sm'>
					Изменить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить заявку</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateRequestBackCall request={request} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
