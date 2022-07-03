import React from 'react'

import { Grid, Title } from '@mantine/core'

import { Dropzone } from '~/components'

interface FileDropFormProps {
	hasInvoice: boolean
	hasNF: boolean
	setInvoice: (files: File[]) => void
	setNF: (files: File[]) => void
}

export function FileDropForm({
	setInvoice,
	hasInvoice,
	hasNF,
	setNF
}: FileDropFormProps) {
	return (
		<Grid align={'center'}>
			<Grid.Col sm={12} mt={'xl'}>
				<Title order={3}>Documents</Title>
			</Grid.Col>
			<Grid.Col md={6} sm={12}>
				<Dropzone name={'Invoice'} onDrop={setInvoice} hasFile={hasInvoice} />
			</Grid.Col>
			<Grid.Col md={6} sm={12}>
				<Dropzone name={'Nota Fiscal'} onDrop={setNF} hasFile={hasNF} />
			</Grid.Col>
		</Grid>
	)
}
