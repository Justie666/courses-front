import { Heart } from 'lucide-react'

import { useUser } from '@/app/user-provider'
import { useToggleUserFavoriteCourseMutation } from '@/shared/api'
import { Button } from '@/shared/ui'

interface ToggleFavoriteCourseProps {
	courseId: string
}

export const ToggleFavoriteCourse = ({
	courseId
}: ToggleFavoriteCourseProps) => {
	const { user } = useUser()
	const { mutate: toggleUserFavoriteCourse } =
		useToggleUserFavoriteCourseMutation()

	const handleToggleUserFavoriteCourse = () => {
		toggleUserFavoriteCourse({ params: { courseId } })
	}

	const isFavoriteCourse = () =>
		user?.userFavoriteCourse?.some(favorite => favorite.courseId === courseId)

	return (
		<Button
			disabled={!user}
			onClick={handleToggleUserFavoriteCourse}
			size='icon'
			variant='outline'>
			{isFavoriteCourse() && <Heart fill='gray' stroke='gray' />}
			{!isFavoriteCourse() && <Heart />}
		</Button>
	)
}
