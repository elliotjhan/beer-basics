import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


const Game = () => {
  useFonts({
    'Quicksand': require('./../assets/fonts/Quicksand-Regular.ttf'),
  });
  return (
  <View>
      <Text style={styles.titleText}>Placeholder for multiple choice quiz game</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Quicksand"
  },
  titleText: {
    fontSize: 20,
    fontFamily: "Quicksand"
  }
});

export default Game;