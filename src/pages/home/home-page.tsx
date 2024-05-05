import { useUser } from '@/app/user-provider'
import { FAQ } from '@/components'
import { FAQ_LISTS } from '@/shared/constants'

import { About, BackCall, Welcome } from './components'

export const HomePage = () => {
	const { user } = useUser()

	return (
		<>
			{user?.id}
			<Welcome />
			<About />
			<FAQ FAQList={FAQ_LISTS.mainPage} />
			<BackCall />
		</>
	)
}
