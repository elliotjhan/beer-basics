import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";

const Settings = () => {
  useFonts({
    Quicksand: require("./../assets/fonts/Quicksand-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>Account</Text>
      <Pressable style={styles.pressable}>
        <View style={styles.mainTextContainer}>
          <View style={styles.pressableLeft}>
            <Ionicons name="mail-outline" size={25} color="gray" />
            <Text style={styles.mainText}>E-mail</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color="#C4C4C4" />
        </View>
      </Pressable>
      <Pressable style={styles.pressable}>
        <View style={styles.mainTextContainer}>
          <View style={styles.pressableLeft}>
            <Ionicons name="key-outline" size={25} color="gray" />
            <Text style={styles.mainText}>Password</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color="#C4C4C4" />
        </View>
      </Pressable>
      <Pressable style={styles.pressable}>
        <View style={styles.mainTextContainer}>
          <View style={styles.pressableLeft}>
            <Ionicons name="call-outline" size={25} color="gray" />
            <Text style={styles.mainText}>Phone Number</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={25} color="#C4C4C4" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryText: {
    fontFamily: "Quicksand",
    color: "gray",
    fontSize: 16,
    marginBottom: 10,
  },
  mainText: {
    fontFamily: "Quicksand",
    fontSize: 23,
    marginLeft: 10,
  },
  mainTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#d7d7d7",
  },
  pressable: {
    height: 70,
  },
  pressableLeft: {
    flexDirection: "row",
  },
});

export default Settings;
