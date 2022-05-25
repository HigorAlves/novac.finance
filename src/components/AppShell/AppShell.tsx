import React from 'react'

import { AppShell as Container } from '@mantine/core'

import { Header, Navbar } from '~/components'

export function AppShell() {
	return (
		<Container
			fixed
			padding='md'
			navbarOffsetBreakpoint={'sm'}
			asideOffsetBreakpoint={'sm'}
			navbar={<Navbar />}
			header={<Header />}
			styles={theme => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0]
				}
			})}
		>
			{/* Your application here */}
		</Container>
	)
}
