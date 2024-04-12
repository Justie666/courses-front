import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { CreateCourseForm } from './create-course-form'

interface DialogCreateCourseProps {
	className?: string
}

export const DialogCreateCourse = ({ className }: DialogCreateCourseProps) => {
	return (
		<Dialog>
			<DialogTrigger className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Создать
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новый курс</DialogTitle>
				</DialogHeader>
				<div>
					<CreateCourseForm />
				</div>
			</DialogContent>
		</Dialog>
	)
}
