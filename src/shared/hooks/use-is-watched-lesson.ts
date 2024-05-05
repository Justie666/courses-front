import { useGetCurrentUserQuery } from '../api'

export const useIsWatchedLesson = (lessonId: string) => {
	const { data: user } = useGetCurrentUserQuery()

	return user?.userWatchedLesson?.some(
		watchedLesson => watchedLesson.lessonId === lessonId
	)
}
