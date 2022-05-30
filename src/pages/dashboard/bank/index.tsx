import React, { useEffect, useState } from 'react'

import { Button, Grid, Group, Loader, Space, Title } from '@mantine/core'
import Link from 'next/link'

import { BankCard } from '~/components'
import { LAYOUT, ROUTES } from '~/config/constants'
import { useUser } from '~/context'
import { getBankAccounts } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

export default function Index() {
	const { state: user } = useUser()
	const [bankAccounts, setBankAccounts] = useState<Array<BankProps> | null>(
		null
	)
	const [loading, setLoading] = useState<boolean>(true)

	function fetchBankAccounts() {
		if (user?.uid) {
			getBankAccounts(user.uid).then(data => setBankAccounts(data))
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchBankAccounts()
	}, [fetchBankAccounts, user])

	return (
		<section>
			<Title order={2}>Bank Accounts</Title>

			<Space h={'lg'} />
			<Grid>
				{bankAccounts && !loading ? (
					bankAccounts.map(bank => (
						<Grid.Col key={bank.id} span={6} md={6} sm={12}>
							<BankCard {...bank} reload={fetchBankAccounts} />
						</Grid.Col>
					))
				) : (
					<Loader color={'red'} />
				)}
			</Grid>

			<Group grow mt={'xl'} position={'right'}>
				<Link passHref href={ROUTES.BANK.ADD}>
					<Button color={'green'} size={'sm'} style={{ maxWidth: 120 }}>
						ADD NEW
					</Button>
				</Link>
			</Group>
		</section>
	)
}

Index.layout = LAYOUT.DASHBOARD
