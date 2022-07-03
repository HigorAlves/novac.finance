import React, { useState } from 'react'

import { Button, LoadingOverlay, Space, Title } from '@mantine/core'
import { useForm } from '@mantine/form'

import { BankInfoForm, BankKeyPersonForm, BankOwnerForm } from '~/components'
import { LAYOUT } from '~/config/constants'
import { useUser } from '~/context'
import { registerBankAccount } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

export default function AddNewBankPage() {
	const { state } = useUser()
	const [loading, setLoading] = useState<boolean>(false)
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
		setLoading(true)
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
		const uid = state?.uid as string

		registerBankAccount(data, uid)
			.then(() => setLoading(false))
			.catch(() => setLoading(false))
	}

	return (
		<section>
			<Title order={2}>New bank</Title>
			<Space h={'lg'} />

			<form
				onSubmit={form.onSubmit(handleSubmit)}
				style={{ position: 'relative' }}
			>
				<LoadingOverlay visible={loading} />
				<BankInfoForm form={form} />
				<BankOwnerForm form={form} />
				<BankKeyPersonForm form={form} />

				<Button color={'dark'} type={'submit'} fullWidth loading={loading}>
					SAVE
				</Button>
			</form>
		</section>
	)
}

AddNewBankPage.layout = LAYOUT.DASHBOARD
