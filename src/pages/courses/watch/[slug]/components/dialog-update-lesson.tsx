import { Pencil } from 'lucide-react'

import { ForAdmin } from '@/components'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'
import { Button, DialogHeader } from '@/shared/ui'

import { FormUpdateLesson } from './form-update-lesson'

interface DialogUpdateLessonProps {
	lesson: Lesson
}

export const DialogUpdateLesson = ({ lesson }: DialogUpdateLessonProps) => {
	return (
		<ForAdmin>
			<Dialog>
				<TooltipProvider delayDuration={0}>
					<Tooltip>
						<TooltipTrigger asChild>
							<DialogTrigger asChild>
								<Button size='icon' variant='outline'>
									<Pencil />
								</Button>
							</DialogTrigger>
						</TooltipTrigger>
						<TooltipContent>Изменить урок</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Изменить урок</DialogTitle>
					</DialogHeader>
					<div>
						<FormUpdateLesson lesson={lesson} />
					</div>
				</DialogContent>
			</Dialog>
		</ForAdmin>
	)
}
