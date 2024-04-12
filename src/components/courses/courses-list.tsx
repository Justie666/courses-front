import { cn } from '@/shared/lib/utils'

import { CourseCard } from './course-card'

interface CoursesListProps {
	className?: string
}

export const CoursesList = ({ className }: CoursesListProps) => {
	return (
		<div
			className={cn(
				'mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
				className
			)}>
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
		</div>
	)
}
