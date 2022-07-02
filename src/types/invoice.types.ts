import { COMPANIES, PAYMENT_STATUS } from '~/config/constants'

export interface InvoiceProps {
	id?: string
	number: number | null
	company: COMPANIES | null
	timePeriod: string | null | Date[]
	bank: string | null
	status: PAYMENT_STATUS | null
	hoursWorked: number | null
	pricePerHour: number | null
	taxes: {
		transaction: number | null | string
	}
	amount: {
		dollars: number | null
		reais: number | null
	}
	documents: {
		invoiceURL: string | null
		notaFiscalURL: string | null
	}
}

export interface FileFormat {
	name: string
	binary: ArrayBuffer | string | null
	type: string
}
