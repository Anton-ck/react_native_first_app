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
  Button,
} from "react-native";
import BG from "../../assets/img/background.png";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log(`${login} ${email} ${password}`);
    navigation.reset({
      index: 0,
      routes: [{ name: "PostsTab" }],
    });
    setLogin(null);
    setEmail(null);
    setPassword(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={-200}
    >
      <View style={regStyled.container}>
        <ImageBackground source={BG} resizeMode="cover" style={regStyled.image}>
          <View style={regStyled.back}>
            <View style={regStyled.avatar}>
              <AntDesign name="pluscircleo" size={25} style={regStyled.iconPlus} />
            </View>
            <Text style={regStyled.textRegAccount}>Реєстрація</Text>

            <View style={{marginHorizontal: 16}}>
              <TextInput
                style={[regStyled.input, isFocused === "Login" && regStyled.inputFocus]}
                placeholder="Логін"
                autoComplete="username"
                value={login}
                onFocus={() => {
                  setIsFocused("Login");
                }}
                onBlur={() => {
                  setIsFocused("");
                }}
                onChangeText={setLogin}
              />
              <TextInput
                style={[regStyled.input, isFocused === "Email" && regStyled.inputFocus]}
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
                  style={[regStyled.input, isFocused === "Password" && regStyled.inputFocus]}
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

                <Text style={regStyled.show} onPress={() => setIsPasswordShow(!isPasswordShow)}>
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
                    regStyled.button,
                  ]}
                >
                  <Text style={regStyled.text}>Зареєстуватися</Text>
                </Pressable>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <Text
                    style={[regStyled.textQuestionAccount, { marginLeft: 5 }]}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    Вже є акаунт? Увійти
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const regStyled = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconPlus: {
    position: "absolute",
    color: "#FF6C00",
    bottom: 14,
    right: "-10%",
  },
  back: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
  },
  textRegAccount: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 32,
  },
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
});

export default RegScreen;
