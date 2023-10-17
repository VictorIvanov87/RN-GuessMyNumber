import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
	const pressHandler = () => {
		console.log("asd");
	};

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
				onPress={pressHandler}
				android_ripple={{ color: "#640233" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonInnerContainer: {
		backgroundColor: "#72063c",
		elevation: 2,
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
