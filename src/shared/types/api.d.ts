type Role = 'USER' | 'ADMIN'

interface User {
	id: string
	createdAt: string
	updatedAt: string
	email: string
	name: string
	role: Role
	password: string
	userFavoriteCourse?: UserFavoriteCourse[]
	userPurchasedCourse?: UserPurchasedCourse[]
	userWatchedLesson?: UserWatchedLesson[]
	requestInternship: RequestInternship[]
	userProject: UserProject[]
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

interface UserWatchedLesson {
	id: string
	createdAt: string
	updatedAt: string
	userId: string
	lessonId: string
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
	ratingCourse?: unknown[]
	categories?: Category[]
	lessons?: Lesson[]
}

interface Lesson {
	id: string
	createdAt: string
	updatedAt: string
	courseId: string
	slug: string
	title: string
	video: string
}

type StatusRequestBackCall = 'PENDING' | 'ACCEPT' | 'REJECT'

interface RequestBackCall {
	id: string
	createdAt: string
	updatedAt: string
	status: StatusRequestBackCall
	comment: string
	problem: string
	phone: string
	name: string
}

type StatusProject = 'IN_PROGRESS' | 'CANCELLED' | 'READY'

interface Project {
	id: string
	createdAt: string
	updatedAt: string
	title: string
	status: StatusProject
}

interface Direction {
	id: string
	createdAt: string
	updatedAt: string
	title: string
}

type StatusRequestInternship = 'PENDING' | 'ACCEPT' | 'REJECT'

interface RequestInternship {
	id: string
	createdAt: string
	updatedAt: string

	status: StatusRequestInternship

	name: string
	email: string
	phone: string
	skills: string
	aboutMe: string
	projects: string
	direction: string

	userProject: UserProject[]

	userId: string
}

interface UserProject {
	id: string
	createdAt: string
	updatedAt: string

	userId: string
	projectId: string
	requestInternshipId: string
}
