import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { GlobalStyles } from '../../constants/styles';

const InputList = ({ selectHandler, defaultValue }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(defaultValue ? defaultValue : null);
	const [items, setItems] = useState([
		{ label: 'Shopping', value: 'shopping' },
		{ label: 'Flight', value: 'flight' },
		{ label: 'Train', value: 'train' },
		{ label: 'Food', value: 'food' },
		{ label: 'Health', value: 'health' },
		{ label: 'Electricity', value: 'electricity' },
		{ label: 'Payments', value: 'payments' },
		{ label: 'Others', value: 'other' },
	]);

	const handleChange = (value) => {
		selectHandler(value);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.label}>Category</Text>
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				placeholder="Select a category"
				style={{
					backgroundColor: GlobalStyles.colors.primary100,
					borderRadius: 16,
					overflow: 'hidden',
				}}
				labelStyle={{ fontSize: 18 }}
				listItemLabelStyle={{
					fontSize: 18,
				}}
				dropDownContainerStyle={{
					backgroundColor: GlobalStyles.colors.primary100,
				}}
				onSelectItem={({ value }) => {
					handleChange(value);
				}}
			/>
		</View>
	);
};

export default InputList;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 4,
		marginVertical: 12,
	},
	label: {
		fontSize: 14,
		color: GlobalStyles.colors.primary100,
		marginBottom: 4,
	},
});
