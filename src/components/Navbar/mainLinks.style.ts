import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params) => ({
	icon: {
		fill: theme.colors.gray[6],
		fontSize: 40,
		padding: 8,
		borderRadius: theme.radius.sm,
		transition: 'all .2s ease-in-out',

		'&:hover': {
			fill: theme.colors.violet[4],
			backgroundColor: theme.colors.gray[1],
			boxShadow: '4px 7px 12px 0 rgba(35,210,226, .2)'
		}
	},

	active: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.violet[4],
		fill: '#fff',
		boxShadow: '4px 7px 12px 0 rgba(35,210,226, .2)',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.violet[6],
			fill: '#fff'
		}
	},

	container: {
		justifyContent: 'center'
	}
}))
