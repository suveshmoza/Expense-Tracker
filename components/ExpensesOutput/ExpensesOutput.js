import { StyleSheet, View } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DummyData = [
	{
		id: '1',
		description: 'A pair of shoes',
		amount: 59.99,
		date: new Date('2021-12-19'),
	},
	{
		id: '2',
		description: 'A pair of sock',
		amount: 9.99,
		date: new Date('2021-10-19'),
	},
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={DummyData} periodName={expensesPeriod} />
			<ExpensesList expenses={DummyData} />
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
});
