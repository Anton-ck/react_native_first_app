import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import BG from "../../assets/img/background.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(`${email} ${password}`);

    navigation.reset({
      index: 0,
      routes: [{ name: "PostsTab" }],
    });

    setEmail(null);
    setPassword(null);
  };

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

            <View style={LoginStyled.formContainer}>
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
                  secureTextEntry={isPasswordShow ? false : true}
                  onFocus={() => {
                    setIsFocused("Password");
                  }}
                  onBlur={() => {
                    setIsFocused("");
                  }}
                  onChange={setPassword}
                />
                <Text style={LoginStyled.show} onPress={() => setIsPasswordShow(!isPasswordShow)}>
                  {isPasswordShow ? "Сховати" : "Показати"}
                </Text>
              </View>
              <View>
                <Pressable
                  onPress={handleSubmit}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#ff6a006c" : "#FF6C00",
                    },
                    LoginStyled.button,
                  ]}
                >
                  <Text style={LoginStyled.text}>Увійти</Text>
                </Pressable>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <Pressable
                    onPress={() => navigation.navigate("Registration")}
                    style={({ pressed }) => [
                      { display: "flex", flexDirection: "row" },
                      {
                        backgroundColor: pressed ? "rgb(210, 230, 255)" : "#fff",
                      },
                    ]}
                  >
                    <Text style={LoginStyled.textQuestionAccount}>Немає акаунту?</Text>
                    <Text style={LoginStyled.textQuestionAccountBtn}>Зареєструватися</Text>
                  </Pressable>
                </View>
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 144,
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
  formContainer: { marginHorizontal: 16 },
  input: {
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
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

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
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


