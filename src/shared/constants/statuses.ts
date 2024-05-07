export const STATUSES: Record<string, string[] | ValueOption[]> = {
	project: [
		{
			value: 'IN_PROGRESS',
			label: 'В процессе'
		},
		{
			value: 'CANCELLED',
			label: 'Отменён'
		},
		{
			value: 'READY',
			label: 'Завершён'
		}
	],
	'request-back-call': ['PENDING', 'ACCEPT', 'REJECT']
}

export const STATUSES_REQUEST: StatusRequest[] = ['PENDING', 'ACCEPT', 'REJECT']
