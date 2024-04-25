import { Heart, Pencil, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { DialogUpdateCourse } from '@/app/(admin)/admin/components/courses/dialog-update-course'
import {
	useDeleteCourseMutation,
	useGetCurrentUserQuery,
	useToggleUserFavoriteCourseMutation
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

interface CourseCardProps {
	course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
	const pathname = usePathname()
	const isAdminPage = pathname.includes('admin')
	const { data: user } = useGetCurrentUserQuery()
	const { mutate: deleteCourse } = useDeleteCourseMutation()
	const { mutate: toggleUserFavoriteCourse } =
		useToggleUserFavoriteCourseMutation()

	const handleDeleteCourse = () => {
		deleteCourse({ params: { id: course.id } })
	}

	const handleToggleUserFavoriteCourse = () => {
		toggleUserFavoriteCourse({ params: { courseId: course.id } })
	}

	const isFavoriteCourse = () =>
		user?.userFavoriteCourse.some(favorite => favorite.courseId === course.id)

	return (
		<Card className='group flex flex-col'>
			<CardHeader className='relative overflow-hidden p-0'>
				{isAdminPage && (
					<div className='absolute right-3 top-3 z-40 mt-3 flex gap-2'>
						<DialogUpdateCourse course={course} />
						<Button onClick={handleDeleteCourse} size='icon' variant='outline'>
							<Trash2 />
						</Button>
					</div>
				)}
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
					{course.categories.map(category => (
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
					<Button asChild variant='outline'>
						<Link href={`${ROUTES.courses}/${course.slug}}`}>Подробнее</Link>
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
