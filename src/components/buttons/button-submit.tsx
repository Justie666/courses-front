import { Loader2 } from 'lucide-react'

import { cn } from '@/shared/lib/utils'
import { Button, ButtonProps } from '@/shared/ui'

interface ButtonSubmitProps extends ButtonProps {
	isPending: boolean
	className?: string
	label: string
}

export const ButtonSubmit = ({
	isPending,
	className,
	label,
	...rest
}: ButtonSubmitProps) => {
	return (
		<Button
			type='submit'
			className={cn('mt-4', className)}
			disabled={isPending}
			{...rest}>
			{isPending && <Loader2 className='mr-2 animate-spin' />}
			{label}
		</Button>
	)
}
