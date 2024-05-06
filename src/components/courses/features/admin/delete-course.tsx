import { ButtonDeleteWithConfirmation } from '@/components/buttons/button-delete-with-confirmation'
import { useDeleteCourseMutation } from '@/shared/api'

interface DeleteCourseProps {
	courseId: string
}

export const DeleteCourse = ({ courseId }: DeleteCourseProps) => {
	const { mutate: deleteCourse, isPending: isPendingDeleteCourse } =
		useDeleteCourseMutation()

	const handleDeleteCourse = () => {
		deleteCourse({ params: { id: courseId } })
	}
	return (
		<ButtonDeleteWithConfirmation
			isPending={isPendingDeleteCourse}
			handleAction={handleDeleteCourse}
		/>
	)
}
