import { Trash2 } from 'lucide-react'

import { useDeleteCategoryMutation } from '@/shared/api'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

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
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleDeleteCategory}
						size='icon'
						variant='outline'
						disabled={isPendingDeleteCategory}>
						<Trash2 size={18} />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Удалить категорию</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
