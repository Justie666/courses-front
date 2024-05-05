import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormCreateCourse } from './form-create-category'

interface DialogCreateCategoryProps {
	className?: string
}

export const DialogCreateCategory = ({
	className
}: DialogCreateCategoryProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новую категорию</DialogTitle>
				</DialogHeader>
				<div>
					<FormCreateCourse />
				</div>
			</DialogContent>
		</Dialog>
	)
}
