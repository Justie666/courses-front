import { CoursesListAndFilter } from './components'

const CoursesPage = () => {
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
			<CoursesListAndFilter />
		</div>
	)
}

export default CoursesPage
