import React from 'react'

import { Group, Tooltip, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { RevenueIcon } from '~/assets/icons'
import { NewsfeedIcon } from '~/assets/icons/Newsfeed_Icon'
import { ROUTES } from '~/config/constants'

import { useStyles } from './mainLinks.style'

interface MainLinkProps {
	icon: React.ReactNode
	label: string
	route: string
}

function MainLink({ icon, label, route }: MainLinkProps) {
	return (
		<Tooltip label={label} position='right' withArrow>
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
		</Tooltip>
	)
}

export function MainLinks() {
	const { classes, cx } = useStyles()
	const router = useRouter()

	const data = [
		{
			label: 'Newsfeed',
			route: ROUTES.HOME,
			icon: (
				<NewsfeedIcon
					className={cx(classes.icon, {
						[classes.active]: router.pathname === ROUTES.HOME
					})}
				/>
			)
		},
		{
			icon: (
				<RevenueIcon
					className={cx(classes.icon, {
						[classes.active]: router.pathname === ROUTES.INVOICE.INFO
					})}
				/>
			),
			label: 'Invoice',
			route: ROUTES.INVOICE.INFO
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
