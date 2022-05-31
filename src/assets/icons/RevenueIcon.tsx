import React from 'react'

import { SVGIcons } from '~/types/svgIcons'

export function RevenueIcon({ className, width = 40, height = 40 }: SVGIcons) {
	return (
		<svg
			version='1.1'
			id='Revenue_Icon'
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
				d='M16,0H4C1.791,0,0,1.791,0,4v12c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V4C20,1.791,18.209,0,16,0z
	 M18,16c0,1.103-0.897,2-2,2H4c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h12c1.103,0,2,0.897,2,2V16z'
			/>
			<g>
				<g>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M11.25,9h-2.5C8.344,9,8,8.542,8,8s0.344-1,0.75-1h3.75
			c0.553,0,1-0.448,1-1s-0.447-1-1-1H11V4H9v1H8.75C7.233,5,6,6.346,6,8s1.233,3,2.75,3h2.5c0.406,0,0.75,0.458,0.75,1
			s-0.344,1-0.75,1H7c-0.553,0-1,0.447-1,1s0.447,1,1,1h2v1h2v-1h0.25c1.517,0,2.75-1.346,2.75-3S12.767,9,11.25,9z'
					/>
				</g>
			</g>
		</svg>
	)
}
