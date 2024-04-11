import { apiWithAuth } from '../instances'

const PREFIX = '/user'

export type CurrentUserConfig = RequestConfig | void

export const UserService = {
	currentUser: async (requestConfig: CurrentUserConfig) =>
		apiWithAuth
			.get<User>(`${PREFIX}/current-user`, requestConfig?.config)
			.then(res => res.data)
}
