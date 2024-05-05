import { Trash2 } from 'lucide-react'

import { useDeleteCourseMutation } from '@/shared/api'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

interface DeleteCourseProps {
	courseId: string
}

export const DeleteCourse = ({ courseId }: DeleteCourseProps) => {
	const { mutate: deleteCourse, isPending: isPendingDeleteCourse } =
		useDeleteCourseMutation()

	const handleDeleteCourse = () => {
		deleteCourse({ params: { id: courseId } })
	}
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleDeleteCourse}
						size='icon'
						variant='outline'
						disabled={isPendingDeleteCourse}>
						<Trash2 />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Удалить курс</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
