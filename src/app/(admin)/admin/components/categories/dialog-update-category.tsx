'use client'

import { Pencil } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { UpdateCategoryForm } from './update-category-form'

interface DialogUpdateCategoryProps {
	className?: string
	category: Category
}

export const DialogUpdateCategory = ({
	className,
	category
}: DialogUpdateCategoryProps) => {
	return (
		<Dialog>
			<DialogTrigger className={cn('', className)}>
				<Pencil size={18} className='cursor-pointer hover:scale-110' />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить категорию</DialogTitle>
				</DialogHeader>
				<div>
					<UpdateCategoryForm category={category} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
