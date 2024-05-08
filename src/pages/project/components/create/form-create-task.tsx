import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useUser } from '@/app/user-provider'
import { AvatarUser, ButtonSubmit } from '@/components'
import { useCreateTaskMutation } from '@/shared/api/hooks'
import { RULES } from '@/shared/constants'
import { useResetFormOnSuccess } from '@/shared/hooks'
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
	title: z.string().min(1, { message: RULES.required }),
	content: z.string().min(1, { message: RULES.required }),
	deadline: z.date().optional(),
	priority: z.enum(['NO', 'LOW', 'MEDIUM', 'HIGH']),
	userId: z.string().min(1, { message: RULES.required })
})

interface FormCreateTaskProps {
	status: StatusTask
	projectId: string
	directionId: string
	users: User[]
}

export const FormCreateTask = ({
	status,
	projectId,
	directionId,
	users
}: FormCreateTaskProps) => {
	const { user } = useUser()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '123',
			content: '123',
			deadline: undefined,
			priority: 'NO',
			userId: user?.id
		}
	})

	const {
		mutate: createTask,
		isPending: isPendingCreateTask,
		isSuccess: isSuccessCreateTask
	} = useCreateTaskMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createTask({ params: { ...values, status, projectId, directionId } })
	}

	useResetFormOnSuccess(form, isSuccessCreateTask)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem className='flex-grow'>
							<FormLabel>Задача</FormLabel>
							<FormControl>
								<Input placeholder='Задача' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='content'
					render={({ field }) => (
						<FormItem className='flex-grow'>
							<FormLabel>Описание</FormLabel>
							<FormControl>
								<Input placeholder='Описание' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='userId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Статус</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder='Выберите исполнителя' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Выберите исполнителя</SelectLabel>
										{users.map(user => (
											<SelectItem key={user.id} value={user.id}>
												<div className='flex gap-2 items-center'>
													<AvatarUser user={user} className='size-3' />
													{user.name}
												</div>
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonSubmit
					type='submit'
					isPending={isPendingCreateTask}
					label='Добавить'
				/>
			</form>
		</Form>
	)
}
