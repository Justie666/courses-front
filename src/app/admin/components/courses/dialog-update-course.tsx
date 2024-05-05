'use client'

import { Pencil } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
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
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<DialogTrigger asChild className={cn('', className)}>
							<Button size='icon' variant='outline'>
								<Pencil />
							</Button>
						</DialogTrigger>
					</TooltipTrigger>
					<TooltipContent>Изменить курс</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить курс</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateCourse course={course} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
