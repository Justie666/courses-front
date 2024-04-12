'use client'

import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { CreateCategoryForm } from './create-category-form'

interface DialogCreateCategoryProps {
	className?: string
}

export const DialogCreateCategory = ({
	className
}: DialogCreateCategoryProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild className={cn('mt-5', className)}>
				<Button variant='outline' size='sm'>
					Добавить
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавить новую категорию</DialogTitle>
				</DialogHeader>
				<div>
					<CreateCategoryForm />
				</div>
			</DialogContent>
		</Dialog>
	)
}
