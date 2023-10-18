import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		backgroundColor: Colors.primary800,
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
});

export default Card;
