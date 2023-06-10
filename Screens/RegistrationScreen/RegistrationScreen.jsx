import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Pressable,
  keyboardType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import BG from "../img/background.png";
import { regStyled } from "./RegStyled";
import { AntDesign } from "@expo/vector-icons";

const RegScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={regStyled.container}>
        <ImageBackground source={BG} resizeMode="cover" style={regStyled.image}>
          {/* <View style={{ ...regStyled.back, height: isKeyboard ? 349 : 549 }}> */}
          <View style={regStyled.back}>
            <View style={regStyled.avatar}>
              <AntDesign name="pluscircleo" size={25} style={regStyled.iconPlus} />
            </View>
            <Text style={regStyled.textRegAccount}>Реєстрація</Text>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{}}>
              <View>
                <TextInput
                  style={isLoginFocused ? regStyled.inputFocus : regStyled.inputLogin}
                  placeholder="Логін"
                  autoComplete="username"
                  onFocus={() => {
                    setIsLoginFocused(true);
                  }}
                  onBlur={() => {
                    setIsLoginFocused(false);
                  }}
                />
                <TextInput
                  style={isEmailFocused ? regStyled.inputFocus : regStyled.inputLogin}
                  placeholder="Адреса електронної пошти"
                  autoComplete="email"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => {
                    setIsEmailFocused(false);
                  }}
                />
                <View>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={isPasswordFocused ? regStyled.inputFocus : regStyled.inputPassw}
                    placeholder="Пароль"
                    autoComplete="password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry
                    keyboardType="numeric"
                    onFocus={() => {
                      setIsPasswordFocused(true);
                    }}
                    onBlur={() => {
                      setIsPasswordFocused(false);
                    }}
                  />
                  <Text style={regStyled.show}>Показати</Text>
                </View>
              </View>
            </KeyboardAvoidingView>

            <View>
              <Pressable style={regStyled.button}>
                <Text style={regStyled.text}>Зареєстуватися</Text>
              </Pressable>

              <Text style={regStyled.textQuestionAccount}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegScreen;
