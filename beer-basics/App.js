import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./assets/background1.jpeg')}
        >
        <Text>Beer Basics</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  }
});

export default App;