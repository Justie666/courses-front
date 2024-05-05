import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useUpdateProjectMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import { STATUSES } from '@/shared/constants/statuses'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/ui'

const formSchema = z.object({
	title: z.string().min(RULES.project.title.min.value, {
		message: RULES.project.title.min.message
	}),
	status: z.enum(['IN_PROGRESS', 'CANCELLED', 'READY'])
})

interface FormUpdateProjectProps {
	project: Project
}

export const FormUpdateProject = ({ project }: FormUpdateProjectProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: project.title,
			status: project.status
		}
	})

	const { mutate: updateProject, isPending } = useUpdateProjectMutation({})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		updateProject({ params: { id: project.id, ...values } })
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
				<FormField
					control={form.control}
					name='status'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white'>Статус</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder='Выберите направление' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Направление</SelectLabel>
										{STATUSES.project.map(status => (
											<SelectItem key={status.value} value={status.value}>
												{status.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonSubmit isPending={isPending} label='Добавить' />
			</form>
		</Form>
	)
}
