import React, { useState } from 'react'

import {
	ActionIcon,
	Avatar,
	Divider,
	Group,
	Header as Container,
	Indicator,
	Menu
} from '@mantine/core'
import { GrNotification } from 'react-icons/gr'

import { useUser } from '~/context'
import { GoogleAuth } from '~/services'

export function Header() {
	const { state } = useUser()
	const [opened, setOpened] = useState<boolean>(false)

	return (
		<Container height={80} p='md' style={{ border: 0 }}>
			<Group position={'right'} spacing={30} align={'center'}>
				<Indicator inline color={'red'} style={{ marginTop: 5 }}>
					<ActionIcon color={'gray'}>
						<GrNotification size={18} />
					</ActionIcon>
				</Indicator>

				<Menu
					control={
						<Avatar onClick={() => setOpened(!opened)} src={state?.photoURL} />
					}
				>
					<Menu.Item>Profile</Menu.Item>
					<Menu.Item>Edit profile</Menu.Item>
					<Divider />
					<Menu.Item>Account settings</Menu.Item>
					<Menu.Item onClick={GoogleAuth.logout} color={'red'}>
						Logout
					</Menu.Item>
				</Menu>
				<Divider />
			</Group>
		</Container>
	)
}
