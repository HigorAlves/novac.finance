import { BankProps } from '~/types/bankTypes'

interface FormBankProps {
	name: string
	website: string
	value: any
	accountNumber: any
	countryCode: any
	address: any
	swiftCode: any
	additionalNotes: any
	keyPersonName: any
	keyPersonCountry: any
	keyPersonEmail: any
	keyPersonPhone: string
	ownerName: any
	ownerStreet: any
	ownerCity: any
	ownerZipCode: any
	ownerCountry: any
}

export function bankFormConverter(data: FormBankProps): BankProps {
	return {
		name: data.name,
		website: data.website,
		value: data.value,
		accountNumber: data.accountNumber,
		countryCode: data.countryCode,
		address: data.address,
		swiftCode: data.swiftCode,
		additionalNotes: data.additionalNotes,
		keyPerson: {
			name: data.keyPersonName,
			country: data.keyPersonCountry,
			email: data.keyPersonEmail,
			phone: parseInt(data.keyPersonPhone)
		},
		owner: {
			name: data.ownerName,
			street: data.ownerStreet,
			city: data.ownerCity,
			zipCode: data.ownerZipCode,
			country: data.ownerCountry
		}
	}
}
