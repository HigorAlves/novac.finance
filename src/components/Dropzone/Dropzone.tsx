import { Dispatch, SetStateAction } from 'react'

import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core'
import {
	Dropzone as Component,
	DropzoneStatus,
	PDF_MIME_TYPE
} from '@mantine/dropzone'
import { File, Icon as TablerIcon, Upload, X } from 'tabler-icons-react'

import { FileFormat } from '~/types/invoice.types'

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
	return status.accepted
		? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
		: status.rejected
		? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
		: theme.colorScheme === 'dark'
		? theme.colors.dark[0]
		: theme.colors.gray[7]
}

function ImageUploadIcon({
	status,
	...props
}: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
	if (status.accepted) {
		return <Upload {...props} />
	}

	if (status.rejected) {
		return <X {...props} />
	}

	return <File {...props} />
}

export const dropzoneChildren = (
	status: DropzoneStatus,
	theme: MantineTheme,
	name: string
) => (
	<Group
		position='center'
		spacing='xl'
		style={{ minHeight: 220, pointerEvents: 'none' }}
	>
		<ImageUploadIcon
			status={status}
			style={{ color: getIconColor(status, theme) }}
			size={80}
		/>

		<div>
			<Text size='xl' inline>
				Drag the {name} PDF here or click to select files
			</Text>
			<Text size='sm' color='dimmed' inline mt={7}>
				Attach as many files as you like, each file should not exceed 5mb
			</Text>
		</div>
	</Group>
)

interface DropzoneProps {
	name: string
	setFileBinary: Dispatch<SetStateAction<FileFormat | undefined>>
}

export function Dropzone({ setFileBinary, name }: DropzoneProps) {
	const theme = useMantineTheme()

	function uploadFile(files: File[]) {
		const file = files[0]
		const reader = new FileReader()
		reader.onload = () => {
			const binaryStr = reader.result

			setFileBinary({
				name: file.name,
				binary: binaryStr,
				type: name
			})
		}

		reader.readAsArrayBuffer(file)
	}

	return (
		<Component
			onDrop={uploadFile}
			maxSize={3 * 1024 ** 2}
			accept={PDF_MIME_TYPE}
			multiple={false}
		>
			{status => dropzoneChildren(status, theme, name)}
		</Component>
	)
}
