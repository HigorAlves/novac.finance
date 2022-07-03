import { Grid, useMantineTheme } from '@mantine/core'

import { FunctionsCard, LoginForm } from '~/components'

export default function Home() {
	const theme = useMantineTheme()

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
