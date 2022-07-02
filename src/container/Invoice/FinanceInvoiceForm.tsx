import React from 'react'

import { Grid, NumberInput, Title } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

interface FinanceInvoiceFormProps {
	form: UseFormReturnType<any>
}

export function FinanceInvoiceForm({ form }: FinanceInvoiceFormProps) {
	return (
		<Grid align={'center'}>
			<Grid.Col sm={12} mt={'xl'}>
				<Title order={3}>Finance</Title>
			</Grid.Col>

			<Grid.Col md={1} sm={12}>
				<NumberInput
					hideControls
					required
					label={'Hours'}
					placeholder={'Hours'}
					{...form.getInputProps('hoursWorked')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<NumberInput
					hideControls
					required
					label={'Price per hour'}
					icon={'$'}
					precision={2}
					{...form.getInputProps('pricePerHour')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<NumberInput
					label='Price USD'
					hideControls
					required
					icon={'$'}
					precision={2}
					{...form.getInputProps('dollars')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<NumberInput
					label='Price BRL'
					hideControls
					icon={'$'}
					precision={2}
					{...form.getInputProps('reais')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<NumberInput
					label='Transaction fees'
					hideControls
					icon={'R$'}
					precision={2}
					{...form.getInputProps('transactionTaxes')}
				/>
			</Grid.Col>
		</Grid>
	)
}
