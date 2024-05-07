import { FormRequestInternship } from './form-request-internship'

export const RequestInternship = () => {
	return (
		<>
			<hr className='mx-auto w-11/12' />
			<div className='container py-24 sm:py-32'>
				<h3 className='text-center text-4xl font-bold md:text-5xl'>
					Хотите принять участие в стажировке? <br />
					<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
						Отправляйте заявку
					</span>
				</h3>
				<p className='mx-auto mb-8 mt-4 max-w-[500px] text-center text-xl text-muted-foreground'>
					Присоединяйтесь к нашей команде: подайте заявку на стажировку!
				</p>
				<div className='max-w-[550px] mx-auto'>
					<FormRequestInternship />
				</div>
			</div>
		</>
	)
}
