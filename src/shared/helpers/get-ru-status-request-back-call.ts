export const getRuStatusRequestBackCall = (status: StatusRequestBackCall) => {
	switch (status) {
		case 'PENDING':
			return 'В ожидании'
		case 'ACCEPT':
			return 'Завершён'
		case 'REJECT':
			return 'Отклонен'
		default:
			return 'Неизвестно'
	}
}
