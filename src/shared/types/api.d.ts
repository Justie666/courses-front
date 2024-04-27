enum Role {
	USER,
	ADMIN
}

interface User {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	name: string
	role: Role
	password: string
	userFavoriteCourse: UserFavoriteCourse[]
	userPurchasedCourse: UserPurchasedCourse[]
}

interface UserFavoriteCourse {
	id: string
	createdAt: string
	updatedAt: string
	userId: string
	courseId: string
}

interface UserPurchasedCourse {
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

type StatusRequestBackCall = 'PENDING' | 'ACCEPT' | 'REJECT'

interface RequestBackCall {
	id: string
	createdAt: string
	updatedAt: string
	status: StatusRequestBackCall
	comment: string
	phone: string
	userId: string
	user: User
}
