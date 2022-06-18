export interface InvoiceProps {
	id?: string
	number: number
	company: string
	timePeriod: string
	hours: string
	status: 'Submitted' | 'Approved' | 'On Bank' | 'Paid'
	value: {
		dollars: number
		reais: number
	}
	documents: {
		invoice: string
		nf: string
	}
}
