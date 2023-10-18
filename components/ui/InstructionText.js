import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
	return (
		<View>
			<Text style={styles.instructionText}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.secondary500,
		fontSize: 24,
	},
});

export default InstructionText;
