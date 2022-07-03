import React from 'react'

import { SVGIcons } from '~/types/svgIcons'

export function BadgesIcon({ className, width = 40, height = 40 }: SVGIcons) {
	return (
		<svg
			version='1.1'
			id='Badges_Icon'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			width={width}
			height={height}
			viewBox='0 0 20 20'
			enableBackground='new 0 0 20 20'
			xmlSpace='preserve'
			className={className}
		>
			<path
				d='M10,8c2.757,0,5,2.243,5,5s-2.243,5-5,5s-5-2.243-5-5S7.243,8,10,8 M10,6c-3.866,0-7,3.134-7,7s3.134,7,7,7
	c3.865,0,7-3.134,7-7S13.865,6,10,6L10,6z'
			/>
			<path
				d='M3.906,6.391L2.651,2h3.84l0.701,2.453c0.627-0.206,1.283-0.347,1.963-0.41L8,0H0l2.36,8.26
	C2.79,7.568,3.31,6.941,3.906,6.391z'
			/>
			<path
				d='M12.808,4.453L13.509,2h3.84l-1.255,4.391C16.689,6.94,17.21,7.568,17.64,8.26L20,0h-8l-1.155,4.043
	C11.524,4.106,12.181,4.247,12.808,4.453z'
			/>
		</svg>
	)
}
