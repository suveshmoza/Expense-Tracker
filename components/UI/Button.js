import { View, Pressable, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Button = ({ children, onPress, mode, style }) => {
	return (
		<View style={[styles.rootContainer, style]}>
			<Pressable
				onPress={onPress}
				style={[
					({ pressed }) => pressed && styles.pressed,
					styles.button,
					mode === 'flat' && styles.flat,
				]}
				android_ripple={{ color: 'white' }}
			>
				<Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
					{children}
				</Text>
			</Pressable>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	rootContainer: {
		borderRadius: 16,
		overflow: 'hidden',
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 16,
		backgroundColor: GlobalStyles.colors.primary500,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
	},
	flat: {
		backgroundColor: 'transparent',
	},
	flatText: {
		color: GlobalStyles.colors.primary200,
	},
	pressed: {
		opacity: 0.75,
		borderColor: GlobalStyles.colors.primary100,
		borderRadius: 16,
	},
});
