import React from 'react'

import { Button, Grid, Group, Space, Title } from '@mantine/core'

import { BankCard } from '~/components'
import { LAYOUT } from '~/config/constants'

export default function Index() {
	return (
		<section>
			<Title order={2}>Bank Accounts</Title>

			<Space h={'lg'} />
			<Grid>
				<Grid.Col span={6} md={6} sm={12}>
					<BankCard name={'XP Inc.'} />
				</Grid.Col>
				<Grid.Col span={6} md={6} sm={12}>
					<BankCard name={'Travelex'} />
				</Grid.Col>
				<Grid.Col span={6} md={6} sm={12}>
					<BankCard name={'Husky'} />
				</Grid.Col>
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
