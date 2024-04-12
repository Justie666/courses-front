import { Heart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui'

export const CourseCard = () => {
	return (
		<div>
			<Card className='group'>
				<CardHeader className='overflow-hidden p-0'>
					<Image
						src='/img/course.png'
						alt={'d'}
						width={360}
						height={200}
						className={cn('object-cover transition-all group-hover:scale-105')}
					/>
				</CardHeader>
				<CardContent className='px-2 py-6 md:px-6'>
					<CardTitle>React Native и Expo Router</CardTitle>
					<p className='mt-3 flex gap-2'>
						<Star fill='yellow' strokeWidth={0} /> 5.0
					</p>
					<div className='mt-4 flex flex-wrap gap-2'>
						<Badge variant='outline'>FrontEnd</Badge>
						<Badge variant='outline'>BackEnd</Badge>
						<Badge variant='outline'>Soft</Badge>
						<Badge variant='outline'>DevOps</Badge>
					</div>
				</CardContent>
				<hr />
				<CardFooter className='flex items-center justify-between px-2 py-3 md:px-6'>
					<p>Бесплатно</p>
					<div className='flex items-center gap-1'>
						<Button size='icon' variant='outline'>
							<Heart />
						</Button>
						<Button asChild variant='outline'>
							<Link href={`${ROUTES.courses}/1`}>Подробнее</Link>
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}
