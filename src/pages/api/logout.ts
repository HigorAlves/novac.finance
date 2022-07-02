import { NextApiRequest, NextApiResponse } from 'next'
import { unsetAuthCookies } from 'next-firebase-auth'

import initAuth from '~/helpers/initAuth'

initAuth()

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await unsetAuthCookies(req, res)
	} catch (e) {
		return res.status(500).json({ error: 'Unexpected error.' })
	}
	return res.status(200).json({ success: true })
}

export default logout
