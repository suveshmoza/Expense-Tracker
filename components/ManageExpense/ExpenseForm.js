import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import InputList from './InputList';
import Button from '../UI/Button';
import { useState } from 'react';

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
	const [inputValues, setInputValues] = useState({
		amount: '',
		date: '',
		description: '',
		category: '',
	});

	const inputChangeHandler = (inputIdentifier, enteredValue) => {
		setInputValues((currInputValues) => {
			return { ...currInputValues, [inputIdentifier]: enteredValue };
		});
	};

	const submitHandler = () => {};

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputRow}>
				<Input
					label="Amount"
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangeHandler.bind(this, 'amount'),
						value: inputValues.amount,
					}}
					style={styles.rowInput}
				/>
				<Input
					label="Date"
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, 'date'),
						value: inputValues.date,
					}}
					style={styles.rowInput}
				/>
			</View>
			<InputList />
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, 'description'),
					value: inputValues.description,
				}}
			/>
			<View style={styles.buttonContainer}>
				<Button style={styles.button} mode="flat" onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	);
};

export default ExpenseForm;

const styles = StyleSheet.create({
	form: {
		marginTop: 10,
	},
	inputRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rowInput: {
		flex: 1,
	},
	title: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 24,
		textAlign: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		minWidth: 120,
		marginHorizontal: 8,
	},
});
