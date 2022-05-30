import { AuthAction } from 'next-firebase-auth'

import { LayoutTypes } from '~/layout'

type Layout = Record<LayoutTypes, string>
type RouteType = Record<string, string>

export const LAYOUT: Layout = {
	DASHBOARD: 'DASHBOARD',
	BASE: 'BASE'
}

export const ROUTES: RouteType = {
	HOME: '/dashboard',
	BANK_INFO: '/dashboard/bank'
}

export const AUTH_CONFIG = {
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	authPageURL: '/'
}
