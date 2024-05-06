import { CheckCheck, CirclePlay } from 'lucide-react'
import { HTMLAttributes } from 'react'

import { ButtonDeleteWithConfirmation } from '@/components'
import { useDeleteLessonMutation } from '@/shared/api'
import { useIsWatchedLesson } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import { DialogUpdateLesson } from './dialog-update-lesson'
import { UpdateVideoLesson } from './update-video-lesson'

interface LessonItemProps extends HTMLAttributes<HTMLButtonElement> {
	lesson: Lesson
	isActive?: boolean
}

export const LessonItem = ({ isActive, lesson, ...rest }: LessonItemProps) => {
	const isWatchedLesson = useIsWatchedLesson(lesson.id)

	const { mutate: deleteLesson, isPending: isPendingDeleteLesson } =
		useDeleteLessonMutation()

	const handleDeleteLesson = () => {
		deleteLesson({ params: { id: lesson.id } })
	}

	return (
		<Button
			variant={isActive ? 'secondary' : 'outline'}
			className='h-[50px] w-full justify-start gap-2'
			{...rest}>
			<div className='flex items-center gap-2'>
				{isWatchedLesson && <CheckCheck />}
				{!isWatchedLesson && <CirclePlay />}
				<div className='text-wrap text-start'>{lesson.title}</div>
			</div>
			<div className='ml-auto flex gap-1'>
				<UpdateVideoLesson lessonId={lesson.id} />
				<DialogUpdateLesson lesson={lesson} />
				<ButtonDeleteWithConfirmation
					isPending={isPendingDeleteLesson}
					handleAction={handleDeleteLesson}
				/>
			</div>
		</Button>
	)
}
