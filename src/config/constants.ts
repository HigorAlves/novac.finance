import { LayoutTypes } from '~/layout'

type Layout = Record<LayoutTypes, string>
type RouteType = Record<string, string>

export const LAYOUT: Layout = {
	DASHBOARD: 'DASHBOARD',
	BASE: 'BASE'
}

export const ROUTES: RouteType = {
	BANK_INFO: '/dashboard/bank'
}
