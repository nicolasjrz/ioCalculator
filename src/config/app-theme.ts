import { StyleSheet } from 'react-native';

export const colors = {
	darkGray: '#2D2D2D',
	lightGray: '#9B9B9B',
	orange: '#FF9427',

	textPrimary: 'white',
	testSecondary: '#666666',
	background: '#000000',
};

export const themeStyles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: colors.background,
	},
	calculatorContainer: { flex: 1, justifyContent: 'flex-end' },
	mainResult: { color: colors.textPrimary, fontSize: 70, textAlign: 'right', marginBottom: 10, fontWeight: '300' },
	subResult: { color: colors.lightGray, fontSize: 30, textAlign: 'right', marginBottom: 10, fontWeight: '500' },

	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 10,
		// backgroundColor: 'red'
	},

	button: {
		height: 80,
		width: 80,
		backgroundColor: colors.darkGray,
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 5,
	},

	buttonText: { textAlign: 'center', padding: 10, fontSize: 30, color: 'white', fontWeight: '300' },
});
