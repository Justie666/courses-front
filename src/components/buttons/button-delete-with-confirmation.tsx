import { Trash2 } from 'lucide-react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/shared/ui'

import { ForAdmin } from '../wrappers'
import { ButtonSubmit } from './button-submit'

interface ButtonDeleteWithConfirmationProps {
	isPending: boolean
	handleAction: () => void
}

export const ButtonDeleteWithConfirmation = ({
	handleAction,
	isPending
}: ButtonDeleteWithConfirmationProps) => {
	return (
		<ForAdmin>
			<AlertDialog>
				<TooltipProvider delayDuration={0}>
					<Tooltip>
						<TooltipTrigger asChild>
							<AlertDialogTrigger asChild>
								<Button variant='outline' size='icon'>
									<Trash2 />
								</Button>
							</AlertDialogTrigger>
						</TooltipTrigger>
						<TooltipContent>Удалить</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
						<AlertDialogDescription>
							Это действие нельзя отменить. Это приведет к окончательному
							удалению.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Отменить</AlertDialogCancel>
						<ButtonSubmit
							className='m-0'
							type='button'
							onClick={handleAction}
							isPending={isPending}
							label={'Удалить'}
						/>
						<AlertDialogAction asChild></AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</ForAdmin>
	)
}
