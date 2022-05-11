import React from 'react';
import { Button, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('./../assets/background1.jpeg')}
        >
        <Button 
          title='Start'
          onPress={() => {
            props.navigation.navigate('Menu')
          }}
        />
      </ImageBackground>
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

export default HomeScreen;