import React from 'react'

import { Avatar, Badge, Group, Text, Title } from '@mantine/core'
import {
	useAuthUser,
	withAuthUser,
	withAuthUserTokenSSR
} from 'next-firebase-auth'

import { LAYOUT } from '~/config/constants'

function Settings() {
	const user = useAuthUser()
	console.log(user)
	const VERIFIED_ACCOUNT = user.emailVerified ? 'Verified' : 'Unverified'

	return (
		<section>
			<Title order={2}>Account Settings</Title>

			<Group mt={'xl'} direction={'column'}>
				<Title order={3}>Details</Title>

				<Group>
					<Avatar src={user.photoURL} size={'xl'} />
					<Group direction={'column'} spacing={2}>
						<Text weight={'bold'}>{user.displayName}</Text>
						<Group>
							<Text>{user.email}</Text>
							<Badge color={'green'}>{VERIFIED_ACCOUNT}</Badge>
						</Group>
						<Group>
							<Text>{user.firebaseUser?.metadata.creationTime}</Text>
						</Group>
					</Group>
				</Group>
			</Group>
		</section>
	)
}

Settings.layout = LAYOUT.DASHBOARD
export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser()(Settings)
