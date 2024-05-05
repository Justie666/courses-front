import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState
} from 'react'

type UserProviderState = {
	user: User | null
	setUser: (user: User | null) => void
}

const initialState: UserProviderState = {
	user: null,
	setUser: () => null
}

const UserContext = createContext<UserProviderState>(initialState)

export const UserProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User | null>(null)
	const storageKey = 'user'

	useEffect(() => {
		const userFromLocalStorage = localStorage.getItem('user')
		if (userFromLocalStorage) {
			setUser(JSON.parse(userFromLocalStorage))
		}
	}, [])

	const value: UserProviderState = {
		user,
		setUser: user => {
			localStorage.setItem(storageKey, JSON.stringify(user))
			setUser(user)
		}
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
