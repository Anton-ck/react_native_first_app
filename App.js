import { StatusBar } from "expo-status-bar";
import React from "react";
import { useCallback } from "react";
import { KeyboardAvoidingView } from "react-native";
import RegScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin_Italic,
} from "@expo-google-fonts/roboto";

// const App = () => (

// <View style={styles.container}>
//     <RegScreen />
//   </View>

// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

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
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={-200}
    >
      <RegScreen />
    </KeyboardAvoidingView>
  );
}
