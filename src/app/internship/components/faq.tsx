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
		question: 'Можно ли проходить стажировку удаленно?',
		answer: 'Можно, стажировка проходит полностью онлайн. '
	},
	{
		question: 'Что я получу после стажировки?',
		answer:
			'Официальный сертификат IT-академии Lad и рекомендации менторов. Они подтвердят ваши знания, опыт работы в команде и значительно повысят шансы на трудоустройство.'
	},
	{
		question: 'Я смогу совмещать стажировку с учебой или работой?',
		answer: 'Да, занятия на стажировке проходят вечером после 18:00.'
	},
	{
		question: 'Сколько времени будет занимать стажировка?',
		answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
	},
	{
		question: 'Стажировка бесплатная?',
		answer:
			'Да Формат стажировки — продвинутое обучение на практике. Для старта нужны базовые знания и навыки по выбранному треку. Прокачать их до уверенного уровня Junior-специалиста помогут менторы. А полученный на стажировке опыт работы можно записать в резюме. Все процессы максимально приближены к работе реальных продуктовых IT-команд. Мы сознательно выбрали такой формат — часто оплачиваемые стажировки предполагают малую включенность и вовлеченность в процесс менторов. У нас это не так. Менторы и кураторы сопровождают вас со старта до защиты проекта.'
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
							<div>
								<span className='text-primary'>0{index + 1}/ </span>{' '}
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
					href={`mailto:${SOCIALS_LINKS.email}`}
					className='border-primary text-primary transition-all hover:border-b-2'>
					Свяжитесь с нами
				</Link>
			</h3>
		</section>
	)
}
