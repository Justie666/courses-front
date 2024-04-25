export const RULES = {
	password: {
		minLength: 8,
		minLengthError: 'Пароль должен содержать больше 8 символов'
	},
	email: {
		emailError: 'Некорректная почта'
	},
	name: {
		minLength: 2,
		minLengthError: 'Имя должно содержать больше 2 символов'
	},
	titleCategory: {
		min: 2,
		minError: 'Название категории должно содержать минимум 2 символа'
	},
	course: {
		title: {
			min: {
				value: 5,
				message: 'Название курса должно содержать минимум 5 символов'
			}
		},
		categoryIds: {
			some: {
				message: 'Вы должны выбрать хотя бы одну категорию'
			}
		}
	}
}
