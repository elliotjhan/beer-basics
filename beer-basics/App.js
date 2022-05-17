import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/home.js';
import Menu from './components/menu.js';
import General from './components/general.js';
import Brewing from './components/brewing.js';
import History from './components/history.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Menu'
          component={Menu}
        />
        <Stack.Screen 
          name='General'
          component={General}
        />
        <Stack.Screen 
          name='Brewing'
          component={Brewing}
        />
        <Stack.Screen 
          name='History'
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
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