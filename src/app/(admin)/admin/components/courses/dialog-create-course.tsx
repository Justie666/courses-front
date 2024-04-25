import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormCreateCourse } from './form-create-course'

interface DialogCreateCourseProps {
	className?: string
}

export const DialogCreateCourse = ({ className }: DialogCreateCourseProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новый курс</DialogTitle>
				</DialogHeader>
				<FormCreateCourse />
			</DialogContent>
		</Dialog>
	)
}
