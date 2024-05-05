import { Trash2 } from 'lucide-react'

import { useDeleteDirectionMutation } from '@/shared/api'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

interface DeleteDirectionProps {
	directionId: string
}

export const DeleteDirection = ({ directionId }: DeleteDirectionProps) => {
	const { mutate: deleteDirection, isPending: isPendingDeleteDirection } =
		useDeleteDirectionMutation()

	const handleDeleteDirection = () => {
		deleteDirection({ params: { id: directionId } })
	}
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleDeleteDirection}
						size='icon'
						variant='outline'
						disabled={isPendingDeleteDirection}>
						<Trash2 size={18} />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Удалить</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
