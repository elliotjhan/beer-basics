import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

const Game = () => {
  useFonts({ 'Quicksand': require('./../assets/fonts/Quicksand-Regular.ttf')});
  const questionList = [
    {
      prompt: 'Which of these is not a primary ingredient of beer?',
      choices: ['water', 'yeast', 'malt', 'sugar'],
      answer: 3
    },
    {
      prompt: 'True of False? Hops are required to make beer.',
      choices: ['True', 'False'],
      answer: 1
    },
    {
      prompt: 'What country was responsible for making hops popular around the world?',
      choices: ['USA', 'Germany', 'Belgium', 'China'],
      answer: 1
    }
  ];
  const [questionCount, setQuestionCount] = useState(0);
  //useEffect(() => {});

  return (
    <View>
      <Text style={styles.titleText}>Test Your Knowledge!</Text>
      <Pressable
        style={styles.startButton}
        onPress={() => setQuestionCount(questionCount + 1)}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Quicksand"
  },
  titleText: {
    fontSize: 40,
    fontFamily: "Quicksand",
    textAlign: 'center',
    marginTop: '10vh'
  },
  startButton: {
    marginHorizontal: 'auto',
    marginTop: '5vh',
    backgroundColor: '#00a39b',
    padding: 15,
    borderRadius: 7
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',

  }
});

export default Game;