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
	}
}
