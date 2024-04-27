import { Video } from '@/components'

import { About, BackCall, FAQ, Welcome } from './components'

export default function Home() {
	return (
		<>
			<Welcome />
			<About />
			<FAQ />
			<BackCall />
		</>
	)
}
