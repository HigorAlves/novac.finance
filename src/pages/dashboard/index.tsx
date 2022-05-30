import React from 'react'

import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'

import { AUTH_CONFIG, LAYOUT } from '~/config/constants'

function Index() {
	return <div>SOMETHING INSIDE HERE</div>
}

Index.layout = LAYOUT.DASHBOARD

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser(AUTH_CONFIG)(Index)
