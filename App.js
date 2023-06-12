import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin_Italic,
} from "@expo-google-fonts/roboto";
import RegScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_100Thin_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        {/* <RegScreen /> */}

        <LoginScreen /> 
        {/* <PostsScreen /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}
