import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/styles';

const Input = ({ label, style, textInputConfig, invalid }) => {
	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput
				style={[
					styles.input,
					textInputConfig.multiline && styles.inputMultiline,
					invalid && styles.invalidInput,
				]}
				{...textInputConfig}
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 4,
		marginVertical: 12,
	},
	label: {
		fontSize: 16,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
	input: {
		backgroundColor: GlobalStyles.colors.primary100,
		color: GlobalStyles.colors.primary700,
		padding: 10,
		borderRadius: 16,
		fontSize: 20,
	},
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
	invalidLabel: {
		color: GlobalStyles.colors.error500,
	},
	invalidInput: {
		backgroundColor: GlobalStyles.colors.error50,
	},
});
