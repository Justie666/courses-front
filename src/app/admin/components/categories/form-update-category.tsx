'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useUpdateCategoryMutation } from '@/shared/api'
import { RULES } from '@/shared/constants'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/ui'

const formSchema = z.object({
	title: z.string().min(RULES.titleCategory.min, {
		message: RULES.titleCategory.minError
	})
})

interface FormUpdateCategoryProps {
	category: Category
}

export const FormUpdateCategory = ({ category }: FormUpdateCategoryProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: category.title
		}
	})

	const { mutate: updateCategory, isPending } = useUpdateCategoryMutation({})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		updateCategory({ params: { id: category.id, ...values } })
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
				<Button type='submit' className='mt-4' disabled={isPending}>
					{isPending && <Loader2 className='mr-2 animate-spin' />}
					Добавить
				</Button>
			</form>
		</Form>
	)
}
