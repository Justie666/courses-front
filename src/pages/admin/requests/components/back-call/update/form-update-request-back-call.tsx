import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useUpdateRequestBackCallMutation } from '@/shared/api'
import { STATUSES } from '@/shared/constants/statuses'
import {
	Form,
	FormControl,
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
	SelectValue,
	Textarea
} from '@/shared/ui'

const formSchema = z.object({
	comment: z.string(),
	status: z.enum(['PENDING', 'ACCEPT', 'REJECT'])
})

interface FormUpdateRequestBackCallProps {
	request: RequestBackCall
}

export const FormUpdateRequestBackCall = ({
	request
}: FormUpdateRequestBackCallProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			comment: request.comment,
			status: request.status
		}
	})

	const { mutate: updateRequestBackCall, isPending: isPendingRequestBackCall } =
		useUpdateRequestBackCallMutation({})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		updateRequestBackCall({ params: { id: request.id, ...values } })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
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
										{STATUSES['request-back-call'].map(status => (
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
					name='comment'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Комментарий</FormLabel>
							<FormControl>
								<Textarea placeholder='Название' {...field}></Textarea>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonSubmit isPending={isPendingRequestBackCall} label='Изменить' />
			</form>
		</Form>
	)
}
