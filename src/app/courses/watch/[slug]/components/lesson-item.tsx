'use client'

import { CheckCheck, CirclePlay } from 'lucide-react'
import { HTMLAttributes } from 'react'

import { useGetCurrentUserQuery } from '@/shared/api'
import { useIsWatchedLesson } from '@/shared/hooks'
import { Button } from '@/shared/ui'

import { DeleteLesson } from './delete-lesson'
import { DialogUpdateLesson } from './dialog-update-lesson'
import { UpdateVideoLesson } from './update-video-lesson'

interface LessonItemProps extends HTMLAttributes<HTMLButtonElement> {
	lesson: Lesson
	isActive?: boolean
}

export const LessonItem = ({ isActive, lesson, ...rest }: LessonItemProps) => {
	const isWatchedLesson = useIsWatchedLesson(lesson.id)

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
				<DeleteLesson lessonId={lesson.id} />
			</div>
		</Button>
	)
}
