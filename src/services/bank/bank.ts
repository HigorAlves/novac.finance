import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

import { Firestore } from '~/services'
import { BankProps } from '~/types/bankTypes'

export async function registerBankAccount(data: BankProps, uid: string) {
	try {
		const database = collection(Firestore, 'bank')
		const bank = { ...data, uid }
		return await addDoc(database, bank)
	} catch {
		throw Error('Was not possible to save the data.')
	}
}

export async function getBankAccounts(uid: string) {
	const bankAccounts: Array<BankProps> = []
	const database = collection(Firestore, 'bank')
	const q = query(database, where('uid', '==', uid))
	const querySnapshot = await getDocs(q)

	querySnapshot.forEach(doc =>
		bankAccounts.push({ id: doc.id, ...doc.data() } as BankProps)
	)

	return bankAccounts
}
