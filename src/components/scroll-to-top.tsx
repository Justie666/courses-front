'use client'
import { ArrowUpToLine } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/shared/ui'

export const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])

	const goToTop = () => {
		window.scroll({
			top: 0,
			left: 0
		})
	}

	if (!showTopBtn) return null

	if (showTopBtn)
		return (
			<Button
				onClick={goToTop}
				className='fixed bottom-4 right-4 opacity-50 shadow-md hover:opacity-80'
				size='icon'>
				<ArrowUpToLine className='h-4 w-4' />
			</Button>
		)
}
