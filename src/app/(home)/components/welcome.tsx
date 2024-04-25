import { YoutubeIcon } from 'lucide-react'

import { SOCIALS_LINKS } from '@/shared/constants'
import { SocialBadge, TelegramIcon, VkIcon } from '@/shared/ui'

export const Welcome = () => {
	return (
		<>
			<div className='mt-24 text-center'>
				<p className='text-5xl font-medium tracking-tighter md:text-6xl lg:text-7xl'>
					Добро пожаловать
				</p>
				<p className='mt-3 text-3xl font-medium tracking-tighter md:text-4xl lg:text-6xl'>
					Курсы, стажировки и многое другое
				</p>
				<h1 className='mt-3 bg-gradient-to-r from-primary/80 to-primary/50 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-4xl lg:text-6xl'>
					IT-АКАДЕМИЯ Lad
				</h1>
			</div>
			<div className=' mt-5 flex flex-wrap justify-center gap-1'>
				<SocialBadge
					className='hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400'
					href={SOCIALS_LINKS.tg}
					icon={<TelegramIcon />}
					social='Telegram'
				/>
				<SocialBadge
					className='hover:bg-red-500 hover:text-white dark:hover:bg-red-500'
					href={SOCIALS_LINKS.youtube}
					icon={<YoutubeIcon />}
					social='Youtube'
				/>
				<SocialBadge
					className='hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600'
					href={SOCIALS_LINKS.youtube}
					icon={<VkIcon />}
					social='VKontakte'
				/>
			</div>
		</>
	)
}
