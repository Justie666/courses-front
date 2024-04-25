interface User {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	name: string
	role: string
	password: string
	userFavoriteCourse: UserFavoriteCourse[]
}

interface UserFavoriteCourse {
	id: string
	createdAt: string
	updatedAt: string
	userId: string
	courseId: string
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
	createdAt: string
	updatedAt: string
	title: string
}

interface Course {
	id: string
	createdAt: string
	updatedAt: string
	title: string
	price: number
	slug: string
	image: string
	ratingCourse: any[]
	categories: Category[]
}
