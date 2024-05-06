import { ButtonDeleteWithConfirmation } from '@/components'
import { useDeleteProjectMutation } from '@/shared/api'

interface DeleteProjectProps {
	projectId: string
}

export const DeleteProject = ({ projectId }: DeleteProjectProps) => {
	const { mutate: deleteProject, isPending: isPendingDeleteProject } =
		useDeleteProjectMutation()

	const handleDeleteProject = () => {
		deleteProject({ params: { id: projectId } })
	}
	return (
		<ButtonDeleteWithConfirmation
			isPending={isPendingDeleteProject}
			handleAction={handleDeleteProject}
		/>
	)
}
