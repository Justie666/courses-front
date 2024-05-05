import { ForAdmin } from '@/components'

import { FormCreateLesson } from './form-create-lesson'
import { LessonItem } from './lesson-item'

interface LessonsListProps {
	selectedLesson: Lesson | null
	setSelectedLesson: (lesson: Lesson | null) => void
	lessons?: Lesson[]
	courseId: string
}

export const LessonsList = ({
	selectedLesson,
	setSelectedLesson,
	lessons,
	courseId
}: LessonsListProps) => {
	if (!lessons) return null

	return (
		<>
			<p>Список уроков</p>
			<ForAdmin>
				<FormCreateLesson courseId={courseId} />
			</ForAdmin>
			<div className='gap-2 space-y-2'>
				{lessons.map(lesson => (
					<LessonItem
						key={lesson.id}
						lesson={lesson}
						isActive={lesson.id === selectedLesson?.id}
						onClick={() => setSelectedLesson(lesson)}
					/>
				))}
			</div>
		</>
	)
}
