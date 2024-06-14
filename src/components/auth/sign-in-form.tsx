import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { usePostSignInMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/ui'

import { ButtonSubmit } from '../buttons/button-submit'

const formSchema = z.object({
	email: z.string().email({ message: RULES.email.emailError }),
	password: z
		.string()
		.min(RULES.password.minLength, { message: RULES.password.minLengthError })
})

export const SignInForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: 'admin@gmail.com',
			password: '12345678'
		}
	})

	const { mutate, isPending } = usePostSignInMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		mutate({ params: values })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='Email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input type='password' placeholder='Пароль' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ButtonSubmit isPending={isPending} label='Авторизоваться' />
			</form>
		</Form>
	)
}
