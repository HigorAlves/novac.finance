import React, { useState } from 'react'

import { Navbar as Container } from '@mantine/core'

import { MainLinks } from '~/components/Navbar/_mainLinks'

export function Navbar() {
	const [opened, setOpened] = useState<boolean>(false)

	return (
		<Container
			hiddenBreakpoint={'sm'}
			width={{ sm: 80, lg: 80 }}
			height={'100vh'}
			hidden={!opened}
		>
			<Container.Section grow>
				<MainLinks />
			</Container.Section>
		</Container>
	)
}
