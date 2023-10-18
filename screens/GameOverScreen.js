import { Text, Image, View, StyleSheet } from "react-native";
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNUmber, onRestart }) => {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image source={require('../assets/success.png')} style={styles.image} />
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNUmber}</Text>.
			</Text>
			<PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
		</View >
	);
};

const styles = StyleSheet.create({
	highlight: {
		color: Colors.primary500,
		fontFamily: 'OpenSansBold'
	},
	image: {
		height: '100%',
		width: '100%',
	},
	imageContainer: {
		borderColor: Colors.primary800,
		borderRadius: 150,
		borderWidth: 3,
		height: 300,
		margin: 36,
		overflow: 'hidden',
		width: 300,
	},
	rootContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 24,
	},
	summaryText: {
		fontFamily: 'OpenSans',
		fontSize: 24,
		marginBottom: 24,
		textAlign: 'center',
	},
})

export default GameOverScreen;
