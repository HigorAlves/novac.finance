import React, { ReactNode } from 'react'

import { DashboardLayout } from '~/layout/dashboard.layout'

export type LayoutTypes = 'dashboard' | 'normal'

interface Props {
	children: ReactNode
	type: LayoutTypes
}

export function Layout({ children, type }: Props) {
	function layoutChoice(type: LayoutTypes) {
		const layoutList = {
			dashboard: <DashboardLayout>{children}</DashboardLayout>,
			normal: <div>{children}</div>
		}

		return layoutList[type] || <div>{children}</div>
	}

	return layoutChoice(type)
}
