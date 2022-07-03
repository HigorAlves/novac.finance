import React from 'react'

import { Title } from '@mantine/core'
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'

import { LAYOUT } from '~/config/constants'

function Index() {
	return (
		<section>
			<Title order={2}>Newsfeed</Title>
		</section>
	)
}

Index.layout = LAYOUT.DASHBOARD

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser()(Index)
