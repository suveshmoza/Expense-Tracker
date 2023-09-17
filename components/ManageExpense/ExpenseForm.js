import { Alert, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import InputList from './InputList';
import Button from '../UI/Button';
import { useState } from 'react';
import { GlobalStyles } from '../../constants/styles';

const ExpenseForm = ({
	onCancel,
	onSubmit,
	submitButtonLabel,
	defaultValue,
}) => {
	const [inputs, setInputs] = useState({
		amount: {
			value: defaultValue ? defaultValue.amount.toString() : '',
			isValid: true,
		},
		date: {
			value: defaultValue ? defaultValue.date.toISOString().slice(0, 10) : '',
			isValid: true,
		},
		description: {
			value: defaultValue ? defaultValue.description : '',
			isValid: true,
		},
		category: defaultValue ? defaultValue.category : '',
	});

	const updateCategory = (selectedCategory) => {
		setInputs((currInputValues) => {
			return { ...currInputValues, category: selectedCategory };
		});
	};

	const inputChangeHandler = (inputIdentifier, enteredValue) => {
		setInputs((currInputValues) => {
			return {
				...currInputValues,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};

	const submitHandler = () => {
		const expenseData = {
			amount: +inputs.amount.value,
			date: new Date(inputs.date.value),
			description: inputs.description.value,
			category: inputs.category,
		};

		const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
		const isDateValid = expenseData.date.toString() !== 'Invalid Date';
		const isDescValid = expenseData.description.trim().length > 0;

		if (!isAmountValid || !isDateValid || !isDescValid) {
			setInputs((currInputs) => {
				return {
					amount: { value: currInputs.amount.value, isValid: isAmountValid },
					date: { value: currInputs.date.value, isValid: isDateValid },
					description: {
						value: currInputs.description.value,
						isValid: isDescValid,
					},
				};
			});
			return;
		}

		onSubmit(expenseData);
	};

	const isFormValid =
		!inputs.amount.isValid || !inputs.date.isValid || !inputs.amount.isValid;

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputRow}>
				<Input
					label="Amount"
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangeHandler.bind(this, 'amount'),
						value: inputs.amount.value,
					}}
					invalid={!inputs.amount.isValid}
					style={styles.rowInput}
				/>
				<Input
					label="Date"
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangeHandler.bind(this, 'date'),
						value: inputs.date.value,
					}}
					invalid={!inputs.date.isValid}
					style={styles.rowInput}
				/>
			</View>
			<InputList
				selectHandler={updateCategory}
				defaultValue={inputs.category}
			/>
			<Input
				label="Description"
				textInputConfig={{
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, 'description'),
					value: inputs.description.value,
				}}
				invalid={!inputs.description.isValid}
			/>
			{isFormValid && (
				<Text style={styles.errorText}>
					Invalid input values-Please check your entered data
				</Text>
			)}
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
	errorText: {
		textAlign: 'center',
		color: GlobalStyles.colors.error500,
		margin: 8,
	},
});
