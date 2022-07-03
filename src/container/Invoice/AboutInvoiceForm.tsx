import React from 'react'

import { Grid, NumberInput, Select, Title } from '@mantine/core'
import { DateRangePicker } from '@mantine/dates'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

import { COMPANIES, PAYMENT_STATUS } from '~/config/constants'
import { BankProps } from '~/types/bankTypes'

interface AboutInvoiceFormProps {
	form: UseFormReturnType<any>
	banks: BankProps[]
}

export function AboutInvoiceForm({ form, banks }: AboutInvoiceFormProps) {
	return (
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
					{...form.getInputProps('number')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<Select
					required
					label='Company'
					placeholder='Pick one'
					data={[
						{ value: COMPANIES.XTEAM, label: '👻 X-Team' },
						{ value: COMPANIES.ZIPDEV, label: '🤯 ZipDev' }
					]}
					{...form.getInputProps('company')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<DateRangePicker
					placeholder={'Pick a date'}
					label={'Date range'}
					required
					{...form.getInputProps('timePeriod')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<Select
					label='Bank'
					placeholder='Pick one'
					// required
					data={banks.map(bank => ({
						value: bank.id as string,
						label: bank.name
					}))}
					{...form.getInputProps('bank')}
				/>
			</Grid.Col>
			<Grid.Col md={2} sm={12}>
				<Select
					required
					label='Status'
					placeholder='Pick one'
					data={[
						{ value: PAYMENT_STATUS.SUBMITTED, label: '📥 Submitted' },
						{ value: PAYMENT_STATUS.APPROVED, label: '✅ Approved' },
						{ value: PAYMENT_STATUS.ON_BANK, label: '⛳️ On Bank' },
						{ value: PAYMENT_STATUS.PAID, label: '💰 Paid' }
					]}
					{...form.getInputProps('status')}
				/>
			</Grid.Col>
		</Grid>
	)
}
