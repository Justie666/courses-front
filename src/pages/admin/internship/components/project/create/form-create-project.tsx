import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useCreateProjectMutation } from '@/shared/api'
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
	title: z.string().min(RULES.project.title.min.value, {
		message: RULES.project.title.min.message
	})
})

export const FormCreateProject = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: ''
		}
	})

	const {
		mutate: createProject,
		isPending: isPendingCreateProject,
		isSuccess: isSuccessCreateProject
	} = useCreateProjectMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createProject({ params: values })
	}

	useResetFormOnSuccess(form, isSuccessCreateProject)

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
				<ButtonSubmit isPending={isPendingCreateProject} label='Добавить' />
			</form>
		</Form>
	)
}
