import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/home.jsx';

const App = () => {
  return(
    <View style={styles.container}>
            <ImageBackground
        style={styles.image}
        source={require('./assets/background1.jpeg')}
        >



        <Text>Beer Basics</Text>
      <StatusBar style="auto" />
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
  }
});

export default App;