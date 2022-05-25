import React, { useState } from 'react'

import {
	ActionIcon,
	Avatar,
	Divider,
	Group,
	Header as Container,
	Indicator,
	Menu,
	useMantineTheme
} from '@mantine/core'
import Image from 'next/image'
import {
	HiFingerPrint,
	HiOutlineBell,
	HiOutlineLibrary,
	HiOutlineLogout,
	HiOutlineUser
} from 'react-icons/hi'

import { useUser } from '~/context'
import { GoogleAuth } from '~/services'

export function Header() {
	const { state } = useUser()
	const [opened, setOpened] = useState<boolean>(false)
	const theme = useMantineTheme()
	const DARK_LOGO = '/assets/images/logo-dark.png'
	const LIGHT_LOGO = '/assets/images/logo-light.png'

	return (
		<Container height={80} p='md' style={{ border: 0 }}>
			<Group grow>
				<Group position={'left'}>
					<Image
						src={DARK_LOGO}
						width={40}
						height={40}
						alt={'Novac Pro Logo'}
					/>
				</Group>
				<Group position={'right'} spacing={30} align={'center'}>
					<Indicator inline color={'red'} style={{ marginTop: 5 }}>
						<ActionIcon color={'gray'}>
							<HiOutlineBell size={24} />
						</ActionIcon>
					</Indicator>

					<Menu
						size={'lg'}
						control={
							<Avatar
								onClick={() => setOpened(!opened)}
								src={state?.photoURL}
							/>
						}
					>
						<Menu.Item
							icon={<HiOutlineUser color={theme.colors.red[6]} size={18} />}
						>
							Profile
						</Menu.Item>
						<Menu.Item
							icon={<HiOutlineLibrary color={theme.colors.red[6]} size={18} />}
						>
							Banking Information
						</Menu.Item>
						<Divider />
						<Menu.Item
							icon={<HiFingerPrint color={theme.colors.red[6]} size={18} />}
						>
							Account settings
						</Menu.Item>
						<Menu.Item
							icon={<HiOutlineLogout color={theme.colors.red[6]} size={18} />}
							onClick={GoogleAuth.logout}
							color={'red'}
						>
							Logout
						</Menu.Item>
					</Menu>
					<Divider />
				</Group>
			</Group>
		</Container>
	)
}
