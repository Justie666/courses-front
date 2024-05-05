export const About = () => {
	return (
		<section id='about' className='container py-24 sm:py-32'>
			<div className='rounded-lg border bg-muted/50 py-12'>
				<div className='flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12'>
					<img
						src='/img/pilot.png'
						alt='Pilot'
						width={300}
						height={300}
						className='mx-auto w-[300px] rounded-lg object-contain md:mx-0'
					/>
					<div className='bg-green-0 flex flex-col justify-between'>
						<div className='pb-6'>
							<h2 className='text-3xl font-bold md:text-4xl'>
								Об{' '}
								<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
									Академии{' '}
								</span>
							</h2>
							<p className='mt-4 text-xl text-muted-foreground'>
								IT-академия Lad — образовательный проект для всех, кто хочет
								начать карьеру и перейти на работу в сферу технологий от
								специалистов IT-компании Lad.
							</p>
							<p className='mt-4 text-xl text-muted-foreground'>
								С 1992 года наша компания автоматизирует бизнес-процессы с
								помощью веб-сервисов и IT-экосистем.
							</p>
							<p className='mt-4 text-xl text-muted-foreground'>
								Мы связываем технологии и бизнес. Внедряем инновации, которые
								позволяют компаниям экономить время для творческих задач и
								развития.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
