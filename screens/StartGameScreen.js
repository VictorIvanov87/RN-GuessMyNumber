import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="decimal-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	inputContainer: {
		alignItems: "center",
		backgroundColor: "#3b021f",
		borderRadius: 8,
		elevation: 4,
		justifyContent: "center",
		marginHorizontal: 24,
		marginTop: 100,
		padding: 16,
		shadowColor: "black",
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 6,
	},
	numberInput: {
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		fontSize: 32,
		fontWeight: "bold",
		height: 50,
		marginVertical: 8,
		textAlign: "center",
		width: 50,
	},
});

export default StartGameScreen;
