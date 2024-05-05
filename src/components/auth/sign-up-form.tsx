import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { usePostSignUpMutation } from '@/shared/api'
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

import { ButtonSubmit } from '../button-submit'

const formSchema = z.object({
	name: z.string().min(RULES.name.minLength, {
		message: RULES.name.minLengthError
	}),
	email: z.string().email({ message: RULES.email.emailError }),
	password: z
		.string()
		.min(RULES.password.minLength, { message: RULES.password.minLengthError })
})

export const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const { mutate, isPending } = usePostSignUpMutation()

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
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя</FormLabel>
							<FormControl>
								<Input placeholder='Имя' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='Email' {...field} />
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
				<ButtonSubmit isPending={isPending} label='Зарегистрироваться' />
			</form>
		</Form>
	)
}
