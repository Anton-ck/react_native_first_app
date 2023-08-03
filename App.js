import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin_Italic,
} from "@expo-google-fonts/roboto";
import { AppNavigation } from "./src/Routes/AppNavigation";

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
    <>
      <NavigationContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <AppNavigation />
          </View>
        </TouchableWithoutFeedback>
      </NavigationContainer>
    </>
  );
}
