'use client'

import { useState } from 'react'

import { CoursesList } from '@/components'
import { useGetAllCategoriesQuery, useGetAllCourseQuery } from '@/shared/api'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'

const CoursesPage = () => {
	const [selectedCategory, setSelectedCategory] = useState('all')
	const { data: courses, isPending: isPendingCourses } = useGetAllCourseQuery()
	const { data: categories } = useGetAllCategoriesQuery()

	const handleCategorySelection = (categoryId: string) => {
		setSelectedCategory(categoryId)
	}

	const filteredCourses = courses?.filter(course => {
		if (selectedCategory === 'all') {
			return true
		}
		return course.categories.some(category => category.id === selectedCategory) // Filter by category
	})

	return (
		<div>
			<p className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-xl font-medium tracking-tight text-transparent'>
				Выбрать курс
			</p>
			<h2 className='mt-2 text-3xl md:text-4xl lg:text-6xl'>Каталог курсов</h2>
			<p className='mt-8 max-w-[780px] text-xl'>
				Только актуальные курсы, которые мы постоянно обновляем, чтобы вы
				получили востребованные знания и росли как специалисты.
			</p>
			<div className='mt-10 flex flex-wrap gap-2'>
				<Button
					onClick={() => handleCategorySelection('all')}
					className={cn('', {
						'bg-primary/70 text-white': selectedCategory === 'all'
					})}
					variant='outline'>
					Все
				</Button>
				{categories?.map(category => (
					<Button
						key={category.id}
						onClick={() => handleCategorySelection(category.id)}
						className={cn('', {
							'bg-primary/70 text-white': selectedCategory === category.id
						})}
						variant='outline'>
						{category.title}
					</Button>
				))}
			</div>
			<CoursesList courses={filteredCourses} isPending={isPendingCourses} />
		</div>
	)
}

export default CoursesPage
