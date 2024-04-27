import { Trash2 } from 'lucide-react'

import { useDeleteCourseMutation } from '@/shared/api'
import { Button } from '@/shared/ui'

interface DeleteCourseProps {
	courseId: string
}

export const DeleteCourse = ({ courseId }: DeleteCourseProps) => {
	const { mutate: deleteCourse } = useDeleteCourseMutation()

	const handleDeleteCourse = () => {
		deleteCourse({ params: { id: courseId } })
	}
	return (
		<Button onClick={handleDeleteCourse} size='icon' variant='outline'>
			<Trash2 />
		</Button>
	)
}
