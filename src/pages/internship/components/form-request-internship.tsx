import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonSubmit } from '@/components'
import { useGetAllDirectionsQuery } from '@/shared/api'
import { useCreateRequestInternshipMutation } from '@/shared/api/hooks/request-internship'
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
	SelectValue,
	Textarea
} from '@/shared/ui'

const formSchema = z.object({
	phone: z.string().regex(/^(\+7|7|8)\d{3}\d{3}\d{2}\d{2}$/, {
		message: RULES.requestInternship.phone.regex.message
	}),
	skills: z.string().min(1, {
		message: RULES.required
	}),
	aboutMe: z.string().min(1, {
		message: RULES.required
	}),
	projects: z.string().min(1, {
		message: RULES.required
	}),
	direction: z.string().min(1, {
		message: RULES.required
	})
})
export const FormRequestInternship = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: '81231231212',
			skills: 'React, Tailwind, TypeScript, Git',
			aboutMe:
				'Меня зовут Никита, я заканчиваю 4 курс. Занимаюсь FrontEnd разработкой уже около 3 лет. Начал изучение с html css в колледже и потом продолжил изучением React дома.',
			projects: 'google.com, yandex.ru',
			direction: ''
		}
	})

	const { data: directions } = useGetAllDirectionsQuery()

	const {
		mutate: createRequestInternship,
		isPending: isPendingCreateRequestInternship,
		isSuccess: isSuccessCreateRequestInternship
	} = useCreateRequestInternshipMutation()

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		createRequestInternship({ params: values })
	}

	useResetFormOnSuccess(form, isSuccessCreateRequestInternship)

	return (
		<>
			<hr className='mx-auto w-11/12' />
			<div className='container py-24 sm:py-32'>
				<h3 className='text-center text-4xl font-bold md:text-5xl'>
					Хотите принять участие в стажировке? <br />
					<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
						Отправляйте заявку
					</span>
				</h3>
				<p className='mx-auto mb-8 mt-4 max-w-[500px] text-center text-xl text-muted-foreground'>
					Присоединяйтесь к нашей команде: подайте заявку на стажировку!
				</p>
				<div className='max-w-[550px] mx-auto'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-2'>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Номер телефона</FormLabel>
										<FormControl>
											<Input
												type='tel'
												placeholder='Номер телефона'
												{...field}
											/>
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
										<FormLabel>Направление</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue
													placeholder='Выберите направление'
													defaultValue=''
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Направление</SelectLabel>
													{directions?.map(direction => (
														<SelectItem key={direction.id} value={direction.id}>
															{direction.title}
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
								name='aboutMe'
								render={({ field }) => (
									<FormItem>
										<FormLabel>О себе</FormLabel>
										<FormControl>
											<Textarea placeholder='Расскажите о себе' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='skills'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Навыки</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Перечислите ваши навыки'
												{...field}
											/>
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
										<FormLabel>Проекты</FormLabel>
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
							<ButtonSubmit
								isPending={isPendingCreateRequestInternship}
								label='Отправить'
							/>
						</form>
					</Form>
				</div>
			</div>
		</>
	)
}
