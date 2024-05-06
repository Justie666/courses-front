import { ButtonDeleteWithConfirmation } from '@/components'
import { useDeleteCategoryMutation } from '@/shared/api'

interface DeleteCategoryProps {
	categoryId: string
}

export const DeleteCategory = ({ categoryId }: DeleteCategoryProps) => {
	const { mutate: deleteCategory, isPending: isPendingDeleteCategory } =
		useDeleteCategoryMutation()

	const handleDeleteCategory = () => {
		deleteCategory({ params: { id: categoryId } })
	}
	return (
		<ButtonDeleteWithConfirmation
			isPending={isPendingDeleteCategory}
			handleAction={handleDeleteCategory}
		/>
	)
}
