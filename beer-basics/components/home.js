import React from 'react';
import { Text, Pressable, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./../assets/background1.jpeg')}
      >
        <Text style={styles.title}>Beer Basics</Text>
        <Pressable 
          onPress={() => {
            props.navigation.navigate('Menu')
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Start</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }, 
  image: {
    flex: 1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#003e01',
    width: 100,
    marginTop: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    color: 'white'
  },
  title: {
    fontFamily: 'Optima, sans-serif',
    fontSize: 60,
    color: 'white',
    paddingTop: '20%',
    textAlign: 'center'
  }
});

export default HomeScreen;