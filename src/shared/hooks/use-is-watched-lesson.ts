import { useUser } from '@/app/user-provider'

export const useIsWatchedLesson = (lessonId: string) => {
	const { user } = useUser()

	return user?.userWatchedLesson?.some(
		watchedLesson => watchedLesson.lessonId === lessonId
	)
}
