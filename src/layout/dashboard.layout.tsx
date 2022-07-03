import React from 'react'

import { AppShell } from '~/components'

interface DashboardLayoutProps {
	children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
	return <AppShell>{children}</AppShell>
}
