import { LayoutTypes } from '~/layout'

type Layout = Record<LayoutTypes, string>

export const LAYOUT: Layout = {
	DASHBOARD: 'DASHBOARD',
	BASE: 'BASE'
}
