import { create } from 'zustand'

interface UserState {
	user: null | User
	setUser: (user: User) => void
}

export const useUser = create<UserState>()(set => ({
	user: null,
	setUser: user => set({ user })
}))
