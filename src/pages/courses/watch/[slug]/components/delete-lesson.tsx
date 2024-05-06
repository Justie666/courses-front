import { ButtonDeleteWithConfirmation } from '@/components'
import { useDeleteLessonMutation } from '@/shared/api'

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
		<ButtonDeleteWithConfirmation
			isPending={isPendingDeleteLesson}
			handleAction={handleDeleteLesson}
		/>
	)
}
