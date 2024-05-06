import { ButtonDeleteWithConfirmation } from '@/components'
import { useDeleteDirectionMutation } from '@/shared/api'

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
		<ButtonDeleteWithConfirmation
			isPending={isPendingDeleteDirection}
			handleAction={handleDeleteDirection}
		/>
	)
}
