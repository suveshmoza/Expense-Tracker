import { createContext, useReducer } from 'react';
import { ADD, UPDATE, DELETE } from './action';

import expensesReducer from './reducer';

const initialState = [];

export const ExpensesContext = createContext();

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

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
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
