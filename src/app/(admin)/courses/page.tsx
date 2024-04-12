'use client'

import { useState } from 'react'

import { CourseCard, CoursesList } from '@/components'
import { cn } from '@/shared/lib/utils'
import { Button, ScrollArea } from '@/shared/ui'

const CATEGORIES: { label: string; value: string }[] = [
	{ label: 'Все', value: 'all' },
	{ label: 'FrontEnd', value: 'FrontEnd' },
	{ label: 'BackEnd', value: 'BackEnd' },
	{ label: 'DevOps', value: 'DevOps' }
]

const CoursesPage = () => {
	const [selectCategory, setSelectCategory] = useState('all')

	return (
		<div>
			<p className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-medium tracking-tight text-transparent'>
				Выбрать курс
			</p>
			<h2 className='mt-2 text-3xl md:text-4xl lg:text-6xl'>Каталог курсов</h2>
			<p className='mt-8 max-w-[780px] text-xl'>
				Только актуальные курсы, которые мы постоянно обновляем, чтобы вы
				получили востребованные знания и росли как специалисты.
			</p>
			<div className='mt-10 flex flex-wrap gap-2'>
				{CATEGORIES.map(category => (
					<Button
						key={category.value}
						onClick={() => setSelectCategory(category.value)}
						className={cn('', {
							'bg-blue-500 text-white': category.value === selectCategory
						})}
						variant='outline'>
						{category.label}
					</Button>
				))}
			</div>
			<CoursesList />
		</div>
	)
}

export default CoursesPage
