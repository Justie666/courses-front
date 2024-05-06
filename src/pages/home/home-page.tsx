import { FAQ } from '@/components'
import { FAQ_LISTS } from '@/shared/constants'

import { About, BackCall, Welcome } from './components'

export const HomePage = () => {
	return (
		<>
			<Welcome />
			<About />
			<FAQ FAQList={FAQ_LISTS.mainPage} />
			<BackCall />
		</>
	)
}
