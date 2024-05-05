import { FAQ } from '@/components/faq'
import { FAQ_LISTS } from '@/shared/constants/faq-lists'

import { FormRequestInternship } from './components'

export const InternshipPage = () => {
	return (
		<>
			<div className='text-center'>
				<p className='text-5xl font-medium tracking-tighter md:text-6xl lg:text-7xl'>
					Стажировка
				</p>
				<p className='mt-3 text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl'>
					в{' '}
					<span className='bg-gradient-to-r from-primary/80 to-primary/90 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-5xl lg:text-6xl'>
						IT-АКАДЕМИЯ Lad
					</span>
				</p>
			</div>
			<div className='mt-20'>
				<div className='flex flex-col gap-4 md:flex-row'>
					<div className='text-right text-2xl md:min-w-[330px] md:text-3xl'>
						стажировка на реальных проектах
					</div>
					<div className='space-y-3 md:space-y-5'>
						<p>
							Выпускники курсов IT-академии Lad проходят стажировку под
							руководством опытных IT-специалистов и с нуля создают проект по
							реальному заданию от заказчика.{' '}
						</p>
						<p>
							<span className='text-primary'>
								На стажировке мы восстановим полный цикл разработки
							</span>{' '}
							— от создания прототипа в дизайне и подготовки бэкенда, до
							тестирования и релиза рабочей версии продукта. Вы поработаете над
							заданиями от университетов, социальных организаций или бизнеса.
							Готовые продукты будут приносить пользу людям и дополнят ваше
							портфолио.
						</p>
						<p>
							Работаем по методике Scrum — в стажировку входят планирование,
							дейлики и демо. Такой подход приближает процессы к реальной работе
							продуктовых IT-команд и ускорит вашу адаптацию в компании после
							трудоустройства.
						</p>
						<div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
							<div className='flex flex-col gap-1 rounded-xl bg-primary p-6 text-white'>
								<p className='flex-grow'>Старт</p>
								<p className='flex-grow text-xl'>2024 год</p>
							</div>
							<div className='flex flex-col gap-1  rounded-xl bg-primary p-6 text-white'>
								<p className='flex-grow'>Место прохождения</p>
								<p className='flex-grow text-xl'>Онлайн формат</p>
							</div>
							<div className='flex flex-col gap-1  rounded-xl bg-primary p-6 text-white'>
								<p className='flex-grow'>Время занятий</p>
								<p className='flex-grow text-xl'>После 18.00 (МСК)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FAQ FAQList={FAQ_LISTS.internshipPage} withNumbers />
			<FormRequestInternship />
		</>
	)
}
