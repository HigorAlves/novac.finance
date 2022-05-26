import React, { ReactNode } from 'react'

import { DashboardLayout } from '~/layout/dashboard.layout'

export type LayoutTypes = 'DASHBOARD' | 'BASE'

interface Props {
	children: ReactNode
	type: LayoutTypes
}

export function Layout({ children, type }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			DASHBOARD: <DashboardLayout>{children}</DashboardLayout>,
			BASE: <div>{children}</div>
		}

		return layoutList[type] || <div>{children}</div>
	}

	return layoutChoice(type)
}
