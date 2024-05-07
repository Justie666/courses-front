export const RULES = {
	required: 'Обязательное поле',
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
				value: 3,
				message: 'Название курса должно содержать минимум 3 символа'
			}
		},
		categoryIds: {
			some: {
				message: 'Вы должны выбрать хотя бы одну категорию'
			}
		}
	},
	project: {
		title: {
			min: {
				value: 2,
				message: 'Название проекта должно содержать минимум 2 символа'
			}
		}
	},
	direction: {
		title: {
			min: {
				value: 2,
				message: 'Название направления должно содержать минимум 2 символа'
			}
		}
	},
	backCall: {
		phone: {
			regex: {
				rule: '',
				message: 'Неверный формат телефона'
			}
		},
		problem: {
			min: {
				value: 10,
				message: 'Описание проблемы должно содержать минимум 10 символов'
			}
		},
		name: {
			min: {
				value: 2,
				message: 'Имя должно содержать больше 2 символов'
			}
		}
	},
	requestInternship: {
		phone: {
			regex: {
				rule: '',
				message: 'Неверный формат телефона'
			}
		},
		direction: {
			string: {
				message: 'Это поле является обязательным'
			}
		},
		projects: {
			string: {
				message: 'Это поле является обязательным'
			}
		},
		aboutMe: {
			string: {
				message: 'Это поле является обязательным'
			}
		}
	},
	lesson: {
		min: {
			value: 2,
			message: 'Название урока должно содержать минимум 2 символа'
		}
	}
}
