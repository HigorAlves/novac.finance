import React, { useEffect, useState } from 'react'

import { Button, Grid, Group, Space, Title } from '@mantine/core'

import { BankCard } from '~/components'
import { LAYOUT } from '~/config/constants'
import { useUser } from '~/context'
import { getBankAccounts } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

export default function Index() {
	const { state: user } = useUser()
	const [bankAccounts, setBankAccounts] = useState<Array<BankProps> | null>(
		null
	)

	useEffect(() => {
		if (user?.uid) {
			getBankAccounts(user.uid).then(data => setBankAccounts(data))
		}
	}, [user])

	return (
		<section>
			<Title order={2}>Bank Accounts</Title>

			<Space h={'lg'} />
			<Grid>
				{bankAccounts &&
					bankAccounts.map(bank => (
						<Grid.Col key={bank.id} span={6} md={6} sm={12}>
							<BankCard {...bank} />
						</Grid.Col>
					))}
			</Grid>

			<Group grow mt={'xl'} position={'right'}>
				<Button color={'green'} size={'sm'} style={{ maxWidth: 120 }}>
					ADD NEW
				</Button>
			</Group>
		</section>
	)
}

Index.layout = LAYOUT.DASHBOARD
