import React from 'react'

import { Group, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { HiOutlineHome, HiOutlineLibrary } from 'react-icons/hi'

import { ROUTES } from '~/config/constants'

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
					width: '100%',
					padding: theme.spacing.xs,
					borderRadius: theme.radius.sm,
					color:
						theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

					'&:hover': {
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[6]
								: theme.colors.gray[0]
					}
				})}
			>
				<Group>
					{icon}
					<Text>{label}</Text>
				</Group>
			</UnstyledButton>
		</Link>
	)
}

const data = [
	{
		icon: <HiOutlineHome size={24} color={'red'} />,
		label: 'Home',
		route: ROUTES.HOME
	},
	{
		icon: <HiOutlineLibrary size={24} color={'red'} />,
		label: 'Banking',
		route: ROUTES.BANK_INFO
	}
]

export function MainLinks() {
	return data.map(link => <MainLink {...link} key={link.label} />)
}
