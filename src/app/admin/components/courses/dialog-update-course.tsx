'use client'

import { Pencil } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormUpdateCourse } from './form-update-course'

interface DialogUpdateCourseProps {
	className?: string
	course: Course
}

export const DialogUpdateCourse = ({
	className,
	course
}: DialogUpdateCourseProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('', className)}>
				<Button size='icon' variant='outline'>
					<Pencil />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить категорию</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateCourse course={course} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
