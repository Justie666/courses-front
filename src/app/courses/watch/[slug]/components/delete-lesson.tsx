'use client'

import { Trash2 } from 'lucide-react'
import { MouseEvent } from 'react'

import { ForAdmin } from '@/components'
import { useDeleteLessonMutation } from '@/shared/api'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

interface DeleteLessonProps {
	lessonId: string
}

export const DeleteLesson = ({ lessonId }: DeleteLessonProps) => {
	const { mutate: deleteLesson, isPending: isPendingDeleteLesson } =
		useDeleteLessonMutation()

	const handleDeleteLesson = () => {
		deleteLesson({ params: { id: lessonId } })
	}

	return (
		<ForAdmin>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							onClick={handleDeleteLesson}
							variant='outline'
							size='icon'
							disabled={isPendingDeleteLesson}>
							<Trash2 />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Удалить урок</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</ForAdmin>
	)
}
