import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <ImageBackground
        style={props.style}
        source={require('./../assets/background1.jpeg')}
        >
      </ImageBackground>
    </View>
  )
}

export default HomeScreen;