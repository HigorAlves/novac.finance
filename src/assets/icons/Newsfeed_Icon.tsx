import React from 'react'

import { SVGIcons } from '~/types/svgIcons'

export function NewsfeedIcon({ className, width = 40, height = 40 }: SVGIcons) {
	return (
		<svg
			version='1.1'
			id='Newsfeed_Icon'
			x='0px'
			y='0px'
			width={width}
			height={height}
			viewBox='0 0 20 20'
			xmlSpace='preserve'
			className={className}
		>
			<path
				d='M16,0H4C1.791,0,0,1.791,0,4v8c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V4C20,1.791,18.209,0,16,0z
	 M18,12c0,1.103-0.897,2-2,2H4c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2V12z'
			/>
			<g>
				<g>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0,10v2h20v-2H0z M5,20h10v-2H5V20z'
					/>
				</g>
			</g>
		</svg>
	)
}
