import React from 'react'

import { Group, Text, UnstyledButton } from '@mantine/core'
import { HiOutlineLogout } from 'react-icons/hi'

interface MainLinkProps {
	icon: React.ReactNode
	label: string
}

function MainLink({ icon, label }: MainLinkProps) {
	return (
		<UnstyledButton
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
	)
}

const data = [
	{
		icon: <HiOutlineLogout size={24} color={'red'} />,
		color: 'blue',
		label: 'Home'
	}
]

export function MainLinks() {
	const links = data.map(link => <MainLink {...link} key={link.label} />)
	return <div>{links}</div>
}
