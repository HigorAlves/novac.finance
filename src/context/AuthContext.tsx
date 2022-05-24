import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState
} from 'react'

import { User } from '@firebase/auth'

type UserProviderProps = { children: ReactNode }
type State = User | null
type Context = {
	state: State
	dispatch: Dispatch<SetStateAction<State>>
}
type UserContext = Context | undefined

const UserStateContext = createContext<UserContext>(undefined)

function UserProvider({ children }: UserProviderProps) {
	const [state, dispatch] = useState<State>(null)

	return (
		<UserStateContext.Provider value={{ state, dispatch }}>
			{children}
		</UserStateContext.Provider>
	)
}

function useUser() {
	const context = useContext<UserContext>(UserStateContext)
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider')
	}
	return context
}

export { UserProvider, useUser }
