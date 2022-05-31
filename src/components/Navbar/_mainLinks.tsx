import React from 'react'

import { Group, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineHome, HiOutlineLibrary } from 'react-icons/hi'

import { ROUTES } from '~/config/constants'

import { useStyles } from './mainLinks.style'

interface MainLinkProps {
	icon: React.ReactNode
	label: string
	route: string
}

function MainLink({ icon, label, route }: MainLinkProps) {
	return (
		<Link passHref href={route}>
			<UnstyledButton
				component={'a'}
				sx={theme => ({
					display: 'block',
					marginTop: theme.spacing.md
				})}
			>
				{icon}
			</UnstyledButton>
		</Link>
	)
}

export function MainLinks() {
	const { classes, cx } = useStyles()
	const router = useRouter()

	const data = [
		{
			icon: (
				<HiOutlineHome
					className={cx(classes.icon, {
						[classes.active]: router.pathname === ROUTES.HOME
					})}
				/>
			),
			label: 'Home',
			route: ROUTES.HOME
		},
		{
			icon: (
				<HiOutlineLibrary
					className={cx(classes.icon, {
						[classes.active]: router.pathname === ROUTES.BANK.INFO
					})}
				/>
			),
			label: 'Banking',
			route: ROUTES.BANK.INFO
		}
	]

	return (
		<>
			{data.map(link => (
				<Group
					grow
					align={'center'}
					className={classes.container}
					key={link.label}
				>
					<MainLink {...link} />
				</Group>
			))}
		</>
	)
}
