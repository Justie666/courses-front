import { FormBackCall } from './form-back-call'

export const BackCall = () => {
	return (
		<section id='newsletter'>
			<hr className='mx-auto w-11/12' />
			<div className='container py-24 sm:py-32'>
				<h3 className='text-center text-4xl font-bold md:text-5xl'>
					Закажите обратный{' '}
					<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
						Звонок
					</span>
				</h3>
				<p className='mx-auto mb-8 mt-4 max-w-[500px] text-center text-xl text-muted-foreground'>
					Нужна помощь? Просто оставьте свой номер, и мы свяжемся с вами в
					ближайшее время.
				</p>
				<FormBackCall />
			</div>
		</section>
	)
}
