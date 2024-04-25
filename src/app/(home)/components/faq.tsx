import Link from 'next/link'

import { SOCIALS_LINKS } from '@/shared/constants'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui'

interface FAQProps {
	question: string
	answer: string
	// value: string
}

const FAQList: FAQProps[] = [
	{
		question: 'Где мы находимся?',
		answer: '603093, г. Нижний Новгород, ул. Родионова, д. 23В'
		// value: 'item-1'
	},
	{
		question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.'
		// value: 'item-2'
	},
	{
		question:
			'Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?',
		answer:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?'
		// value: 'item-3'
	},
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
		// value: 'item-4'
	},
	{
		question:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.'
		// value: 'item-5'
	}
]

export const FAQ = () => {
	return (
		<section id='faq' className='container py-24 sm:py-32'>
			<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
				Часто Задаваемые Вопросы{' '}
				<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
					Вопросы
				</span>
			</h2>

			<Accordion type='single' collapsible className='AccordionRoot w-full'>
				{FAQList.map((FAQItem, index) => (
					<AccordionItem key={index} value={index + ''}>
						<AccordionTrigger className='text-left'>
							{FAQItem.question}
						</AccordionTrigger>
						<AccordionContent>{FAQItem.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className='mt-4 font-medium'>
				У вас все еще есть вопросы?{' '}
				<Link
					target='_blank'
					href={`mailto:${SOCIALS_LINKS.email}`}
					className='border-primary text-primary transition-all hover:border-b-2'>
					Свяжитесь с нами
				</Link>
			</h3>
		</section>
	)
}
