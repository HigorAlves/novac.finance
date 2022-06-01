import React from 'react'

import { Grid, Paper, Select, TextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form/lib/use-form'

interface BankOwnerFormProps {
	form: UseFormReturnType<any>
}

export function BankOwnerForm({ form }: BankOwnerFormProps) {
	return (
		<Paper p={'lg'} mt={'xl'}>
			<Grid align={'center'}>
				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Account Owner Name'}
						{...form.getInputProps('ownerName')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Account Owner Street'}
						{...form.getInputProps('ownerStreet')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Account Owner City'}
						{...form.getInputProps('ownerCity')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<TextInput
						required
						label={'Account Owner ZipCode'}
						{...form.getInputProps('ownerZipCode')}
					/>
				</Grid.Col>

				<Grid.Col md={4} sm={12} xs={12}>
					<Select
						required
						label={'Account Owner Country'}
						data={[{ value: 'brazil', label: '🇧🇷 Brazil' }]}
						{...form.getInputProps('ownerCountry')}
					/>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}
