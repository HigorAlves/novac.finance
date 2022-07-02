import React, { useEffect, useState } from 'react'

import { Button, Paper, Table, Title } from '@mantine/core'
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'
import Link from 'next/link'

import { LAYOUT, ROUTES } from '~/config/constants'
import { getInvoices } from '~/services/invoce'
import { InvoiceProps } from '~/types/invoice.types'

function Index() {
	const user = useAuthUser()
	const [invoices, setInvoices] = useState<InvoiceProps[] | null>(null)

	async function loadInvoices() {
		if (user.id) {
			const data = await getInvoices(user.id)
			setInvoices(data)
		}
	}

	useEffect(() => {
		loadInvoices()
	}, [user])

	const ths = (
		<tr>
			<th>Number</th>
			<th>Company</th>
			<th>Time Period</th>
			<th>Hours</th>
			<th>Total $</th>
			<th>Total R$</th>
			<th>Status</th>
		</tr>
	)

	const rows = invoices?.map(invoice => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}
		const startDate = new Intl.DateTimeFormat('en-US', options).format(
			new Date(invoice.timePeriod.start)
		)
		const endDate = new Intl.DateTimeFormat('en-US', options).format(
			new Date(invoice.timePeriod.end)
		)
		const date = `${startDate} - ${endDate}`
		return (
			<tr key={invoice.id}>
				<td>{invoice.number}</td>
				<td>{invoice.company}</td>
				<td>{date}</td>
				<td>{invoice.hoursWorked}</td>
				<td>{invoice.amount.dollars}</td>
				<td>{invoice.amount.reais}</td>
				<td>{invoice.status}</td>
			</tr>
		)
	})

	return (
		<section>
			<Title order={2}>Invoice</Title>
			<Paper mt={'xl'} p={'lg'} mb={'xl'}>
				<Table striped highlightOnHover>
					<thead>{ths}</thead>
					<tbody>{rows}</tbody>
				</Table>
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
