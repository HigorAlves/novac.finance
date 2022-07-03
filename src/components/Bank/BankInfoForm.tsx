import React from 'react'

import { Grid, Paper, Select, Textarea, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

interface BankInfoFormProps {
	form: UseFormReturnType<any>
}

export function BankInfoForm({ form }: BankInfoFormProps) {
	return (
		<Paper p={'lg'}>
			<Grid align={'center'}>
				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Bank name'}
						{...form.getInputProps('name')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Website'}
						{...form.getInputProps('website')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Account Number'}
						{...form.getInputProps('accountNumber')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<Select
						required
						label={'Bank Country Code'}
						data={[{ value: 'brazil', label: '🇧🇷 Brazil' }]}
						{...form.getInputProps('countryCode')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Bank Address'}
						{...form.getInputProps('address')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Swift Code'}
						{...form.getInputProps('swiftCode')}
					/>
				</Grid.Col>

				<Grid.Col md={12} sm={12} xs={12}>
					<Textarea
						autosize
						label={'Additional Bank Notes'}
						{...form.getInputProps('additionalNotes')}
					/>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}
