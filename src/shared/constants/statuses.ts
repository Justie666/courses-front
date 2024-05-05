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
	]
}
