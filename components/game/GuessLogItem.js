import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent`s guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemText: {
    fontFamily: 'OpenSans'
  },
  listItem: {
    backgroundColor: Colors.secondary500,
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    width: '100%',
  },
})

export default GuessLogItem