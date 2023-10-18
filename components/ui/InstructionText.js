import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
	return (
		<View>
			<Text style={[style, styles.instructionText]}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.secondary500,
		fontFamily: 'OpenSans',
		fontSize: 24,
	},
});

export default InstructionText;
