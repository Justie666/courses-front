import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { AvatarUser, ButtonSubmit } from '@/components'
import { useUpdateTaskMutation } from '@/shared/api/hooks'
import { PRIORITIES, RULES, STATUSES } from '@/shared/constants'
import { useResetFormOnSuccess } from '@/shared/hooks'
import { cn } from '@/shared/lib/utils'
import {
	Button,
	Calendar,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	Textarea
} from '@/shared/ui'

const formSchema = z.object({
	title: z.string().min(1, { message: RULES.required }),
	content: z.string().min(1, { message: RULES.required }),
	deadline: z.date().optional(),
	status: z.enum(['NO_STATUS', 'IN_PROGRESS', 'TESTING', 'DONE', 'ARCHIVE']),
	priority: z.enum(['NO', 'LOW', 'MEDIUM', 'HIGH']),
	userId: z.string().min(1, { message: RULES.required })
})

interface FormUpdateTaskProps {
	task: Task
	users: User[]
}

export const FormUpdateTask = ({ users, task }: FormUpdateTaskProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: task.title,
			content: task.content,
			deadline: task.deadline ? new Date(task.deadline) : undefined,
			status: task.status,
			priority: task.priority,
			userId: task.userId
		}
	})

	const {
		mutate: updateTask,
		isPending: isPendingUpdateTask,
		isSuccess: isSuccessUpdateTask
	} = useUpdateTaskMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		updateTask({ params: { id: task.id, ...values } })
	}

	useResetFormOnSuccess(form, isSuccessUpdateTask)

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
								<Textarea placeholder='Описание' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='deadline'
					render={({ field }) => (
						<FormItem className='flex-grow'>
							<FormLabel className='block'>Дата выполнения</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={'outline'}
											className={cn(
												'w-full pl-3 text-left font-normal',
												!field.value && 'text-muted-foreground'
											)}>
											{field.value ? (
												format(field.value, 'PPP', { locale: ru })
											) : (
												<span>Выберите дату</span>
											)}
											<CalendarIcon className='ml-auto size-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0' align='start'>
									<Calendar
										mode='single'
										locale={ru}
										selected={field.value}
										onSelect={field.onChange}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='userId'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Исполнитель</FormLabel>
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
				<FormField
					control={form.control}
					name='status'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Статус</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder='Выберите статус' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Выберите исполнителя</SelectLabel>
										{STATUSES.task.map(status => (
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
				<FormField
					control={form.control}
					name='priority'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Приоритет</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder='Выберите приоритет' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Выберите приоритет</SelectLabel>
										{PRIORITIES.map(priority => (
											<SelectItem key={priority.value} value={priority.value}>
												{priority.title}
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
					isPending={isPendingUpdateTask}
					label='Изменить'
				/>
			</form>
		</Form>
	)
}
