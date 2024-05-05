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

import { FormUpdateDirection } from './form-update-direction'

interface DialogUpdateDirectionProps {
	className?: string
	direction: Direction
}

export const DialogUpdateDirection = ({
	className,
	direction
}: DialogUpdateDirectionProps) => {
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
					<DialogTitle>Изменить направление</DialogTitle>
				</DialogHeader>
				<div>
					<FormUpdateDirection direction={direction} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
