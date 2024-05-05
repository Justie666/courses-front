import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts'
import {
	AdminPage,
	AdminRequestsPage,
	HomePage,
	InternshipPage,
	ProfilePage,
	UserCoursesPage
} from '@/pages'
import CoursesPage from '@/pages/courses/page'
import CoursesWatchSlugPage from '@/pages/courses/watch/[slug]/page'
import { SignInPage } from '@/pages/sign-in-page'
import { ROUTES } from '@/shared/constants'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: ROUTES.main,
				element: <HomePage />
			},
			{ path: ROUTES['sign-in'], element: <SignInPage /> },
			{ path: ROUTES.courses, element: <CoursesPage /> },
			{ path: ROUTES.internship, element: <InternshipPage /> },
			{ path: ROUTES.admin, element: <AdminPage /> },
			{ path: ROUTES['admin-requests'], element: <AdminRequestsPage /> },
			{ path: ROUTES.profile, element: <ProfilePage /> },
			{
				path: `${ROUTES['courses-watch']}/:slug`,
				element: <CoursesWatchSlugPage />
			},
			{ path: ROUTES['user-courses'], element: <UserCoursesPage /> }
		]
	}
])
