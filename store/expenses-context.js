import { createContext, useReducer } from 'react';
import { ADD, UPDATE, DELETE, SET } from './action';

import expensesReducer from './reducer';

const initialState = [];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date, category }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date, category }) => {},
	setExpenses: (expenses) => {},
});

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expensesReducer, initialState);

	function addExpense(expenseData) {
		dispatch({ type: ADD, payload: expenseData });
	}

	function deleteExpense(id) {
		dispatch({ type: DELETE, payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: UPDATE, payload: { id: id, data: expenseData } });
	}

	function setExpenses(expenses) {
		dispatch({ type: SET, payload: expenses });
	}

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		setExpenses: setExpenses,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
}

export default ExpensesContextProvider;
