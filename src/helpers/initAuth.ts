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
		firebaseAdminInitConfig: {
			credential: {
				projectId: 'novac-pro',
				clientEmail:
					'firebase-adminsdk-ommob@novac-pro.iam.gserviceaccount.com',
				privateKey: process.env.FIREBASE_PRIVATE_KEY as string
			},
			databaseURL: 'https://novac-pro.firebaseio.com'
		},
		firebaseClientInitConfig: {
			apiKey: process.env.NEXT_PUBLIC_APIKEY as string,
			authDomain: process.env.AUTHDOMAIN,
			projectId: process.env.PROJECTID,
			databaseURL: 'https://novac-pro.firebaseio.com'
		},
		cookies: {
			name: 'NovacPro',
			keys: [
				process.env.COOKIE_SECRET_CURRENT,
				process.env.COOKIE_SECRET_PREVIOUS
			],
			httpOnly: true,
			maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
			overwrite: true,
			path: '/',
			sameSite: 'strict',
			secure: true,
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
