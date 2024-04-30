import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateLessonMutation } from '@/shared/api'
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

interface FormCreateLessonProps {
	courseId: string
}

const formSchema = z.object({
	title: z.string().min(RULES.lesson.min.value, {
		message: RULES.lesson.min.message
	})
})

export const FormCreateLesson = ({ courseId }: FormCreateLessonProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: ''
		}
	})

	const { mutate: createLesson, isPending: isPendingLesson } =
		useCreateLessonMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createLesson({ params: { ...values, courseId } })
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem className='flex-grow'>
							<FormControl>
								<Input placeholder='Название' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' variant='outline' disabled={isPendingLesson}>
					{isPendingLesson && <Loader2 className='mr-2 animate-spin' />}
					Создать
				</Button>
			</form>
		</Form>
	)
}
