import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { LAYOUT } from '~/config/constants'
import { UserProvider } from '~/context/AuthContext'
import { Layout, LayoutTypes } from '~/layout'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
	key?: string
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props

	const LAYOUT_KEY = Component.layout || (LAYOUT.BASE as LayoutTypes)

	return (
		<>
			<Head>
				<title>Novac.Pro Finance</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme: 'light' }}
			>
				<UserProvider>
					<Layout type={LAYOUT_KEY}>
						<Component {...pageProps} />
					</Layout>
				</UserProvider>
			</MantineProvider>
		</>
	)
}
