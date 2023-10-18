import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

SplashScreen.preventAutoHideAsync().catch(console.warn)

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [gameIsOver, setGameIsOver] = useState(true);
	const [fontsLoaded] = useFonts({
		OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
		OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
	})

	const pickedNumberHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	};

	const gameOverHandler = (numberOfRounds) => {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds)
	};

	const startNewGame = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};


	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen userNUmber={userNumber} roundsNumber={guessRounds} onRestart={startNewGame} />;
	}

	useEffect(() => {
		async function hideSplashScreen() {
			await SplashScreen.hideAsync()
		}
		if (fontsLoaded) {
			hideSplashScreen()
		}
	}, [fontsLoaded])
	// Initally return null instead of <AppLoading />
	if (!fontsLoaded) {
		return null
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.secondary500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./assets/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		opacity: 0.15,
	},
	rootScreen: {
		flex: 1,
	},
});
