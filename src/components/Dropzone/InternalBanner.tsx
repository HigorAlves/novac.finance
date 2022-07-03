import React from 'react'

import { Group, MantineTheme, Text } from '@mantine/core'
import { DropzoneStatus } from '@mantine/dropzone'
import { File, Upload } from 'tabler-icons-react'

interface InternalBannerProps {
	status: DropzoneStatus
	theme?: MantineTheme
	name: string
	hasFile: boolean
}

function IconHandler(props: { status: DropzoneStatus; hasFile: boolean }) {
	const { hasFile, status } = props
	if (status.accepted || hasFile) {
		return <File size={80} />
	}

	return <Upload size={80} />
}

export function InternalBanner(props: InternalBannerProps) {
	const { name, status, hasFile } = props
	return (
		<Group position={'center'}>
			<IconHandler status={status} hasFile={hasFile} />
			<div>
				<Text size='xl' inline>
					Drag the {name} PDF here or click to select files
				</Text>
				<Text size='sm' color='dimmed'>
					The file should not exceed 5mb
				</Text>
			</div>
		</Group>
	)
}
