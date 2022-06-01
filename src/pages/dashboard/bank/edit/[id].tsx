import React, { useState } from 'react'

import { Button, LoadingOverlay, Space, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'

import { BankInfoForm, BankKeyPersonForm, BankOwnerForm } from '~/components'
import { LAYOUT } from '~/config/constants'
import { bankFormConverter } from '~/helpers/bankFormConverter'
import { getBankAccountById, updateBankAccountById } from '~/services/bank/bank'
import { BankProps } from '~/types/bankTypes'

function EditBankPage(props: BankProps) {
	const [loading, setLoading] = useState<boolean>(false)
	const form = useForm({
		initialValues: {
			...props,
			ownerName: props.owner.name,
			ownerStreet: props.owner.street,
			ownerCity: props.owner.street,
			ownerZipCode: props.owner.zipCode,
			ownerCountry: props.owner.country,
			keyPersonName: props.keyPerson.name,
			keyPersonPhone: props.keyPerson.phone,
			keyPersonEmail: props.keyPerson.email,
			keyPersonCountry: props.keyPerson.country
		}
	})

	function handleSubmit(values: typeof form.values) {
		setLoading(true)
		const data = bankFormConverter(values as any)

		updateBankAccountById(props.id as string, data)
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

EditBankPage.layout = LAYOUT.DASHBOARD
export const getServerSideProps = withAuthUserTokenSSR()(async ({ params }) => {
	const { id } = params
	const data = await getBankAccountById(id)

	return {
		props: {
			...data
		}
	}
})

export default withAuthUser()(EditBankPage as any)
