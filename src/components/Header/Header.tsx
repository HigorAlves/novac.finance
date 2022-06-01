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
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	HiFingerPrint,
	HiOutlineLibrary,
	HiOutlineLogout,
	HiOutlineUser
} from 'react-icons/hi'

import { NotificationIcon } from '~/assets/icons'
import { ROUTES } from '~/config/constants'
import { useUserStatus } from '~/hooks/useUserStatus'
import { GoogleAuth } from '~/services'

export function Header() {
	const user = useUserStatus()
	// TODO: use link component instead of router
	const router = useRouter()
	const [opened, setOpened] = useState<boolean>(false)
	const theme = useMantineTheme()
	const DARK_LOGO = '/assets/images/logo-dark.png'
	const LIGHT_LOGO = '/assets/images/logo-light.png'

	return (
		<Container
			height={60}
			p='md'
			style={{
				border: 0,
				background: theme.colors.red[6],
				padding: 9,
				paddingLeft: 20
			}}
		>
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
					<Indicator inline color={'white'}>
						<ActionIcon color={'dark'} variant={'transparent'}>
							<NotificationIcon />
						</ActionIcon>
					</Indicator>

					<Menu
						size={'lg'}
						control={
							<Avatar onClick={() => setOpened(!opened)} src={user?.photoURL} />
						}
					>
						<Menu.Item
							icon={<HiOutlineUser color={theme.colors.red[6]} size={18} />}
						>
							Profile
						</Menu.Item>
						<Menu.Item
							onClick={() => router.push(ROUTES.BANK.INFO)}
							icon={<HiOutlineLibrary color={theme.colors.red[6]} size={18} />}
						>
							Banking Information
						</Menu.Item>
						<Divider />
						<Link passHref href={ROUTES.USER.SETTINGS}>
							<Menu.Item
								icon={<HiFingerPrint color={theme.colors.red[6]} size={18} />}
							>
								Account settings
							</Menu.Item>
						</Link>
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
