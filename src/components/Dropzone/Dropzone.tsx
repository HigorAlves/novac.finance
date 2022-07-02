import { Dropzone as Component } from '@mantine/dropzone'

import { InternalBanner } from './InternalBanner'

interface Props {
	hasFile: boolean
	onDrop: (files: File[]) => void
	name: string
}

export function Dropzone(props: Props) {
	return (
		<Component multiple={false} {...props}>
			{status => (
				<InternalBanner
					status={status}
					name={props.name || 'NF'}
					hasFile={props.hasFile}
				/>
			)}
		</Component>
	)
}
