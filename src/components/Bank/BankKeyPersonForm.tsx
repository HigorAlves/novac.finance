import React from 'react'

import { Grid, Paper, Select, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

interface BankKeyPersonFormProps {
	form: UseFormReturnType<any>
}

export function BankKeyPersonForm({ form }: BankKeyPersonFormProps) {
	return (
		<Paper p={'lg'} mt={'xl'} mb={'xl'}>
			<Grid align={'center'}>
				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Key Person Name'}
						{...form.getInputProps('keyPersonName')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Key Person Email'}
						{...form.getInputProps('keyPersonEmail')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Key Person Phone'}
						{...form.getInputProps('keyPersonPhone')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<Select
						required
						label={'Key Person Country'}
						data={[{ value: 'brazil', label: '🇧🇷 Brazil' }]}
						{...form.getInputProps('keyPersonCountry')}
					/>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}
