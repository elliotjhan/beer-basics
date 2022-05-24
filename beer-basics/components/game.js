import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Game = () => {
  return (
  <View>
      <Text style={styles.titleText}>Game Page</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin"
  }
});

export default Game;