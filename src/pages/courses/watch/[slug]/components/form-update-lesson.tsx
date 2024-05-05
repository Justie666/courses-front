import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useUpdateLessonMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/ui'

const formSchema = z.object({
	title: z.string().min(RULES.titleCategory.min, {
		message: RULES.titleCategory.minError
	})
})

interface FormUpdateLessonProps {
	lesson: Lesson
}

export const FormUpdateLesson = ({ lesson }: FormUpdateLessonProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: lesson.title
		}
	})

	const { mutate: updateLesson, isPending: isPendingUpdateLesson } =
		useUpdateLessonMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		updateLesson({
			params: { id: lesson.id, courseId: lesson.courseId, ...values }
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название</FormLabel>
							<FormControl>
								<Input placeholder='Название' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='mt-4' disabled={isPendingUpdateLesson}>
					{isPendingUpdateLesson && <Loader2 className='mr-2 animate-spin' />}
					Изменить
				</Button>
			</form>
		</Form>
	)
}
