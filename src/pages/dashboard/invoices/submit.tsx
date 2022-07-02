import React, { useEffect, useState } from 'react'

import { Button, LoadingOverlay, Paper, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'
import { useRouter } from 'next/router'

import { COMPANIES, LAYOUT, PAYMENT_STATUS } from '~/config/constants'
import { AboutInvoiceForm, FileDropForm, FinanceInvoiceForm } from '~/container'
import { getBankAccounts } from '~/services/bank/bank'
import { postInvoice, uploadInvoiceFile } from '~/services/invoce'
import { BankProps } from '~/types/bankTypes'
import { FileFormat, InvoiceProps } from '~/types/invoice.types'

interface FormProps {
	bank: string | null
	company: string | null
	dollars: number | null
	hoursWorked: number | null
	number: number | null
	pricePerHour: number | null
	reais: number | null
	status: PAYMENT_STATUS | null
	transactionTaxes: string | null
	timePeriod: [Date | null, Date | null] | null
}

function Index() {
	const user = useAuthUser()
	const router = useRouter()
	const [banks, setBank] = useState<Array<BankProps | null>>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [invoice, setInvoice] = useState<FileFormat>()
	const [nf, setNF] = useState<FileFormat>()
	const form = useForm<FormProps>({
		initialValues: {
			number: null,
			dollars: null,
			company: null,
			bank: null,
			hoursWorked: null,
			pricePerHour: null,
			reais: null,
			timePeriod: null,
			status: null,
			transactionTaxes: null
		}
	})

	function onDropInvoice(files: File[]) {
		const file = files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const binaryStr = reader.result
			setInvoice({
				name: file.name,
				binary: binaryStr,
				type: file.type
			})
		}
		reader.readAsArrayBuffer(file)
	}

	function onDropNF(files: File[]) {
		const file = files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const binaryStr = reader.result
			setNF({
				name: file.name,
				binary: binaryStr,
				type: file.type
			})
		}
		reader.readAsArrayBuffer(file)
	}

	async function loadBankData() {
		setLoading(true)
		if (user.id) {
			const data = await getBankAccounts(user.id as string)
			setBank(data)
			setLoading(false)
		}
	}

	async function uploadFiles() {
		let invoiceURL = null
		let nfURL = null
		if (invoice && invoice.binary) {
			const invoiceData = await uploadInvoiceFile(
				invoice.binary as ArrayBuffer,
				invoice.name,
				'invoice'
			)
			invoiceURL = invoiceData.metadata.fullPath
		}

		if (nf && nf.binary) {
			const nfData = await uploadInvoiceFile(
				nf.binary as ArrayBuffer,
				nf.name,
				'nota-fiscal'
			)
			nfURL = nfData.metadata.fullPath
		}

		return { invoiceURL, nfURL }
	}

	async function onSubmit(values: FormProps) {
		setLoading(true)
		const { invoiceURL, nfURL } = await uploadFiles()
		const data: InvoiceProps = {
			company: values.company as COMPANIES,
			bank: values.bank,
			hoursWorked: values.hoursWorked,
			pricePerHour: values.pricePerHour,
			timePeriod: {
				// @ts-ignore
				start: values.timePeriod[0].getTime(),
				// @ts-ignore
				end: values.timePeriod[1].getTime()
			},
			amount: {
				dollars: values.dollars,
				reais: values.reais
			},
			documents: {
				invoiceURL: invoiceURL,
				notaFiscalURL: nfURL
			},
			taxes: {
				transaction: values.transactionTaxes
			},
			status: values.status,
			number: values.number
		}
		await postInvoice(data, user.id as string)
		setLoading(false)
		router.back()
	}

	useEffect(() => {
		loadBankData()
	}, [user])

	return (
		<section>
			<Title order={2}>Submit Invoice</Title>

			<Paper
				mt={'xl'}
				p={'lg'}
				mb={'xl'}
				shadow={'sm'}
				style={{ position: 'relative' }}
			>
				<LoadingOverlay visible={loading} />
				<form onSubmit={form.onSubmit(onSubmit)}>
					<AboutInvoiceForm form={form} banks={banks as BankProps[]} />
					<FinanceInvoiceForm form={form} />
					<FileDropForm
						hasInvoice={!!invoice}
						hasNF={!!nf}
						setInvoice={onDropInvoice}
						setNF={onDropNF}
					/>

					<Button mt={'xl'} type={'submit'} color={'green'}>
						Submit Invoice
					</Button>
				</form>
			</Paper>
		</section>
	)
}

Index.layout = LAYOUT.DASHBOARD

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser()(Index)
