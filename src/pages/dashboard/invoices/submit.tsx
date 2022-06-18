import React, { useEffect, useState } from 'react'

import {
	Button,
	Grid,
	LoadingOverlay,
	NumberInput,
	Paper,
	Select,
	Title
} from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'
import Link from 'next/link'

import { Dropzone } from '~/components'
import { LAYOUT, ROUTES } from '~/config/constants'
import { getBankAccounts } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

function Index() {
	const user = useAuthUser()
	const [banks, setBank] = useState<Array<BankProps | null>>([])
	const [loading, setLoading] = useState<boolean>(true)
	const form = useForm({
		initialValues: {
			number: 0,
			dollars: 3000,
			reais: 20000
		}
	})

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	async function bankState() {
		setLoading(true)
		const data = await getBankAccounts(user.id as string)
		setBank(data)
		setLoading(false)
	}

	useEffect(() => {
		bankState()
	}, [])

	return (
		<section>
			<Title order={2}>Submit Invoice</Title>

			<Paper
				mt={'xl'}
				p={'lg'}
				mb={'xl'}
				shadow={'sm'}
				style={{ position: 'relative' }}
			>
				<LoadingOverlay visible={loading} />
				<form onSubmit={form.onSubmit(values => console.log(values))}>
					<Grid align={'center'}>
						<Grid.Col sm={12}>
							<Title order={3}>About</Title>
						</Grid.Col>
						<Grid.Col md={1} sm={12}>
							<NumberInput
								required
								hideControls
								label={'Number'}
								placeholder={'Invoice ID'}
							/>
						</Grid.Col>
						<Grid.Col md={2} sm={12}>
							<Select
								required
								label='Company'
								placeholder='Pick one'
								data={[
									{ value: 'xteam', label: '👻 X-Team' },
									{ value: 'zipdev', label: '🤯 ZipDev' }
								]}
							/>
						</Grid.Col>
						<Grid.Col md={2} sm={12}>
							<DateRangePicker
								placeholder={'Pick a date'}
								label={'Date range'}
								required
							/>
						</Grid.Col>
						<Grid.Col md={2} sm={12}>
							<Select
								required
								label='Bank'
								placeholder='Pick one'
								// @ts-ignore
								data={(banks as [BankProps]).map((bank: BankProps) => ({
									value: bank.id,
									label: bank.name
								}))}
							/>
						</Grid.Col>

						<Grid.Col sm={12} mt={'xl'}>
							<Title order={3}>Finance</Title>
						</Grid.Col>
						<Grid.Col md={1} sm={12}>
							<NumberInput
								hideControls
								required
								label={'Hours'}
								placeholder={'Hours'}
							/>
						</Grid.Col>
						<Grid.Col md={1} sm={12}>
							<NumberInput
								hideControls
								required
								label={'Price per hour'}
								placeholder={'$40'}
								parser={value => (value as string).replace(/\$\s?|(,*)/g, '')}
								formatter={value =>
									!Number.isNaN(parseFloat(value as string))
										? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
										: '$ '
								}
							/>
						</Grid.Col>
						<Grid.Col md={2} sm={12}>
							<NumberInput
								label='Price USD'
								hideControls
								defaultValue={1000}
								parser={value => (value as string).replace(/\$\s?|(,*)/g, '')}
								formatter={value =>
									!Number.isNaN(parseFloat(value as string))
										? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
										: '$ '
								}
								{...form.getInputProps('dollars')}
							/>
						</Grid.Col>
						<Grid.Col md={2} sm={12}>
							<NumberInput
								label='Price BRL'
								hideControls
								defaultValue={1000}
								parser={value => (value as string).replace(/\$\s?|(,*)/g, '')}
								formatter={value =>
									!Number.isNaN(parseFloat(value as string))
										? `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
										: 'R$ '
								}
								{...form.getInputProps('reais')}
							/>
						</Grid.Col>

						<Grid.Col sm={12} mt={'xl'}>
							<Title order={3}>Documents</Title>
						</Grid.Col>
						<Grid.Col md={6} sm={12}>
							<Dropzone />
						</Grid.Col>
						<Grid.Col md={6} sm={12}>
							<Dropzone />
						</Grid.Col>
					</Grid>
				</form>
			</Paper>

			<Link passHref href={ROUTES.INVOICE.SUBMIT}>
				<Button color={'green'}>Submit Invoice</Button>
			</Link>
		</section>
	)
}

Index.layout = LAYOUT.DASHBOARD

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser()(Index)
