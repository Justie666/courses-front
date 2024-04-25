import Link from 'next/link'

import { ROUTES } from '@/shared/constants'

type Link = {
	href: string
	label: string
	target?: string
}

type Section = {
	title: string
	links: Link[]
}

const FOOTER_SECTIONS: Section[] = [
	{
		title: 'Социальные сети',
		links: [
			{
				href: 'https://vk.com/lad_academy',
				label: 'Телеграм',
				target: '_blank'
			},
			{ href: '#', label: 'ВКонтакте', target: '_blank' },
			{ href: '#', label: 'Ютуб', target: '_blank' }
		]
	},
	{
		title: 'Разделы',
		links: [
			{ href: ROUTES.main, label: 'Главная' },
			{ href: ROUTES.courses, label: 'Курсы' },
			{ href: ROUTES.internship, label: 'Стажировка' }
		]
	}
]

export const Footer = () => {
	return (
		<footer id='footer'>
			<hr className='mx-auto w-11/12' />
			<section className='container grid grid-cols-1 gap-x-12 gap-y-8 py-20 sm:grid-cols-2'>
				<div>
					<a href='/' className='flex text-xl font-bold'>
						It Академия Lad
					</a>
				</div>
				<div className='grid grid-cols-2 gap-x-12'>
					{FOOTER_SECTIONS.map(section => (
						<div key={section.title} className='flex flex-col gap-2'>
							<h3 className='text-lg font-bold'>{section.title}</h3>
							{section.links.map(link => (
								<div key={link.label}>
									<Link
										href={link.href}
										target={link.target}
										className='opacity-60 hover:opacity-100'>
										{link.label}
									</Link>
								</div>
							))}
						</div>
					))}
				</div>
			</section>
			{/* <section className='container pb-14 text-center'>
				<h3>
					&copy; 2024 сделано{' '}
					<Link
						target='_blank'
						href='https://github.com/leoMirandaa'
						className='border-primary text-primary transition-all hover:border-b-2'>
						Leo Miranda
					</Link>
				</h3>
			</section> */}
		</footer>
	)
}
