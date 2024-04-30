'use client'

import { usePathname } from 'next/navigation'

import { DeleteCourse } from './delete-course'
import { UpdateCourse } from './update-course'
import { UpdateImageCourse } from './update-image-course'

interface AdminFeaturesCoursesProps {
	course: Course
}

export const AdminFeaturesCourses = ({ course }: AdminFeaturesCoursesProps) => {
	const pathname = usePathname()
	const isAdminPage = pathname.includes('admin')

	if (!isAdminPage) return null

	return (
		<div className='absolute right-3 top-3 z-40 mt-3 flex gap-2'>
			<UpdateCourse course={course} />
			<UpdateImageCourse courseId={course.id} />
			<DeleteCourse courseId={course.id} />
		</div>
	)
}
