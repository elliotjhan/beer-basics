import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Modal, Button } from "react-native";
import { useFonts } from "expo-font";

const Game = () => {
  useFonts({ Quicksand: require("./../assets/fonts/Quicksand-Regular.ttf") });
  const questionList = [
    {
      prompt: "Which of these is not a primary ingredient of beer?",
      choices: ["water", "yeast", "malt", "sugar"],
      answer: 3,
    },
    {
      prompt: "True of False? Hops are required to make beer.",
      choices: ["True", "False"],
      answer: 1,
    },
    {
      prompt:
        "What country was responsible for making hops popular around the world?",
      choices: ["USA", "Germany", "Belgium", "China"],
      answer: 1,
    },
  ];
  const [questionCount, setQuestionCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [answer, setAnswer] = useState(false);
  //useEffect(() => {});

  const generateStartPage = () => {
    return (
      <React.Fragment>
        <Text style={styles.titleText}>Test Your Knowledge!</Text>
        <Pressable style={styles.startButton} onPress={() => turnGameOn()}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </React.Fragment>
    );
  };

  const turnGameOn = () => {
    setGameStarted(true);
  };

  const turnGameOff = () => {
    setGameStarted(false);
  };

  const generateQuestion = () => {
    if (!gameStarted) {
      return <React.Fragment>{generateStartPage()}</React.Fragment>;
    } else {
      let currentQuestion = questionList[questionCount];
      return (
        <React.Fragment>
          <Text style={styles.prompt}>{currentQuestion.prompt}</Text>
          <Text>{generateChoices(currentQuestion.choices)}</Text>
        </React.Fragment>
      );
    }
  };

  const generateChoices = (choices) => {
    let choicesList = [];
    for (let i = 0; i < choices.length; i++) {
      let choiceKey = choices[i] + i;
      choicesList.push(
        <Pressable
          style={styles.choice}
          key={choiceKey}
          onPress={() => checkAnswer(choices[i])}
        >
          <Text>{choices[i]}</Text>
        </Pressable>
      );
    }
    return choicesList;
  };

  const checkAnswer = (choice) => {
    let currentQuestion = questionList[questionCount];
    let correctAnswer = currentQuestion.choices[currentQuestion.answer];
    if (choice === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    setModalVisible(!modalVisible);
  };

  const incrementQuestionCount = () => {
    if (questionCount === questionList.length - 1) {
      setQuestionCount(0); //when hitting the end, reset to 0
      turnGameOff();
    } else {
      setQuestionCount(questionCount + 1);
    }
  };

  const generateModalContent = () => {
    let buttonText = "Next Question";
    if (questionCount === questionList.length - 1) buttonText = "Reset";
    if (answer === true) {
      return (
        <React.Fragment>
          <Text>Correct!</Text>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible);
              incrementQuestionCount();
            }}
            title={buttonText}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Text>Incorrect!</Text>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title="Try Again"
          />
        </React.Fragment>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>{generateModalContent()}</View>
      </Modal>
      {generateQuestion()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontFamily: "Quicksand",
  },
  titleText: {
    fontSize: 40,
    fontFamily: "Quicksand",
    textAlign: "center",
  },
  startButton: {
    backgroundColor: "#00a39b",
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  prompt: {
    fontSize: 30,
    fontFamily: "Quicksand",
  },
  choice: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    width: "100%",
    borderRadius: 8,
    height: 50,
    backgroundColor: "gray",
    fontFamily: "Quicksand",
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Game;
