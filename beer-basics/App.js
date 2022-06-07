import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loading from "./components/loading.js";
import Home from "./components/home.js";
import Game from "./components/game.js";
import Settings from "./components/settings.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();

const App = () => {
  useFonts({
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Loading"
        screenOptions={{
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#00a39b",
          headerStyle: {
            backgroundColor: "#00a39b",
          },
          headerTitleStyle: {
            fontFamily: "Quicksand-Medium",
          },
          headerTintColor: "white",
        }}
      >
        <Tab.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: (props) => null,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: (tabInfo, color) => {
              color = tabInfo.focused ? "#00a39b" : "gray";
              return <Ionicons name="home-outline" size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Game"
          component={Game}
          options={{
            tabBarIcon: (tabInfo, color) => {
              color = tabInfo.focused ? "#00a39b" : "gray";
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={25}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: (tabInfo, color) => {
              color = tabInfo.focused ? "#00a39b" : "gray";
              return (
                <Ionicons name="settings-outline" size={25} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default App;
