import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useCreateCategoryMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import { useResetFormOnSuccess } from '@/shared/hooks'
import {
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

export const FormCreateCourse = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: ''
		}
	})

	const {
		mutate: createCategory,
		isPending: isPendingCreateCategory,
		isSuccess: isSuccessCreateCategory
	} = useCreateCategoryMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createCategory({ params: values })
	}

	useResetFormOnSuccess(form, isSuccessCreateCategory)

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
				<ButtonSubmit isPending={isPendingCreateCategory} label='Добавить' />
			</form>
		</Form>
	)
}
