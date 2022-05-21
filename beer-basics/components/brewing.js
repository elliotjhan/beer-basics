import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const General = () => {
  return (
  <View>
      <Text style={styles.titleText}>Brewing Page</Text>
      <Text style={styles.baseText}>
      Put simply, “brewing” is the practice of regulating the interactions between water, starch, yeast, and hops so that the end result is what is called beer.
      </Text>
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

export default General;