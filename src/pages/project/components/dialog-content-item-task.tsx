import { DialogDescription, DialogTitle } from '@/shared/ui'

interface DialogContentItemTaskProps {
	title: string
	description: string
}

export const DialogContentItemTask = ({
	title,
	description
}: DialogContentItemTaskProps) => {
	return (
		<div>
			<DialogTitle asChild>
				<p>{title}</p>
			</DialogTitle>
			<DialogDescription>{description}</DialogDescription>
		</div>
	)
}
