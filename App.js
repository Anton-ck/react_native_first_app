import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import RegScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin_Italic,
} from "@expo-google-fonts/roboto";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";

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
    <View style={{ flex: 1 }}>
      <RegScreen />

      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
    </View>
  );
}
