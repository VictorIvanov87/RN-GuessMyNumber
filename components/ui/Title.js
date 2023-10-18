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
		fontFamily: 'OpenSansBold',
		fontSize: 24,
		padding: 12,
		textAlign: "center",
	},
});

export default Title;
