import { DeleteCategory } from './delete-category'
import { DialogUpdateCategory } from './dialog-update-category'

interface CategoryItemProps {
	category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
	return (
		<div className='text-md flex items-center gap-2 rounded-2xl border px-3 py-2'>
			{category.title}
			<div className='flex gap-2'>
				<DialogUpdateCategory category={category} />
				<DeleteCategory categoryId={category.id} />
			</div>
		</div>
	)
}
