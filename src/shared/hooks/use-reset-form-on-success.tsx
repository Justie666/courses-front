// hooks/useResetFormOnSuccess.js
import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'

export const useResetFormOnSuccess = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: UseFormReturn<any>,
	isSuccess: boolean
) => {
	useEffect(() => {
		if (isSuccess) {
			form.reset()
		}
	}, [isSuccess, form])
}
