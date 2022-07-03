import { ComponentType } from 'react'

import { AuthAction, PageURL } from 'next-firebase-auth'

import { LayoutTypes } from '~/layout'

type Layout = Record<LayoutTypes, string>
type AuthConfig = {
	whenAuthed?: AuthAction.RENDER | AuthAction.REDIRECT_TO_APP
	whenAuthedBeforeRedirect?:
		| AuthAction.RENDER
		| AuthAction.SHOW_LOADER
		| AuthAction.RETURN_NULL
	whenUnauthedBeforeInit?:
		| AuthAction.RENDER
		| AuthAction.REDIRECT_TO_LOGIN
		| AuthAction.SHOW_LOADER
		| AuthAction.RETURN_NULL
	whenUnauthedAfterInit?: AuthAction.RENDER | AuthAction.REDIRECT_TO_LOGIN
	appPageURL?: PageURL
	authPageURL?: PageURL
	LoaderComponent?: ComponentType | null
}
export const LAYOUT: Layout = {
	DASHBOARD: 'DASHBOARD',
	BASE: 'BASE'
}

export const ROUTES = {
	HOME: '/dashboard',
	BADGES: '/dashboard/badges',
	QUESTS: '/dashboard/quests',
	BANK: {
		INFO: '/dashboard/bank',
		ADD: '/dashboard/bank/add',
		EDIT: '/dashboard/bank/edit'
	},
	USER: {
		SETTINGS: '/dashboard/user/settings'
	},
	INVOICE: {
		INFO: '/dashboard/invoices',
		SUBMIT: '/dashboard/invoices/submit'
	}
}

export enum PAYMENT_STATUS {
	SUBMITTED = 'SUBMITTED',
	APPROVED = 'APPROVED',
	ON_BANK = 'ON_BANK',
	PAID = 'PAID'
}

export enum COMPANIES {
	XTEAM = 'XTEAM',
	ZIPDEV = 'ZIPDEV'
}

export const AUTH_CONFIG: AuthConfig = {
	whenAuthed: AuthAction.REDIRECT_TO_APP,
	whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
	authPageURL: '/dashboard'
}
