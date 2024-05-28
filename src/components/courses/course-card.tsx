import { env } from '@/shared/constants'
import { declensionLesson } from '@/shared/helpers'
import { cn } from '@/shared/lib/utils'
import {
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui'

import {
	AdminFeaturesCourses,
	BuyOrWatchCourse,
	ToggleFavoriteCourse
} from './features'

interface CourseCardProps {
	course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
	return (
		<Card className='group flex flex-col overflow-hidden'>
			<CardHeader className='relative p-0'>
				<img
					src={`${env.API_URL}/${course.image}`}
					alt={course.title}
					className={cn(
						'h-[250px] object-cover transition-all group-hover:scale-105'
					)}
				/>
				<AdminFeaturesCourses course={course} />
			</CardHeader>
			<CardContent className='flex-grow px-2 py-6 md:px-6'>
				<CardTitle>{course.title}</CardTitle>
				<Badge className='mt-3 py-1' variant='outline'>
					{course.lessons?.length} {declensionLesson(course.lessons?.length)}
				</Badge>
				{/* <p className='mt-3 flex gap-2'>
					<Star fill='yellow' strokeWidth={0} /> 5.0
				</p> */}
				<div className='mt-4 flex flex-wrap gap-2'>
					{course.categories?.map(category => (
						<Badge key={category.id} variant='outline'>
							{category.title}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter className='flex items-center justify-between border-t px-2 py-3 md:px-6'>
				<p>{course.price ? course.price : 'Бесплатно'}</p>
				<div className='flex items-center gap-1'>
					<ToggleFavoriteCourse courseId={course.id} />
					<BuyOrWatchCourse course={course} />
					{/* <Button asChild variant='outline'>
						<Link to={`${ROUTES.courses}/${course.slug}}`}>Подробнее</Link>
					</Button> */}
				</div>
			</CardFooter>
		</Card>
	)
}
