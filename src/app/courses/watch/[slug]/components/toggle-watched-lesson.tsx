import { CheckCheck, CircleX } from 'lucide-react'

import { useUserToggleWatchedLessonMutation } from '@/shared/api'
import { useIsWatchedLesson } from '@/shared/hooks'
import { Button } from '@/shared/ui'

interface ToggleWatchedLessonProps {
	lessonId: string
}

export const ToggleWatchedLesson = ({ lessonId }: ToggleWatchedLessonProps) => {
	const isWatchedLesson = useIsWatchedLesson(lessonId)

	const {
		mutate: toggleWatchedLesson,
		isPending: isPendingToggleWatchedLesson
	} = useUserToggleWatchedLessonMutation()

	const handleToggleWatchedLesson = () => {
		toggleWatchedLesson({ params: { lessonId } })
	}

	return (
		<Button
			variant='outline'
			onClick={handleToggleWatchedLesson}
			disabled={isPendingToggleWatchedLesson}>
			{isWatchedLesson && (
				<>
					Отметить невыполненным <CircleX className='ml-2' />
				</>
			)}
			{!isWatchedLesson && (
				<>
					Отметить выполненным <CheckCheck className='ml-2' />
				</>
			)}
		</Button>
	)
}
