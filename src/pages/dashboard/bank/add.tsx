import React from 'react'

import {
	Button,
	Grid,
	Paper,
	Select,
	Space,
	Textarea,
	TextInput,
	Title
} from '@mantine/core'
import { useForm } from '@mantine/form'

import { LAYOUT } from '~/config/constants'
import { BankProps } from '~/types/bankTypes'

export default function AddNewBankPage() {
	const form = useForm({
		initialValues: {
			name: '',
			website: '',
			value: 0,
			accountNumber: '',
			countryCode: '',
			address: '',
			swiftCode: '',
			additionalNotes: '',
			ownerName: '',
			ownerStreet: '',
			ownerCity: '',
			ownerZipCode: 0,
			ownerCountry: '',
			keyPersonName: '',
			keyPersonPhone: '',
			keyPersonEmail: '',
			keyPersonCountry: ''
		}
	})

	function handleSubmit(values: typeof form.values) {
		const data: BankProps = {
			name: values.name,
			website: values.website,
			value: values.value,
			accountNumber: values.accountNumber,
			countryCode: values.countryCode,
			address: values.address,
			swiftCode: values.swiftCode,
			additionalNotes: values.additionalNotes,
			keyPerson: {
				name: values.keyPersonName,
				country: values.keyPersonCountry,
				email: values.keyPersonEmail,
				phone: parseInt(values.keyPersonPhone)
			},
			owner: {
				name: values.ownerName,
				street: values.ownerStreet,
				city: values.ownerCity,
				zipCode: values.ownerZipCode,
				country: values.ownerCountry
			}
		}

		console.log(data)
	}

	return (
		<section>
			<Title order={2}>New bank</Title>
			<Space h={'lg'} />

			<form onSubmit={form.onSubmit(handleSubmit)}>
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

				<Button color={'dark'} type={'submit'} fullWidth>
					SAVE
				</Button>
			</form>
		</section>
	)
}

AddNewBankPage.layout = LAYOUT.DASHBOARD
