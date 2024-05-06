export const STATUSES: Record<string, ValueOption[]> = {
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
	'request-back-call': [
		{
			value: 'PENDING',
			label: 'В ожидании'
		},
		{
			value: 'ACCEPT',
			label: 'Завершён'
		},
		{
			value: 'REJECT',
			label: 'Отклонен'
		}
	]
}
