import React from 'react'

import {
	Button,
	Divider,
	Group,
	Paper,
	Text,
	Title,
	useMantineTheme
} from '@mantine/core'

import { currencyFormat } from '~/helpers/currencyFormat'
import { BankProps } from '~/types/bankTypes'

export function BankCard(props: BankProps) {
	const theme = useMantineTheme()

	return (
		<Paper p={'lg'} shadow={'xs'}>
			<Title order={3}>{props.name}</Title>
			<Divider mt={'xs'} color={theme.colors.red[1]} />

			<Group mt={'xl'} grow>
				<Group position={'left'}>
					<Text size={'xs'}>On Account</Text>
					<Text size={'sm'} weight={'bold'}>
						{currencyFormat(props.value)}
					</Text>
				</Group>

				<Group position={'right'}>
					<Button size={'xs'} variant={'subtle'} color={'blue'}>
						WEBSITE
					</Button>
					<Button size={'xs'} color={'dark'}>
						EDIT
					</Button>
					<Button size={'xs'} color={'red'}>
						DELETE
					</Button>
				</Group>
			</Group>
		</Paper>
	)
}
