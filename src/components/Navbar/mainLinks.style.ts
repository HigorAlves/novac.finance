import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, _params) => ({
	icon: {
		color: theme.colors.gray[6],
		fontSize: 40,
		padding: 8,
		borderRadius: theme.radius.sm,
		transition: 'all .2s ease-in-out',

		'&:hover': {
			color: theme.colors.red[6],
			backgroundColor: theme.colors.gray[1],
			boxShadow: '4px 7px 12px 0 rgba(35,210,226, .2)'
		}
	},

	active: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.red[7],
		color: '#fff',
		boxShadow: '4px 7px 12px 0 rgba(35,210,226, .2)',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.red[7],
			color: '#fff'
		}
	},

	container: {
		justifyContent: 'center'
	}
}))
