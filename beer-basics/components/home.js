import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import General from "./general.js";
import Brewing from "./brewing.js";
import History from "./history.js";
import MenuList from "./menuList.js";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const Home = () => {
  useFonts({
    "Quicksand-Medium": require("./../assets/fonts/Quicksand-Medium.ttf"),
  });
  return (
    <Stack.Navigator
      initialRouteName="Brew 101"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00a39b",
          borderBottomWidth: 0,
          //remove white line between header and image
        },
        headerTitleStyle: {
          fontFamily: "Quicksand-Medium",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Brew 101" component={MenuList} />
      <Stack.Screen name="What Is Beer?" component={General} />
      <Stack.Screen name="Brewing" component={Brewing} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default Home;
