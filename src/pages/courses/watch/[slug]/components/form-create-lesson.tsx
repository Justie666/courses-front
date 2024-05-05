import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useCreateLessonMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import { useResetFormOnSuccess } from '@/shared/hooks'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
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

	const {
		mutate: createLesson,
		isPending: isPendingCreateLesson,
		isSuccess: isSuccessCreateLesson
	} = useCreateLessonMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createLesson({ params: { ...values, courseId } })
	}

	useResetFormOnSuccess(form, isSuccessCreateLesson)

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
				<ButtonSubmit
					className='m-0'
					isPending={isPendingCreateLesson}
					label='Создать'
					variant='outline'
				/>
			</form>
		</Form>
	)
}
