'use client'

import { Pencil } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/shared/ui'

import { FormUpdateCategory } from './form-update-category'

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
			<DialogTrigger asChild className={cn('', className)}>
				<Button size='icon' variant='outline'>
					<Pencil size={18} />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить категорию</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateCategory category={category} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
