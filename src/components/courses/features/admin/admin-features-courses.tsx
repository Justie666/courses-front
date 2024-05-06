import { ForAdmin } from '@/components/wrappers'
import { DialogUpdateCourse } from '@/pages/admin/courses/components'

import { DeleteCourse } from './delete-course'
import { UpdateImageCourse } from './update-image-course'

interface AdminFeaturesCoursesProps {
	course: Course
}

export const AdminFeaturesCourses = ({ course }: AdminFeaturesCoursesProps) => {
	return (
		<div className='absolute right-3 top-3 z-40 flex gap-2'>
			<ForAdmin>
				<DialogUpdateCourse course={course} />
				<UpdateImageCourse courseId={course.id} />
				<DeleteCourse courseId={course.id} />
			</ForAdmin>
		</div>
	)
}
