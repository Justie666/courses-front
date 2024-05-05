import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateRequestBackCallMutation } from '@/shared/api'
import {
	Button,
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
	SelectValue,
	Textarea
} from '@/shared/ui'

const formSchema = z.object({
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	skills: z.string(),
	aboutMe: z.string(),
	projects: z.string(),
	direction: z.string()
})
export const FormRequestInternship = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			skills: '',
			aboutMe: '',
			projects: '',
			direction: ''
		}
	})

	const {
		mutate: createRequestBackCall,
		isPending: isPendingCreateRequestBackCall
	} = useCreateRequestBackCallMutation()

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		createRequestBackCall({ params: values })
		form.reset()
	}
	return (
		<div className='mx-auto max-w-[600px] rounded-xl bg-primary p-4'>
			<h3 className='mb-4 text-center text-2xl font-medium text-white'>
				Отправляйте заявку
			</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-2'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>Имя</FormLabel>
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
								<FormLabel className='text-white'>Email</FormLabel>
								<FormControl>
									<Input type='email' placeholder='Email' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>Номер телефона</FormLabel>
								<FormControl>
									<Input type='tel' placeholder='Номер телефона' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='direction'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>Направление</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<SelectTrigger>
										<SelectValue placeholder='Выберите направление' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Направление</SelectLabel>
											<SelectItem value='front'>FrontEnd (React)</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='skills'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>Навыки</FormLabel>
								<FormControl>
									<Textarea placeholder='Перечислите ваши навыки' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='projects'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>Проекты</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Перечислите ссылки на ваши проекты'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='aboutMe'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-white'>О себе</FormLabel>
								<FormControl>
									<Textarea placeholder='Расскажите о себе' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='mt-4'
						disabled={isPendingCreateRequestBackCall}
						onClick={form.handleSubmit(onSubmit)}
						variant='outline'>
						{isPendingCreateRequestBackCall && (
							<Loader2 className='mr-2 animate-spin' />
						)}
						Отправить
					</Button>
				</form>
			</Form>
		</div>
	)
}
