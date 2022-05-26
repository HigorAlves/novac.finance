import React from 'react'

import { Grid, Space, Title } from '@mantine/core'

import { BankCard } from '~/components'
import { LAYOUT } from '~/config/constants'

export default function Bank() {
	return (
		<section>
			<Title order={2}>Bank Account Information</Title>

			<Space h={'lg'} />
			<Grid>
				<Grid.Col span={6} md={6} sm={12}>
					<BankCard bankName={'XP Inc,'} />
				</Grid.Col>
			</Grid>
		</section>
	)
}

Bank.layout = LAYOUT.DASHBOARD
