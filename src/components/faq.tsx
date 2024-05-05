import { Link } from 'react-router-dom'

import { SOCIALS_LINKS } from '@/shared/constants'
import { formatNumberToTwoDigits } from '@/shared/helpers'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui'

interface FAQProps {
	FAQList: FAQItem[]
	withNumbers?: boolean
}

export const FAQ = ({ FAQList, withNumbers = false }: FAQProps) => {
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
							<div>
								{withNumbers && (
									<>
										<span className='text-primary'>
											{formatNumberToTwoDigits(index + 1)}/{' '}
										</span>{' '}
									</>
								)}
								{FAQItem.question}
							</div>
						</AccordionTrigger>
						<AccordionContent>{FAQItem.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className='mt-4 font-medium'>
				У вас все еще есть вопросы?{' '}
				<Link
					target='_blank'
					to={`mailto:${SOCIALS_LINKS.email}`}
					className='border-primary text-primary transition-all hover:border-b-2'>
					Свяжитесь с нами
				</Link>
			</h3>
		</section>
	)
}
