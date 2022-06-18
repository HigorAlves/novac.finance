import React from 'react'

import { Button, Grid, NumberInput, Paper, Select, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Link from 'next/link'

import { LAYOUT, ROUTES } from '~/config/constants'

function Index() {
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
	const firstPeriod = `First Half - ${
		monthNames[new Date().getMonth()]
	} ${new Date().getFullYear()}`
	const secondPeriod = `Second Half - ${
		monthNames[new Date().getMonth()]
	} ${new Date().getFullYear()}`

	return (
		<section>
			<Title order={2}>Submit Invoice</Title>
			<Paper mt={'xl'} p={'lg'} mb={'xl'} shadow={'sm'}>
				<form onSubmit={form.onSubmit(values => console.log(values))}>
					<Grid align={'center'}>
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
							<Select
								required
								label='Date Range'
								placeholder='Pick one'
								data={[
									{ value: firstPeriod, label: firstPeriod },
									{ value: secondPeriod, label: secondPeriod }
								]}
							/>
						</Grid.Col>
						<Grid.Col md={1} sm={12}>
							<NumberInput
								hideControls
								required
								label={'Hours'}
								placeholder={'Hours'}
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
