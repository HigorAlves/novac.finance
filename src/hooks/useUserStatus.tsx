import { useEffect } from 'react'

import { onAuthStateChanged } from '@firebase/auth'

import { useUser } from '~/context'
import { setUserStorage } from '~/helpers/userStorage'
import { AUTH } from '~/services'

export function useUserStatus() {
	const { dispatch, state } = useUser()

	useEffect(() => {
		onAuthStateChanged(AUTH, user => {
			if (user) {
				dispatch(user)
				setUserStorage(user)
			}
		})
	}, [])

	return state
}
