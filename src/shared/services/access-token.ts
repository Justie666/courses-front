import Cookies from 'js-cookie'

enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get('refreshToken')
	return refreshToken || null
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveAccessToken = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: 'localhost',
		sameSite: 'strict',
		expires: 100
	})
}

export const removeAccessToken = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
