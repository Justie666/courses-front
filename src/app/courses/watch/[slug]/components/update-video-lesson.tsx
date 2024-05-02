import { VideoIcon } from 'lucide-react'

import { ForAdmin } from '@/components'
import { useUpdateVideoLessonMutation } from '@/shared/api'
import {
	Button,
	Input,
	Label,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

interface UpdateVideoLessonProps {
	lessonId: string
}

export const UpdateVideoLesson = ({ lessonId }: UpdateVideoLessonProps) => {
	const { mutate: updateVideoLesson } = useUpdateVideoLessonMutation()

	const handleUpdateVideoCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation()
		const video = e.target?.files?.[0]
		if (video) {
			e.target.value = ''
			updateVideoLesson({
				params: { id: lessonId, video: video }
			})
		}
	}

	return (
		<ForAdmin>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button size='icon' variant='outline'>
							<Input
								type='file'
								className='hidden'
								id={`video-update-${lessonId}`}
								accept='video/*'
								onInput={handleUpdateVideoCourse}
							/>
							<Label htmlFor={`video-update-${lessonId}`}>
								<VideoIcon />
							</Label>
						</Button>
					</TooltipTrigger>
					<TooltipContent>Изменить видео</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</ForAdmin>
	)
}
