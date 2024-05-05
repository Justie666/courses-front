import { Trash2 } from 'lucide-react'

import { useDeleteProjectMutation } from '@/shared/api'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

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
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						onClick={handleDeleteProject}
						size='icon'
						variant='outline'
						disabled={isPendingDeleteProject}>
						<Trash2 size={18} />
					</Button>
				</TooltipTrigger>
				<TooltipContent>Удалить</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
