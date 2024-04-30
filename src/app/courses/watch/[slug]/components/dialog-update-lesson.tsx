import { Pencil } from 'lucide-react'

import { ForAdmin } from '@/components'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/shared/ui'
import { Button, DialogHeader } from '@/shared/ui'

import { FormUpdateLesson } from './form-update-lesson'

interface DialogUpdateLessonProps {
	lesson: Lesson
}

export const DialogUpdateLesson = ({ lesson }: DialogUpdateLessonProps) => {
	return (
		<ForAdmin>
			<Dialog>
				<DialogTrigger asChild>
					<Button size='icon' variant='outline'>
						<Pencil />
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Изменить категорию</DialogTitle>
					</DialogHeader>
					<div>
						<FormUpdateLesson lesson={lesson} />
					</div>
				</DialogContent>
			</Dialog>
		</ForAdmin>
	)
}
