import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useCreateRequestBackCallMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import { useResetFormOnSuccess } from '@/shared/hooks'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea
} from '@/shared/ui'

const formSchema = z.object({
	phone: z.string().regex(/^(\+7|7|8)\d{3}\d{3}\d{2}\d{2}$/, {
		message: RULES.backCall.phone.regex.message
	}),
	problem: z.string().min(RULES.backCall.problem.min.value, {
		message: RULES.backCall.problem.min.message
	})
})

export const FormBackCall = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '',
			problem: ''
		}
	})

	const {
		mutate: createRequestBackCall,
		isPending: isPendingCreateRequestBackCall,
		isSuccess: isSuccessCreateRequestBackCall
	} = useCreateRequestBackCallMutation()

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		createRequestBackCall({ params: values })
		form.reset()
	}

	useResetFormOnSuccess(form, isSuccessCreateRequestBackCall)

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12 md:justify-center'>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type='number'
									placeholder='Номер телефона'
									className='bg-muted/50 dark:bg-muted/80'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Dialog>
					<DialogTrigger asChild>
						<Button type='button'>Отправить</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Заявка на обратный звонок</DialogTitle>
						</DialogHeader>
						<div className='flex flex-col gap-2'>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Номер телефона</FormLabel>
										<FormControl>
											<Input
												type='number'
												placeholder='Номер телефона'
												className='bg-muted/50 dark:bg-muted/80'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='problem'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Проблема с который вы столкнулись</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Проблема'
												{...field}
												className='bg-muted/50 dark:bg-muted/80'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<ButtonSubmit
								isPending={isPendingCreateRequestBackCall}
								label='Отправить'
							/>
						</div>
					</DialogContent>
				</Dialog>
			</form>
		</Form>
	)
}
