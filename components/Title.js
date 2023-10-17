import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		borderColor: Colors.secondary500,
		borderWidth: 2,
		color: Colors.secondary500,
		fontSize: 24,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
	},
});

export default Title;
