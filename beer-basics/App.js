import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/home.jsx';

const App = () => {
  return(
    <View style={styles.container}>
      <HomeScreen style={styles.image}></HomeScreen>
      <StatusBar style="auto" />
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