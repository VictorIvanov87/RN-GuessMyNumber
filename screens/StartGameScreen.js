import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const numberInputHandler = (userInput) => {
		setEnteredNumber(userInput);
	};

	const confirmInputHandler = () => {
		const choosenNumber = parseInt(enteredNumber);

		if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
			Alert.alert(
				"Invalid number",
				"You should pass a number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: { resetInputHandler },
					},
				]
			);
			return;
		}

		onPickNumber(choosenNumber);
	};

	const resetInputHandler = () => {
		setEnteredNumber("");
	};

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<InstructionText>Enter number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="decimal-pad"
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={numberInputHandler}
					value={enteredNumber}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</Card>
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
	numberInput: {
		borderBottomColor: Colors.secondary500,
		borderBottomWidth: 2,
		color: Colors.secondary500,
		fontSize: 32,
		fontWeight: "bold",
		height: 50,
		marginVertical: 8,
		textAlign: "center",
		width: 50,
	},
	rootContainer: {
		alignItems: "center",
		flex: 1,
		marginTop: 100,
	},
});

export default StartGameScreen;
