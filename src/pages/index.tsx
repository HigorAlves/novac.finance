import { useEffect } from 'react'

import { onAuthStateChanged } from '@firebase/auth'
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

import { useUser } from '~/context'
import { AUTH, GoogleAuth } from '~/services'

export default function Home() {
	const { dispatch } = useUser()

	useEffect(() => {
		onAuthStateChanged(AUTH, user => {
			if (user) {
				dispatch(user)
			}
		})
	}, [dispatch])

	return (
		<Container size={'xs'}>
			<Title order={1}>Sign up</Title>
			<Text weight={'bold'}>Sign up with Open account</Text>
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
				<Button variant={'outline'} color={'dark'} size={'md'}>
					Apple
				</Button>
			</Group>

			<Space h={'xl'} />
			<Divider />
			<Space h={'xl'} />

			<Text weight={'bold'}>Or continue with email address</Text>
			<Space h={'md'} />
			<TextInput placeholder={'Your email'} />
			<Space h={'sm'} />
			<Button color={'blue'} fullWidth>
				Continue
			</Button>
		</Container>
	)
}
