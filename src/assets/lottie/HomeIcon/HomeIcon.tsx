import React from 'react'

import Lottie from 'react-lottie'

import animationData from '~/assets/lottie/HomeIcon/home-icon.json'

const defaultOptions = {
	loop: false,
	autoplay: false,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
}

export function HomeIcon() {
	return (
		<Lottie
			style={{ width: 40, padding: 0, margin: 0 }}
			options={defaultOptions}
			height={40}
			width={40}
		/>
	)
}
