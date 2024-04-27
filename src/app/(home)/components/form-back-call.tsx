'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateRequestBackCallMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input
} from '@/shared/ui'

const formSchema = z.object({
	phone: z.string().regex(/^(\+7|7|8)\d{3}\d{3}\d{2}\d{2}$/, {
		message: RULES.backCall.phone.regex.message
	})
})

export const FormBackCall = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '79998881255'
		}
	})

	const { mutate: createRequestBackCall, isPending } =
		useCreateRequestBackCallMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createRequestBackCall({ params: values })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12'>
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
				<Button disabled={isPending}>Отправить</Button>
			</form>
		</Form>
	)
}
