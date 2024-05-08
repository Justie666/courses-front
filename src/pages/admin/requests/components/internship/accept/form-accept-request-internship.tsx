import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import {
	useGetAllProjectsQuery,
	useUpdateRequestInternshipMutation
} from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/ui'

const formSchema = z.object({
	projectId: z.string().min(1, { message: RULES.required })
})

interface FormAcceptRequestInternshipProps {
	requestId: string
}

export const FormAcceptRequestInternship = ({
	requestId
}: FormAcceptRequestInternshipProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			projectId: ''
		}
	})

	const { data: projects } = useGetAllProjectsQuery()

	const { mutate: acceptRequest, isPending } =
		useUpdateRequestInternshipMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		acceptRequest({
			params: { id: requestId, status: 'ACCEPT', ...values }
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='projectId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Направление</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder='Выберите проект' defaultValue='' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Проект</SelectLabel>
										{projects?.map(project => (
											<SelectItem key={project.id} value={project.id}>
												{project.title}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonSubmit isPending={isPending} label='Принять' />
			</form>
		</Form>
	)
}
