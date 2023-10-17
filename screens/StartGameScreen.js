import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 16,
		marginTop: 100,
		backgroundColor: "#77063c",
	},
});

export default StartGameScreen;
