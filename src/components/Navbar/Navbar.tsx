import React, { useState } from 'react'

import { Navbar as Container, Text } from '@mantine/core'

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
			<Container.Section grow>
				<Text>Home</Text>
			</Container.Section>
		</Container>
	)
}
