export const getRuStatusRequest = (status: StatusRequest) => {
	switch (status) {
		case 'PENDING':
			return 'В ожидании'
		case 'ACCEPT':
			return 'Принят'
		case 'REJECT':
			return 'Отклонен'
		default:
			return 'Неизвестно'
	}
}
