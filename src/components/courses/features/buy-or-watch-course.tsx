import { Link } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { useUserBuyCourseQuery } from '@/shared/api'
import { ROUTES } from '@/shared/constants'
import { Button } from '@/shared/ui'

interface BuyOrWatchCourseProps {
	course: Course
}

export const BuyOrWatchCourse = ({ course }: BuyOrWatchCourseProps) => {
	const { user } = useUser()
	const { mutate: buyCourse } = useUserBuyCourseQuery()

	const handleBuyCourse = () => {
		buyCourse({ params: { courseId: course.id } })
	}

	const isPurchasedCourse = () =>
		user?.userPurchasedCourse?.some(
			purchasedCourse => purchasedCourse.courseId === course.id
		)
	return (
		<>
			{' '}
			{isPurchasedCourse() && (
				<Button asChild variant='outline'>
					<Link to={`${ROUTES['courses-watch']}/${course.slug}`}>Смотреть</Link>
				</Button>
			)}
			{!isPurchasedCourse() && (
				<Button onClick={handleBuyCourse} variant='outline'>
					Купить
				</Button>
			)}
		</>
	)
}
