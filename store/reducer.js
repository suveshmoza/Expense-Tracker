import { ADD, DELETE, SET, UPDATE } from './action';

function expensesReducer(state, action) {
	switch (action.type) {
		case ADD:
			return [action.payload, ...state];
		case UPDATE:
			const updatableExpenseIndex = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			const updatableExpense = state[updatableExpenseIndex];
			const updatedItem = { ...updatableExpense, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		case DELETE:
			return state.filter((expense) => expense.id !== action.payload);
		case SET:
			const inverted = action.payload.reverse();
			return inverted;
		default:
			return state;
	}
}

export default expensesReducer;
