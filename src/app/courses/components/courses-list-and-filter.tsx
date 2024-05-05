'use client'

import { useState } from 'react'

import { CoursesList } from '@/components'
import { useGetAllCategoriesQuery, useGetAllCourseQuery } from '@/shared/api'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'

export const CoursesListAndFilter = () => {
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
		return course.categories?.some(category => category.id === selectedCategory) // Filter by category
	})
	return (
		<>
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
							'bg-primary text-white': selectedCategory === category.id
						})}
						variant='outline'>
						{category.title}
					</Button>
				))}
			</div>
			<CoursesList courses={filteredCourses} isPending={isPendingCourses} />
		</>
	)
}
