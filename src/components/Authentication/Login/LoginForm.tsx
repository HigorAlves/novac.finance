import React, { useEffect } from 'react'

import {
	Button,
	Container,
	Divider,
	Group,
	Space,
	Text,
	TextInput,
	Title
} from '@mantine/core'
import { useRouter } from 'next/router'

import { useUserStatus } from '~/hooks/useUserStatus'
import { GoogleAuth } from '~/services'

export function LoginForm() {
	const router = useRouter()
	const user = useUserStatus()

	useEffect(() => {
		if (user) {
			router.push('/dashboard')
		}
	}, [user])
	return (
		<Container size={'xs'}>
			<Title order={1}>Sign up</Title>
			<Text weight={'bold'}>Sign up with social account</Text>
			<Space h={'xl'} />
			<Group>
				<Button
					variant={'outline'}
					color={'dark'}
					size={'md'}
					onClick={GoogleAuth.login}
				>
					Google
				</Button>
			</Group>

			<Space h={'xl'} />
			<Divider />
			<Space h={'xl'} />

			<Text size={'sm'} color={'gray'} weight={'bold'}>
				Or continue with email address
			</Text>
			<Space h={'md'} />
			<TextInput placeholder={'Your email'} disabled />
			<Space h={'sm'} />
			<Button color={'red'} fullWidth disabled>
				Continue
			</Button>
		</Container>
	)
}
