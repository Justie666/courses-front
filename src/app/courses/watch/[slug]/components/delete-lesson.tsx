'use client'

import { Trash2 } from 'lucide-react'
import { MouseEvent } from 'react'

import { ForAdmin } from '@/components'
import { useDeleteLessonMutation } from '@/shared/api'
import { Button } from '@/shared/ui'

interface DeleteLessonProps {
	lessonId: string
}

export const DeleteLesson = ({ lessonId }: DeleteLessonProps) => {
	const { mutate: deleteLesson, isPending: isPendingDeleteLesson } =
		useDeleteLessonMutation()

	const handleDeleteLesson = (
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		event.stopPropagation()
		deleteLesson({ params: { id: lessonId } })
	}

	return (
		<ForAdmin>
			<button onClick={e => e}></button>
			<Button
				onClick={e => handleDeleteLesson(e)}
				variant='outline'
				size='icon'
				disabled={isPendingDeleteLesson}>
				<Trash2 />
			</Button>
		</ForAdmin>
	)
}
