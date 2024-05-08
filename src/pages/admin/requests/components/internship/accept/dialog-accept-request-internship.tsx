import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormAcceptRequestInternship } from './form-accept-request-internship'

interface DialogAcceptRequestInternshipProps {
	requestId: string
}

export const DialogAcceptRequestInternship = ({
	requestId
}: DialogAcceptRequestInternshipProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='sm' variant='outline'>
					Принять
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Принять заявку</DialogTitle>
				</DialogHeader>
				<FormAcceptRequestInternship requestId={requestId} />
			</DialogContent>
		</Dialog>
	)
}
