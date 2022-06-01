import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore'

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

export async function getBankAccountById(
	bid: string
): Promise<BankProps | null> {
	const database = collection(Firestore, 'bank')
	const docRef = doc(database, bid)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return docSnap.data() as BankProps
	}

	return null
}

export async function updateBankAccountById(
	bid: string,
	data: BankProps
): Promise<boolean> {
	const database = collection(Firestore, 'bank')
	const docRef = doc(database, bid)
	await updateDoc(docRef, { ...data })
	return true
}

export function deleteBankAccount(dic: string) {
	const database = collection(Firestore, 'bank')
	return deleteDoc(doc(database, dic))
}
