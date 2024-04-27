'use client'

import { Trash2 } from 'lucide-react'

import { useDeleteCategoryMutation } from '@/shared/api'
import { Button } from '@/shared/ui'

import { DialogUpdateCategory } from './dialog-update-category'

interface CategoryItemProps {
	category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
	const { mutate: deleteCategory } = useDeleteCategoryMutation()

	const handleDeleteCategory = () => {
		deleteCategory({ params: { id: category.id } })
	}

	return (
		<div className='text-md flex items-center gap-2 rounded-2xl border px-3 py-2'>
			{category.title}
			<div className='flex gap-2'>
				<DialogUpdateCategory category={category} />
				<Button onClick={handleDeleteCategory} size='icon' variant='outline'>
					<Trash2 size={18} />
				</Button>
			</div>
		</div>
	)
}
