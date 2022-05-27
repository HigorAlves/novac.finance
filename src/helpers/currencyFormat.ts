export function currencyFormat(value: number): string {
	const CURRENCY_PROPS = {
		style: 'currency',
		currency: 'USD'
	}

	return new Intl.NumberFormat('en-US', CURRENCY_PROPS).format(value)
}
