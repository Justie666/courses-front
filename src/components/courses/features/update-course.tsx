import { DialogUpdateCourse } from '@/app/admin/components'

interface UpdateCourseProps {
	course: Course
}

export const UpdateCourse = ({ course }: UpdateCourseProps) => {
	return <DialogUpdateCourse course={course} />
}
