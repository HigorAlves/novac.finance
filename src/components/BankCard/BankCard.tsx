import React from 'react'

import { Button, Divider, Group, Paper, Title } from '@mantine/core'

interface BankCardProps {
	name: string
	address: string
	holder: string
	agency: string
	account: string
	iban: string
	swiftCode: string
}

export function BankCard(props: BankCardProps) {
	return (
		<Paper p={'lg'} shadow={'xs'}>
			<Title order={3}>{props.name}</Title>
			<Divider mt={'xs'} />

			<Group mt={'xl'} position={'right'}>
				<Button size={'xs'}>Edit</Button>
				<Button size={'xs'} color={'gray'}>
					Disable
				</Button>
				<Button size={'xs'} color={'red'}>
					Remove
				</Button>
			</Group>
		</Paper>
	)
}
