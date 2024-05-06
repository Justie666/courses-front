import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUser } from '@/app/user-provider'
import { Video } from '@/components'
import { useGetBySlugCourseQuery } from '@/shared/api'
import { env } from '@/shared/constants'
import { Progress } from '@/shared/ui'

import { LessonsList, ToggleWatchedLesson } from './components'

const CoursesWatchSlugPage = () => {
	const { user } = useUser()
	const { slug } = useParams()
	const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

	const { data: course } = useGetBySlugCourseQuery({
		config: {
			params: { slug: slug }
		}
	})

	useEffect(() => {
		setSelectedLesson(course?.lessons?.[0] || null)
	}, [course?.lessons])

	if (!course) return

	const totalLessons = course?.lessons?.length
	const watchedLessons = user?.userWatchedLesson?.length

	const percentageWatched =
		watchedLessons && totalLessons && (watchedLessons / totalLessons) * 100
	console.log(percentageWatched)

	return (
		<div>
			<h3 className='mt-3 bg-gradient-to-r from-primary/80 to-primary/50 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl lg:text-6xl'>
				{course.title}
			</h3>
			<div className='mt-3 flex flex-col gap-1'>
				<Progress
					value={percentageWatched}
					className='h-[10px] max-w-[300px]'
				/>
				Курс завершён на {percentageWatched?.toFixed(0)} %
			</div>
			<div className='mt-5 grid grid-cols-1 gap-5'>
				{!selectedLesson && <p>Выберите урок</p>}
				{selectedLesson && (
					<>
						<div className='space-y-2'>
							{selectedLesson?.video && (
								<div>
									<p>{selectedLesson.title}</p>
									<Video
										src={`${env.API_URL}/${selectedLesson.video}`}
										width='100%'
										className='flex-grow'
									/>
								</div>
							)}
							<ToggleWatchedLesson lessonId={selectedLesson.id} />
						</div>
						{!selectedLesson?.video && (
							<div className='space-y-2'>
								<p>Нет видео</p>
							</div>
						)}
					</>
				)}
				<div className='flex-grow space-y-2'>
					<LessonsList
						selectedLesson={selectedLesson}
						setSelectedLesson={setSelectedLesson}
						courseId={course.id}
						lessons={course.lessons}
					/>
				</div>
			</div>
		</div>
	)
}

export default CoursesWatchSlugPage
