import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import General from './general.js';
import Brewing from './brewing.js';
import History from './history.js';
import MenuList from './menuList.js';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

const Home = () => {
  useFonts({
    'Quicksand-Medium': require('./../assets/fonts/Quicksand-Medium.ttf'),
  });
  return(
    <Stack.Navigator 
      initialRouteName='MenuList'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00a39b',
        },
        headerTitleStyle: {
          fontFamily: 'Quicksand-Medium'
        },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen 
        name='Brew 101'
        component={MenuList}
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
  )
}

export default Home;
