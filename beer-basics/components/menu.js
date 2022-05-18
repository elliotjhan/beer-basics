import React from 'react';
import {  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import General from './general.js';
import Brewing from './brewing.js';
import History from './history.js';
import MenuList from './menuList.js';

const Stack = createNativeStackNavigator();

const Menu = () => {
  return(
    <Stack.Navigator initialRouteName='MenuList'>
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

export default Menu;
