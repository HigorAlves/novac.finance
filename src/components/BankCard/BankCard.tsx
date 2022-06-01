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
import Link from 'next/link'

import { ROUTES } from '~/config/constants'
import { currencyFormat } from '~/helpers/currencyFormat'
import { deleteBankAccount } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

type BankCardProps = BankProps & {
	reload: () => void
}

export function BankCard(props: BankCardProps) {
	const theme = useMantineTheme()

	function deleteBank() {
		const dic = props.id as string
		deleteBankAccount(dic).then(() => props.reload())
	}

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
					<Link href={props.website} passHref>
						<Button
							component={'a'}
							size={'xs'}
							variant={'subtle'}
							color={'blue'}
							target={'_blank'}
						>
							WEBSITE
						</Button>
					</Link>
					<Link passHref href={`${ROUTES.BANK.EDIT}/${props.id}`}>
						<Button component={'a'} size={'xs'} color={'dark'}>
							EDIT
						</Button>
					</Link>
					<Button size={'xs'} color={'red'} onClick={deleteBank}>
						DELETE
					</Button>
				</Group>
			</Group>
		</Paper>
	)
}
