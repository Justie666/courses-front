'use client'

import { useEffect, useState } from 'react'

import { Video } from '@/components'
import { useGetBySlugCourseQuery } from '@/shared/api'
import { env } from '@/shared/constants'

import { LessonsList, ToggleWatchedLesson } from './components'

interface CoursesWatchSlugPageProps {
	params: {
		slug: string
	}
}

const CoursesWatchSlugPage = ({ params }: CoursesWatchSlugPageProps) => {
	const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

	const { data: course } = useGetBySlugCourseQuery({
		config: {
			params: { slug: params.slug }
		}
	})

	useEffect(() => {
		setSelectedLesson(course?.lessons?.[0] || null)
	}, [course?.lessons])

	if (!course) return

	return (
		<div>
			<h3 className='mt-3 bg-gradient-to-r from-primary/80 to-primary/50 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl lg:text-6xl'>
				{course.title}
			</h3>
			<div className='mt-5 grid grid-cols-1 gap-5'>
				{selectedLesson?.video && (
					<div className='space-y-2'>
						<p>{selectedLesson.title}</p>
						<Video
							src={`${env.API_URL}/${selectedLesson.video}`}
							width='100%'
							className='flex-grow'
						/>
						<ToggleWatchedLesson lessonId={selectedLesson.id} />
					</div>
				)}
				{!selectedLesson?.video && (
					<div className='space-y-2'>
						<p>Нет видео</p>
					</div>
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
