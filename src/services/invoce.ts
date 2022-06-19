import { getStorage, ref, uploadBytes } from '@firebase/storage'
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	where
} from 'firebase/firestore'

import { Firestore } from '~/services'
import { InvoiceProps } from '~/types/invoice.types'

export async function postInvoice(data: InvoiceProps, uid: string) {
	try {
		const database = collection(Firestore, 'invoices')
		const invoice = { ...data, uid }
		return await addDoc(database, invoice)
	} catch {
		throw Error('Was not possible to save the data.')
	}
}

export async function getInvoices(uid: string) {
	const invoices: Array<InvoiceProps> = []
	const database = collection(Firestore, 'invoices')
	const q = query(database, where('uid', '==', uid))
	const querySnapshot = await getDocs(q)

	querySnapshot.forEach(doc =>
		invoices.push({ id: doc.id, ...doc.data() } as InvoiceProps)
	)

	return invoices
}

export function deleteInvoice(dic: string) {
	const database = collection(Firestore, 'invoices')
	return deleteDoc(doc(database, dic))
}

export async function uploadInvoiceFile(
	binary: ArrayBuffer,
	name: string,
	type: string
) {
	const storage = getStorage()
	const storageRef = ref(storage, `${type}/${name}`)
	const metadata = {
		contentType: 'application/pdf'
	}
	return await uploadBytes(storageRef, binary, metadata)
}
