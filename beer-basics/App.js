import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/home.js';
import Menu from './components/menu.js';
import Game from './components/game.js';
import Settings from './components/settings.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Loading'
        screenOptions={{
          activeTintColor: 'black'
        }}
      >
        <Tab.Screen 
          name='Loading' 
          component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarStyle: {
              display: 'none'
            },
            tabBarButton: props => null
          }}
        />
        <Tab.Screen 
          name='Home'
          component={Menu}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Ionicons 
                  name="home-outline"
                  size={25}
                  color={'black'}
                />
              )
              // return <MaterialCommunityIcons name="home" color={'black'} size={25} />
            }
          }}
        />
        <Tab.Screen 
          name='Game'
          component={Game}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons 
                  name="game-controller-outline"
                  size={25}
                  color={'black'}
                />
              )
            }
          }}
        />
        <Tab.Screen 
          name='Settings'
          component={Settings}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons 
                  name="settings-outline"
                  size={25}
                  color={'black'}
                />
              )
            }
          }}
        />
      </Tab.Navigator>
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