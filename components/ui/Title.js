import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		borderColor: "white",
		borderWidth: 2,
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
	},
});

export default Title;
