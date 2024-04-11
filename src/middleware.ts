import { type NextRequest, NextResponse } from 'next/server'

import { ROUTES } from './shared/constants'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get('refreshToken')?.value

	const isAuthPage = url.includes(ROUTES['sign-in'])

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(ROUTES.main, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/sign-in/:path']
}
