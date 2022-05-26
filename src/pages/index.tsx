import { useEffect } from 'react'

import { onAuthStateChanged } from '@firebase/auth'
import { Grid, useMantineTheme } from '@mantine/core'

import { FunctionsCard, LoginForm } from '~/components'
import { useUser } from '~/context'
import { AUTH } from '~/services'

export default function Home() {
	const { dispatch } = useUser()

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
				<FunctionsCard />
			</Grid.Col>
			<Grid.Col span={3} offset={3}>
				<LoginForm />
			</Grid.Col>
		</Grid>
	)
}
