import { User } from '@firebase/auth'

const USER_LOCALSTORAGE_KEY = '@USER'

export function setUserStorage(data: User) {
	try {
		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
	} catch {
		throw new Error(
			'Was not possible to save the user data inside the local storage!'
		)
	}
}

export function getUserStorage(): User {
	try {
		const data = localStorage.getItem(USER_LOCALSTORAGE_KEY)
		return JSON.parse(data as string)
	} catch {
		throw new Error('Was not possible to get the user from local storage')
	}
}

export function removeUserStorage(): boolean {
	try {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY)
		return true
	} catch {
		throw new Error(
			'Was not possible to save the user data inside the local storage!'
		)
	}
}
