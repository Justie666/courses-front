import { Pencil } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import {
	Button,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

import { FormUpdateProject } from './form-update-project'

interface DialogUpdateProjectProps {
	className?: string
	project: Project
}

export const DialogUpdateProject = ({
	className,
	project
}: DialogUpdateProjectProps) => {
	return (
		<Dialog>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<DialogTrigger asChild className={cn('', className)}>
							<Button size='icon' variant='outline'>
								<Pencil size={18} />
							</Button>
						</DialogTrigger>
					</TooltipTrigger>
					<TooltipContent>Изменить</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Изменить проект</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateProject project={project} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
