import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({ expenses, periodName }) => {
	const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}>₹{expenseSum.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: GlobalStyles.colors.primary50,
		borderRadius: 16,
		// margin: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	period: {
		fontSize: 14,
		fontWeight: 'bold',
		color: GlobalStyles.colors.primary400,
	},
	sum: {
		fontSize: 20,
		fontWeight: 'bold',
		color: GlobalStyles.colors.primary500,
	},
});
