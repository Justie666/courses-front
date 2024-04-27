'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateCourseMutation, useGetAllCategoriesQuery } from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Button,
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/ui'

const formSchema = z.object({
	title: z.string().min(RULES.course.title.min.value, {
		message: RULES.course.title.min.message
	}),
	categoryIds: z.array(z.string()).refine(value => value.some(item => item), {
		message: RULES.course.categoryIds.some.message
	}),
	price: z.number()
})

export const FormCreateCourse = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '321321321',
			categoryIds: [],
			price: 0
		}
	})

	const { data: categories } = useGetAllCategoriesQuery()

	const { mutate: createCourse, isPending } = useCreateCourseMutation()

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(321)
		createCourse({ params: values })
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название</FormLabel>
							<FormControl>
								<Input placeholder='Название' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='price'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Цена</FormLabel>
							<FormControl>
								<Input placeholder='Цена' disabled {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormItem className='space-y-2'>
					<FormLabel>Категории</FormLabel>
					{categories?.map(category => (
						<FormField
							key={category.id}
							control={form.control}
							name='categoryIds'
							render={({ field }) => {
								return (
									<FormItem
										key={category.id}
										className='flex flex-row items-start space-x-3 space-y-0'>
										<FormControl>
											<Checkbox
												checked={field.value?.includes(category.id)}
												onCheckedChange={checked => {
													return checked
														? field.onChange([...field.value, category.id])
														: field.onChange(
																field.value?.filter(
																	value => value !== category.id
																)
															)
												}}
											/>
										</FormControl>
										<FormLabel className='font-normal'>
											{category.title}
										</FormLabel>
									</FormItem>
								)
							}}
						/>
					))}
					<FormMessage />
				</FormItem>
				<Button type='submit' className='mt-4' disabled={isPending}>
					{isPending && <Loader2 className='mr-2 animate-spin' />}
					Добавить
				</Button>
			</form>
		</Form>
	)
}