import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { getExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses() {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState();

	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function fetchExpenses() {
			try {
				const expenses = await getExpenses();
				expensesCtx.setExpenses(expenses);
			} catch (error) {
				setError('Fetching Expenses Failed!');
			}
			setIsFetching(false);
		}
		fetchExpenses();
	}, []);

	if (error & !isFetching) {
		return <ErrorOverlay message={error} />;
	}

	if (isFetching) {
		return <LoadingOverlay />;
	}

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);

		return expense.date >= date7DaysAgo && expense.date <= today;
	});

	return (
		<ExpensesOutput
			expenses={recentExpenses}
			expensesPeriod="Last 7 Days"
			fallbackText={'No expenses for the last 7 days'}
		/>
	);
}

export default RecentExpenses;
