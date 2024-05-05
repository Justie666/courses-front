export const getRuStatusProject = (status: StatusProject) => {
	switch (status) {
		case 'IN_PROGRESS':
			return 'В процессе'
		case 'CANCELLED':
			return 'Отменён'
		case 'READY':
			return 'Завершен'
		default:
			return 'Неизвестно'
	}
}
