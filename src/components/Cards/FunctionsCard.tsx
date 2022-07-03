import React from 'react'

import { List, Space, Text, ThemeIcon, Title } from '@mantine/core'
import Image from 'next/image'
import { HiCheck } from 'react-icons/hi'

function ListIcon() {
	return (
		<ThemeIcon color={'green'}>
			<HiCheck size={20} />
		</ThemeIcon>
	)
}

function ListItems() {
	const BULLET_POINTS = [
		{ label: 'Invoice Tracker' },
		{ label: 'Bank Information' }
	]

	return (
		<List icon={<ListIcon />}>
			{BULLET_POINTS.map(item => (
				<List.Item key={item.label}>
					<Text weight={'bold'}>{item.label}</Text>
				</List.Item>
			))}
		</List>
	)
}

export function FunctionsCard() {
	return (
		<>
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
			<ListItems />
		</>
	)
}
