import { usePathname } from 'next/navigation'

import { ForAdmin } from '@/components/wrappers'

import { DeleteCourse } from './delete-course'
import { UpdateCourse } from './update-course'
import { UpdateImageCourse } from './update-image-course'

interface AdminFeaturesCoursesProps {
	course: Course
}

export const AdminFeaturesCourses = ({ course }: AdminFeaturesCoursesProps) => {
	return (
		<div className='absolute right-3 top-3 z-40 mt-3 flex gap-2'>
			<ForAdmin>
				<UpdateCourse course={course} />
				<UpdateImageCourse courseId={course.id} />
				<DeleteCourse courseId={course.id} />
			</ForAdmin>
		</div>
	)
}
