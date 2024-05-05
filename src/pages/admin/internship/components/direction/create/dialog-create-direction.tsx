import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormCreateDirection } from './form-create-direction'

interface DialogCreateDirectionProps {
	className?: string
}

export const DialogCreateDirection = ({
	className
}: DialogCreateDirectionProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новое направление</DialogTitle>
				</DialogHeader>
				<div>
					<FormCreateDirection />
				</div>
			</DialogContent>
		</Dialog>
	)
}
