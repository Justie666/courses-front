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
	task: [
		{ label: 'Нет статуса', value: 'NO_STATUS' },
		{ label: 'В процессе', value: 'IN_PROGRESS' },
		{ label: 'Тестируется', value: 'TESTING' },
		{ label: 'Готово', value: 'DONE' },
		{ label: 'В архиве', value: 'ARCHIVE' }
	]
	// 'request-back-call': ['PENDING', 'ACCEPT', 'REJECT']
}

export const STATUSES_REQUEST: StatusRequest[] = ['PENDING', 'ACCEPT', 'REJECT']
