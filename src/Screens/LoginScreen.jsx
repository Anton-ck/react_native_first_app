import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BG from "./img/background.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={-260}
    >
      <View style={LoginStyled.container}>
        <ImageBackground source={BG} resizeMode="cover" style={LoginStyled.image}>
          <View style={LoginStyled.back}>
            <Text style={LoginStyled.textLoginAccount}>Увійти</Text>

            <View>
              <TextInput
                style={[LoginStyled.input, isFocused === "Email" && LoginStyled.inputFocus]}
                placeholder="Адреса електронної пошти"
                autoComplete="email"
                value={email}
                placeholderTextColor="#BDBDBD"
                keyboardType="email-address"
                onFocus={() => {
                  setIsFocused("Email");
                }}
                onBlur={() => {
                  setIsFocused("");
                }}
                onChangeText={setEmail}
              />
              <View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={[LoginStyled.input, isFocused === "Password" && LoginStyled.inputFocus]}
                  placeholder="Пароль"
                  autoComplete="password"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry
                  onFocus={() => {
                    setIsFocused("Password");
                  }}
                  onBlur={() => {
                    setIsFocused("");
                  }}
                  onChange={setPassword}
                />
                <Text style={LoginStyled.show}>Показати</Text>
              </View>
            </View>

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
    </KeyboardAvoidingView>
  );
};

const LoginStyled = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  back: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  textLoginAccount: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 32,
    marginBottom: 32,
  },
  input: {
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
  },

  inputFocus: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },

  show: {
    position: "absolute",
    top: 16,
    right: 16,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  buttonReg: {
    width: 343,
    height: 32,
    padding: 32,
    marginTop: 46,
    backgroundColor: "red",
    color: "#red",
  },
  button: {
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,

    backgroundColor: "#FF6C00",
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "white",
  },
  textQuestionAccount: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  textQuestionAccountBtn: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
