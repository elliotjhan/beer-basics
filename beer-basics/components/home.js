import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const HomeScreen = (props) => {

  setTimeout(() => {
    props.navigation.navigate('Home');
  }, 1500);

  let [fontsLoaded] = useFonts({
    'Quicksand': require('./../assets/fonts/Quicksand-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../assets/logo5.png')}
      />
      <Text style={styles.title}>
        Brew 101
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a39b'
  }, 
  image: {
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    width: 100,
    marginTop: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    color: 'black'
  },
  title: {
    fontFamily: 'Quicksand',
    fontSize: 65,
    color: 'white',
    textAlign: 'center',
    paddingBottom: '40%'
  }
});

export default HomeScreen;