import { cn } from '@/shared/lib/utils'
import { Skeleton } from '@/shared/ui'

import { CourseCard } from './course-card'

interface CoursesListProps {
	className?: string
	isPending: boolean
	courses: Course[] | undefined
}

export const CoursesList = ({
	className,
	courses,
	isPending
}: CoursesListProps) => {
	if (!courses && !isPending)
		return <div className='mt-10'>Курсы отсутствуют</div>

	return (
		<div
			className={cn(
				'mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
				className
			)}>
			{isPending &&
				[...Array(5)].map((_, index) => (
					<Skeleton key={index} className='h-[430px]' />
				))}
			{courses &&
				courses.map(course => <CourseCard key={course.id} course={course} />)}
		</div>
	)
}
