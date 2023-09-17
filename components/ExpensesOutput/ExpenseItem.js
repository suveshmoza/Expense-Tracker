import { View, Text, Pressable, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getIconName } from '../../util/getIcon';

const ExpenseItem = ({ id, description, date, amount, category }) => {
	const navigation = useNavigation();

	const expenseHandler = () => {
		navigation.navigate('ManageExpense', {
			expenseId: id,
		});
	};

	return (
		<View style={styles.rootContainer}>
			<Pressable
				onPress={expenseHandler}
				android_ripple={{
					color: GlobalStyles.colors.gray500,
				}}
				style={({ pressed }) => pressed && styles.pressed}
			>
				<View style={styles.expenseItemContainer}>
					<View style={styles.expenseItemDetailContainer}>
						<View style={styles.categoryIcon}>
							<Ionicons name={getIconName(category)} size={28} color="white" />
						</View>
						<View>
							<Text style={[styles.textBase, styles.description]}>
								{description}
							</Text>
							<Text style={styles.textBase}>{getFormattedDate(date)}</Text>
						</View>
					</View>
					<View style={styles.amountContainer}>
						<Text style={styles.amount}>₹{amount.toFixed(2)}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	rootContainer: {
		marginVertical: 8,
		borderRadius: 16,
		overflow: 'hidden',
	},
	pressed: {
		opacity: 0.75,
	},
	expenseItemContainer: {
		padding: 12,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		elevation: 2,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	textBase: {
		color: GlobalStyles.colors.primary50,
	},
	description: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: 'bold',
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.primary500,
		fontWeight: 'bold',
	},
	expenseItemDetailContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	categoryIcon: {
		// backgroundColor: 'red',
		paddingVertical: 6,
		paddingHorizontal: 3,
		marginRight: 4,
	},
});
