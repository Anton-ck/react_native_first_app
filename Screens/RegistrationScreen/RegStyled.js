import { StyleSheet } from "react-native";

export const regStyled = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: 130,
  },
  iconPlus: {
    position: "absolute",
    color: "#FF6C00",
    bottom: 14,
    right: "-10%",
  },
  back: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  textRegAccount: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 92,
    marginBottom: 32,
  },
  inputLogin: {
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
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
    fontSize: 16,
    lineHeight: 19,
  },
  inputPassw: {
    position: "relative",
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    marginBottom: 43,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
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
});
