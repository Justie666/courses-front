import { DeleteDirection } from './delete'
import { DialogUpdateDirection } from './update'

interface DirectionItemProps {
	direction: Direction
}

export const DirectionItem = ({ direction }: DirectionItemProps) => {
	return (
		<div className='text-md rounded-2xl border px-3 py-2 bg-muted/50'>
			<div className='flex items-center justify-between gap-2 font-medium'>
				{direction.title}
				<div className='flex gap-2'>
					<DialogUpdateDirection direction={direction} />
					<DeleteDirection directionId={direction.id} />
				</div>
			</div>
		</div>
	)
}
