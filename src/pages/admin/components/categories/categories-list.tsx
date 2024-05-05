import { useGetAllCategoriesQuery } from '@/shared/api'
import { Skeleton } from '@/shared/ui'

import { CategoryItem } from './category-item'

export const CategoriesList = () => {
	const { data: categories, isPending } = useGetAllCategoriesQuery()

	if (isPending)
		return (
			<div className='mt-4 flex flex-wrap gap-2'>
				{[...Array(10)].map((_, index) => (
					<Skeleton key={index} className='h-[42px] w-[114px] rounded-2xl' />
				))}
			</div>
		)

	if (!categories) return <div>Категорий нет</div>

	return (
		<div className='mt-4 flex flex-wrap gap-2'>
			{categories.map(category => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	)
}
