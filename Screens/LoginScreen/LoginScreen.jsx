import React from "react";
import { useState } from "react";
import {
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
import { LoginStyled } from "./LoginStyled";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={-260}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={LoginStyled.container}>
          <ImageBackground source={BG} resizeMode="cover" style={LoginStyled.image}>
            <View style={LoginStyled.back}>
              <Text style={LoginStyled.textLoginAccount}>Увійти</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{}}
              >
                <View>
                  <TextInput
                    style={isEmailFocused ? LoginStyled.inputFocus : LoginStyled.inputLogin}
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
                      style={isPasswordFocused ? LoginStyled.inputFocus : LoginStyled.inputPassw}
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
                    <Text style={LoginStyled.show}>Показати</Text>
                  </View>
                </View>
              </KeyboardAvoidingView>

              <View>
                <Pressable style={LoginStyled.button}>
                  <Text style={LoginStyled.text}>Увійти </Text>
                </Pressable>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <Text style={LoginStyled.textQuestionAccount}>Немає акаунту?</Text>
                  <Pressable>
                    <Text style={LoginStyled.textQuestionAccountBtn}>Увійти </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
