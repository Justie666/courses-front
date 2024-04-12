interface User {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	name: string
	role: string
	password: string
}

interface UserResponse {
	user: User
	accessToken: string
}

type UserSignInFields = {
	email: string
	password: string
}

interface UserSignUpFields {
	email: string
	name: string
	password: string
}

interface Category {
	id: string
	title: string
}
