import React from 'react'

import { Button, Paper, Table, Title } from '@mantine/core'
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Link from 'next/link'

import { LAYOUT, ROUTES } from '~/config/constants'

function Index() {
	const ths = (
		<tr>
			<th>Invoice Number</th>
			<th>Company</th>
			<th>Time Period</th>
			<th>Hours</th>
			<th>Total $</th>
			<th>Total R$</th>
			<th>Status</th>
			<th>Invoice PDF</th>
			<th>NF PDF</th>
		</tr>
	)

	const rows = (
		<tr>
			<td>element.position</td>
			<td>element.name</td>
			<td>element.symbol</td>
			<td>element.mass</td>
		</tr>
	)

	return (
		<section>
			<Title order={2}>Invoice</Title>
			<Paper mt={'xl'} p={'lg'} mb={'xl'}>
				<Table striped highlightOnHover>
					<thead>{ths}</thead>
					<tbody>{rows}</tbody>
					<tfoot>{ths}</tfoot>
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
