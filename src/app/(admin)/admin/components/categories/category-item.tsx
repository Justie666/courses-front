'use client'

import { Trash2 } from 'lucide-react'

import { useDeleteCategoryMutation } from '@/shared/api'

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
			<div className='flex gap-1'>
				<DialogUpdateCategory category={category} />
				<Trash2
					onClick={handleDeleteCategory}
					size={18}
					className='cursor-pointer hover:scale-110'
				/>
			</div>
		</div>
	)
}
