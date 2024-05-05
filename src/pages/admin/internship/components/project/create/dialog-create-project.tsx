import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormCreateProject } from './form-create-project'

interface DialogCreateProjectProps {
	className?: string
}

export const DialogCreateProject = ({
	className
}: DialogCreateProjectProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новый проект</DialogTitle>
				</DialogHeader>
				<div>
					<FormCreateProject />
				</div>
			</DialogContent>
		</Dialog>
	)
}
