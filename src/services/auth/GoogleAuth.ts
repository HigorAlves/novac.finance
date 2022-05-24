import { UserCredential } from '@firebase/auth'
import {
	AuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth'

import { AUTH } from '~/services/firebase'

export class GoogleAuth {
	static login(): UserCredential | any {
		const provider: AuthProvider = new GoogleAuthProvider()
		signInWithPopup(AUTH, provider)
			.then(result => result)
			.catch(error => {
				const { code, message, email } = error
				const credential = GoogleAuthProvider.credentialFromError(error)
				return { code, message, email, credential }
			})
	}

	static logout() {
		AUTH.signOut().then(() => true)
	}
}
