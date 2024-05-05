import { useGetAllDirectionsQuery } from '@/shared/api'

import { DirectionItem } from './direction-item'

export const DirectionList = () => {
	const { data: directions } = useGetAllDirectionsQuery()

	if (!directions) return null

	return (
		<div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
			{directions.map(direction => (
				<DirectionItem key={direction.id} direction={direction} />
			))}
		</div>
	)
}
