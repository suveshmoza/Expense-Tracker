import axios from 'axios';

const BASE_URL =
	'https://expense-tracker-rn-37b9f-default-rtdb.asia-southeast1.firebasedatabase.app';

export async function storeExpense(expenseData) {
	try {
		const response = await axios.post(BASE_URL + '/expenses.json', expenseData);
		const id = response.data.name;
		return id;
	} catch (error) {
		console.error('Error storing expense:', error);
		throw new Error('Failed to store expense data');
	}
}

export async function getExpenses() {
	try {
		const res = await axios.get(BASE_URL + '/expenses.json');
		const expenses = [];

		if (res.data) {
			for (const key of Object.keys(res.data)) {
				const expenseObj = {
					id: key,
					amount: res.data[key].amount,
					date: new Date(res.data[key].date),
					description: res.data[key].description,
					category: res.data[key].category,
				};
				expenses.push(expenseObj);
			}
		}

		return expenses;
	} catch (error) {
		console.error('Error fetching expenses:', error);
		throw new Error('Failed to fetch expenses data');
	}
}

export function updateExpense(id, expenseData) {
	return axios.put(BASE_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
	return axios.delete(BASE_URL + `/expenses/${id}.json`);
}
