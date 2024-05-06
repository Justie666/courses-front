import { useGetAllDirectionsQuery } from '@/shared/api'

import { DirectionItem } from './direction-item'

export const DirectionList = () => {
	const { data: directions } = useGetAllDirectionsQuery()

	if (!directions) return null

	return (
		<div className='mt-4 flex flex-wrap gap-2'>
			{directions.map(direction => (
				<DirectionItem key={direction.id} direction={direction} />
			))}
		</div>
	)
}
