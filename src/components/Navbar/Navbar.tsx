import React, { useState } from 'react'

import { Navbar as Container } from '@mantine/core'

import { MainLinks } from '~/components/Navbar/_mainLinks'

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
			<Container.Section grow mt='md'>
				<MainLinks />
			</Container.Section>
		</Container>
	)
}
