import { useEffect } from 'react'

import { onAuthStateChanged } from '@firebase/auth'
import {
	Button,
	Container,
	Divider,
	Grid,
	Group,
	List,
	Space,
	Text,
	TextInput,
	ThemeIcon,
	Title,
	useMantineTheme
} from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HiCheck } from 'react-icons/hi'

import { useUser } from '~/context'
import { AUTH, GoogleAuth } from '~/services'

export default function Home() {
	const { dispatch } = useUser()
	const router = useRouter()
	const theme = useMantineTheme()

	useEffect(() => {
		onAuthStateChanged(AUTH, user => {
			if (user) {
				dispatch(user)
			}
		})
	}, [dispatch])

	return (
		<Grid align={'center'} style={{ minHeight: '100vh' }}>
			<Grid.Col
				span={3}
				style={{
					background: theme.colors.gray[1],
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<Image
					src={'/assets/images/login-pic.png'}
					alt={'Mountains in a Square'}
					width={180}
					height={180}
					objectFit={'contain'}
					objectPosition={'center'}
				/>
				<Space h={'xl'} />
				<Title order={1}>Novac.Pro - Finance</Title>
				<Space h={'xl'} />
				<List
					icon={
						<ThemeIcon color={'green'}>
							<HiCheck size={20} />
						</ThemeIcon>
					}
				>
					<List.Item>
						<Text weight={'bold'}>Invoice Tracker</Text>
					</List.Item>
				</List>
			</Grid.Col>
			<Grid.Col span={3} offset={3}>
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
					<TextInput placeholder={'Your email'} />
					<Space h={'sm'} />
					<Button color={'red'} fullWidth>
						Continue
					</Button>
				</Container>
			</Grid.Col>
		</Grid>
	)
}
