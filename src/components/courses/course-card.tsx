import { Heart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
	useGetCurrentUserQuery,
	useToggleUserFavoriteCourseMutation,
	useUserBuyCourseQuery
} from '@/shared/api'
import { env, ROUTES } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui'

import { AdminFeaturesCourses } from './features'

interface CourseCardProps {
	course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
	const { data: user } = useGetCurrentUserQuery()
	const { mutate: buyCourse } = useUserBuyCourseQuery()
	const { mutate: toggleUserFavoriteCourse } =
		useToggleUserFavoriteCourseMutation()

	const handleBuyCourse = () => {
		buyCourse({ params: { courseId: course.id } })
	}

	const handleToggleUserFavoriteCourse = () => {
		toggleUserFavoriteCourse({ params: { courseId: course.id } })
	}

	const isFavoriteCourse = () =>
		user?.userFavoriteCourse.some(favorite => favorite.courseId === course.id)

	const isPurchasedCourse = () =>
		user?.userPurchasedCourse.some(
			purchasedCourse => purchasedCourse.courseId === course.id
		)

	return (
		<Card className='group flex flex-col'>
			<CardHeader className='relative overflow-hidden p-0'>
				<AdminFeaturesCourses course={course} />
				<div className='h-[200px]'>
					<Image
						src={`${env.API_URL}/${course.image}`}
						alt={course.title}
						fill
						className={cn('object-cover transition-all group-hover:scale-105')}
					/>
				</div>
			</CardHeader>
			<CardContent className='flex-grow px-2 py-6 md:px-6'>
				<CardTitle>{course.title}</CardTitle>
				<p className='mt-3 flex gap-2'>
					<Star fill='yellow' strokeWidth={0} /> 5.0
				</p>
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
					<Button
						disabled={!user}
						onClick={handleToggleUserFavoriteCourse}
						size='icon'
						variant='outline'>
						{isFavoriteCourse() && <Heart fill='gray' stroke='gray' />}
						{!isFavoriteCourse() && <Heart />}
					</Button>
					<div>
						{isPurchasedCourse() && (
							<Button asChild variant='outline'>
								<Link href={`${ROUTES['courses-watch']}/${course.slug}`}>
									Смотреть
								</Link>
							</Button>
						)}
						{!isPurchasedCourse() && (
							<Button onClick={handleBuyCourse} variant='outline'>
								Купить
							</Button>
						)}
					</div>
					{/* <Button asChild variant='outline'>
						<Link href={`${ROUTES.courses}/${course.slug}}`}>Подробнее</Link>
					</Button> */}
				</div>
			</CardFooter>
		</Card>
	)
}
