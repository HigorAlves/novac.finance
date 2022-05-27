export interface OwnerProps {
	name: string
	street: string
	city: string
	zipCode: number
	country: string
}

export interface BankKeyPersonProps {
	name: string
	phone: number
	email: string
	country: string
}

export interface BankProps {
	id?: string
	name: string
	website: string
	value: number
	accountNumber: string
	countryCode: string
	address: string
	swiftCode: string
	additionalNotes: string
	owner: OwnerProps
	keyPerson: BankKeyPersonProps
}
