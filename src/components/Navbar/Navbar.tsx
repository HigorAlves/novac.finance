import React, { useState } from 'react'

import { Group, Navbar as Container, Text } from '@mantine/core'

import { HomeIcon } from '~/assets/lottie'

export function Navbar() {
	const [opened, setOpened] = useState<boolean>(false)
	return (
		<Container
			hiddenBreakpoint={'sm'}
			width={{ sm: 200, lg: 300 }}
			height={'100vh'}
			p='xs'
			hidden={!opened}
			style={{ border: 0 }}
		>
			<Group spacing={'xs'} position={'left'}>
				<HomeIcon />
				<Text>Home</Text>
			</Group>
		</Container>
	)
}
