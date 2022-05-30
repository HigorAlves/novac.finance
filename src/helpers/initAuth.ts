// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
	init({
		authPageURL: '/signin',
		appPageURL: '/dashboard',
		loginAPIEndpoint: '/api/login',
		logoutAPIEndpoint: '/api/logout',
		onLoginRequestError: err => {
			console.error(err)
		},
		onLogoutRequestError: err => {
			console.error(err)
		},
		// firebaseAuthEmulatorHost: 'localhost:9099',
		firebaseAdminInitConfig: {
			credential: {
				projectId: 'novac-pro',
				clientEmail:
					'firebase-adminsdk-ommob@novac-pro.iam.gserviceaccount.com',
				// The private key must not be accessible on the client side.
				privateKey: process.env.FIREBASE_PRIVATE_KEY as string
			},
			databaseURL: 'https://my-example-app.firebaseio.com'
		},
		// Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
		// useFirebaseAdminDefaultCredential: true,
		firebaseClientInitConfig: {
			apiKey: process.env.NEXT_PUBLIC_APIKEY as string,
			authDomain: process.env.AUTHDOMAIN,
			databaseURL: 'https://novac-pro.firebaseio.com',
			projectId: process.env.PROJECTID
		},
		cookies: {
			name: 'NovacPro', // required
			// Keys are required unless you set `signed` to `false`.
			// The keys cannot be accessible on the client side.
			keys: [
				process.env.COOKIE_SECRET_CURRENT,
				process.env.COOKIE_SECRET_PREVIOUS
			],
			httpOnly: true,
			maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
			overwrite: true,
			path: '/',
			sameSite: 'strict',
			secure: true, // set this to false in local (non-HTTPS) development
			signed: true
		},
		onVerifyTokenError: err => {
			console.error(err)
		},
		onTokenRefreshError: err => {
			console.error(err)
		}
	})
}

export default initAuth
